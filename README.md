# GTS Stock Taker Pro

**Ghannaway Tech Systems Vision Suite** — A modern, intelligent inventory management system powered by AI vision and real-time camera scanning.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-proprietary-blue)
![Built with](https://img.shields.io/badge/built_with-HTML%2FJS%2FTailwind-blue)

## 🚀 Overview

GTS Stock Taker Pro is a browser-based inventory auditing application that leverages **Google Gemini Vision AI** to automatically identify and log items from camera captures. Designed for warehouse operations, retail environments, and supply chain management, it enables fast, accurate stock counts without manual data entry.

### Key Features

- 📷 **Real-Time Camera Scanning** — Direct device camera integration for instant item capture
- 🤖 **AI-Powered Analysis** — Google Gemini 2.5 Flash vision model for intelligent item recognition
- 🎯 **Custom Recognition Rules** — User-defined context and instructions for specialized inventory scenarios
- 📝 **Dual Input Modes** — Automated AI capture or manual entry for flexibility
- 📊 **Live Audit Dashboard** — Real-time inventory list with quantity tracking
- ⏱️ **Session Timing** — Built-in audit clock to measure stocktaking duration
- 💾 **CSV Export** — Download audit results for integration with enterprise systems
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- 🎨 **Professional UI** — Modern dark-mode interface with Tailwind CSS styling

## 🏗️ Architecture

### Frontend (`index.html`)
- **Framework**: Vanilla JavaScript with Tailwind CSS
- **Key Components**:
  - Video streaming canvas with permission management
  - Real-time inventory list renderer
  - Toast notification system
  - Manual entry modal
  - Session timer and status indicators
  - CSV export functionality

### Backend (`worker.js`)
- **Runtime**: Cloudflare Workers
- **Purpose**: 
  - Serverless API for handling image-to-text processing
  - Gemini Vision API integration with error handling
  - CORS support for cross-origin requests
  - Rate limiting and retry logic

## 🔧 Technical Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, Vanilla JavaScript, Tailwind CSS v3 |
| **Vision AI** | Google Gemini 2.5 Flash (image analysis) |
| **Deployment** | Cloudflare Pages / Workers |
| **Real-Time Features** | Browser MediaStream API, Canvas API |

## 📦 Installation & Setup

### Prerequisites
- Modern browser with camera access (Chrome, Edge, Safari, Firefox)
- Google Cloud Platform account with Gemini API key
- Cloudflare account (for Worker deployment, optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/GHANNAWAY-TECH/stocktake.git
   cd stocktake
