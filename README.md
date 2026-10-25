# Forma — Monday workout preview

A single-page, mobile-friendly prototype for a personal Monday push workout. It uses only HTML, CSS, JavaScript, and an original inline SVG exercise illustration. No build step, package installation, external assets, or paid service is required.

Open `index.html` in a browser for a quick look. For the most reliable preview, serve this folder locally with `python3 -m http.server 4173` and open `http://localhost:4173/`.

All five Monday exercise cards contain lightweight looping SVG demonstrations. The drawings animate only while their cards are open. Every exercise also has sets, reps, rest, and technique notes.

Each set has a reps field, weight field (in kilograms), and completion checkbox. At least 12 reps and a weight above 0 kg are required to complete a set. Entries are saved for the current date in that browser's local storage, so they remain after a reload but do not sync between devices.

## Publish on GitHub Pages

The source lives in the public [Vdnsh/forma-gym](https://github.com/Vdnsh/forma-gym) repository. To host it, choose **Deploy from a branch** in **Settings → Pages**, select `main` and `/ (root)`, then save. The site will be available at `https://vdnsh.github.io/forma-gym/` after GitHub publishes it.

GitHub Pages serves JavaScript as well as HTML and CSS. It does not run a server-side application for this project. A public repository and `github.io` address work with GitHub Free.
