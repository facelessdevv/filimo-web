cat > README.md << 'EOF'
# 🎬 Filimo Movie Explorer (React)

A modern web version of the Filimo Movie Explorer built with **React**, designed to simulate a rich movie browsing experience.  
Inspired by the Android Jetpack Compose version, this app uses hardcoded Filimo-style API data and mimics production-ready features like movie rows, pagination, dark/light mode, RTL layout, and local likes.

> This project focuses on frontend architecture, component reusability, and responsive UI.

---

## 🌍 Live Features

<table>
  <tr>
    <td><img src="web_preview.gif" width="500"/></td>
  </tr>
</table>

---

## ✨ Features

- 🌓 **Light & Dark Mode Toggle**
- 📜 **Persian RTL Layout** using custom **Vazir font**
- 🔁 **Auto-pagination** every 10 seconds using `links.forward` from hardcoded API response
- 🎞️ **Horizontal slider rows** mimicking Filimo's UI
- ❤️ **Local Like/Unlike Functionality** stored in `localStorage`
- 📦 **No Backend Required** — uses hardcoded JSON structure

---

## ⚙️ Project Setup

```bash
# 1. Clone the repo
git clone https://github.com/facelessdevv/filimo-web

# 2. Navigate into the project
cd filimo-web

# 3. Install dependencies
npm install

# 4. Start development server
npm start
