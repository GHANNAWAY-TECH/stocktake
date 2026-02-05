export default {
  async fetch(request, env) {
    // ---- CORS ----
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const body = await request.json();

      if (!body.image) {
        return new Response(JSON.stringify({ error: "No image provided" }), {
          status: 400,
          headers: corsHeaders()
        });
      }

      // ---- Gemini Vision Call ----
      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              role: "user",
              parts: [
                {
                  text: "Identify the beverage and its size only. Example: 'Tusker Lager 500ml'. If unsure, say 'Unknown Object'."
                },
                {
                  inlineData: {
                    mimeType: "image/jpeg",
                    data: body.image
                  }
                }
              ]
            }]
          })
        }
      );

      const data = await geminiResponse.json();

      const result =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "Unknown Object";

      return new Response(JSON.stringify({ result }), {
        status: 200,
        headers: corsHeaders()
      });

    } catch (err) {
      return new Response(JSON.stringify({
        error: "Processing failed",
        details: err.message
      }), {
        status: 500,
        headers: corsHeaders()
      });
    }
  }
};

// ---- Helpers ----
function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };
}
