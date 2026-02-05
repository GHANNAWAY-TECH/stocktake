export default {
  async fetch(req, env) {
    if (req.method !== "POST") {
      return new Response("Forbidden", { status: 403 });
    }

    const { image } = await req.json();

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            role: "user",
            parts: [
              { text: "Identify the beverage and size only." },
              { inlineData: { mimeType: "image/jpeg", data: image } }
            ]
          }]
        })
      }
    );

    const j = await r.json();

    return new Response(JSON.stringify({
      result: j.candidates?.[0]?.content?.parts?.[0]?.text || "Unknown"
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
