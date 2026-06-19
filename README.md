# Vic's Bar & Grill — Static Site

This repository contains a simple static website scaffold for a bar & grill with pages: Home, About, Menu, Events, Contact.

Preview locally:

1. Open the folder in a code editor or terminal.
2. Serve it with a static server. For example, using Python 3:

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploy to GitHub Pages:

```bash
git init
git add .
git commit -m "Initial site"
# create a repo on GitHub, then:
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Then enable GitHub Pages in the repository settings (choose the `main` branch or `gh-pages`).

Alternatives: Connect the repo to Vercel or Netlify for automatic deployments and previews.
