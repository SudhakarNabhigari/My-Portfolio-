# Sudhakar Nabhigari — Gen AI Engineer Portfolio

A responsive, animated single-page portfolio built with HTML, CSS and vanilla JavaScript. The visual direction uses a dark navy base, neon violet/cyan accents, an intro sequence, scrolling sections, project filters, responsive navigation, reveal animations and a local portfolio FAQ assistant.

## Run locally

### Option 1 — VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html` → **Open with Live Server**.

### Option 2 — Python
Open VS Code Terminal in this folder and run:

```powershell
python -m http.server 5500
```

Keep the terminal running and open http://localhost:5500. Stop the server with Ctrl+C only when you are finished.

## Deploy to Vercel
This is a static website; no build command is required. Import the folder/repository in Vercel and use the project root as the root directory. Or push this folder to a GitHub repository and import that repository into Vercel.

## Before publishing
- Add your actual resume PDF at `assets/resume.pdf` if you want a downloadable resume; the current hero button directs visitors to Contact until the PDF is added.
- Confirm the repository links and project summaries. Some projects may need their exact repository URL adjusted if their GitHub slug differs.
- The contact email currently uses `sudhakarnabhigari4@gmail.com`; replace it if that is not the preferred public email.
- Certification image links use the screenshots supplied with the portfolio. Open them to confirm which certificates each image contains.

## Structure
- `index.html` — page content and sections
- `styles.css` — responsive layout, visual design and animations
- `app.js` — intro loader, typewriter, scroll reveals, filters, mobile menu and local FAQ assistant
- `assets/` — profile photo and certificate images

The assistant is a local demo FAQ, not a live LLM/chat API. No API key is required.
