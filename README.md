# Yash Sanikop Portfolio 🚀

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/ByteLounge/Portfolio-Website-main/blob/main/LICENSE)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=flat&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An immersive, 3D interactive portfolio website built with **React**, **Three.js**, and **GSAP**. This project features a high-performance 3D character, smooth scroll animations, and a modern, dark-themed UI to showcase my software engineering journey and projects.

---

## 📸 Preview

![Portfolio Preview](public/images/placeholder.webp) 
*Visit [my website](https://yashsanikop.netlify.app/) to see the live version.*

---

## ✨ Key Features

- **🎮 3D Interactive Scene**: A fully rigged 3D character that responds to mouse movements and user interaction, powered by `@react-three/fiber` and `@react-three/drei`.
- **🎭 GSAP Animations**: Smooth, high-performance scroll-triggered animations and text splitting effects.
- **📱 Responsive Design**: Fully optimized for various screen sizes, ensuring a seamless experience across desktop and mobile.
- **🖱️ Custom Cursor**: A dynamic, interactive cursor that enhances the user experience.
- **💻 Project Showcase**: A detailed gallery of my work, including Sneaker AI, NIDS, and more.
- **📈 Career Timeline**: A professional experience section highlighting my roles at Lenovo India and CareMeez.
- **⏳ Loading Experience**: A polished 3D loading screen to ensure all assets are ready before the experience begins.

---

## 🛠️ Tech Stack

- **Core**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **3D Engine**: [Three.js](https://threejs.org/) (via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction))
- **Physics**: [@react-three/cannon](https://github.com/pmndrs/use-cannon)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ByteLounge/Portfolio-Website-main.git
   cd Portfolio-Website-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`*

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
├── public/                 # Static assets (3D models, images)
├── src/
│   ├── components/         # React components
│   │   ├── Character/      # 3D character implementation
│   │   └── styles/         # Section-specific CSS
│   ├── context/            # Global state (Loading provider)
│   ├── data/               # Portfolio content (projects, experience)
│   └── utils/              # Animation and helper functions
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🤝 Credits

This project was inspired by and built upon the foundation of:
- **[MoncyDev/Portfolio-Website](https://github.com/MoncyDev/Portfolio-Website)** - Special thanks to Moncy for the incredible design and 3D implementation concepts.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/ByteLounge">Yash Sanikop</a>
</p>
