# Portfolio 2026 - Gemini AI Project Context

## 1. Project Overview
*   **Owner:** Bill Casadei
*   **Role:** Creative Director & Designer (Brand Identity • User Interface • Digital Marketing)
*   **Aesthetic:** Ultra-premium, motion-heavy, digital agency execution (Inspired by Tonik.com).
*   **Core Conceptual Motif:** "Shaping Strategic Experiences."

## 2. Technology Stack
*   **Core:** React + TypeScript (Built on Vite)
*   **Styling:** Tailwind CSS v4 (No bulky external themes, pure utility control)
*   **WebGL / Motion:** Three.js via `@react-three/fiber` and `@react-three/drei`

## 3. Global Design System
*   **Primary Accent:** Burnt Orange (`#f97316` / `orange-500` / `#ea580c`)
*   **Base Background:** Muted Dark Slate (`zinc-900`)
*   **Typeface (Headings):** **Clash Display** (Used carefully in `font-light` or `font-normal` with wide tracking for luxury branding scale).
*   **Typeface (Body):** **Outfit**

## 4. Architectural State
*   **Hero Section (`App.tsx`):** A strictly layered Z-index build. Background `<video>` showreel, mid-ground WebGL `<Canvas>`, foreground Glassmorphic navigation and typography.
*   **The Brand Mark (`<BlobMark />`):** An isolated, procedural 3D physics object (liquid metal sphere via `MeshDistortMaterial`). Exported as both an integrated scene object and a standalone mini-canvas component.

## 5. Active Milestone (The Sculpted Reveal)
*   **Goal:** Transition the liquid metallic `<BlobMark>` into a high-fidelity `.glb` classical sculpture bust (e.g., Apollo, David, or Venus).
*   **Technical Requirement:** Requires advanced cross-dissolve fragment shaders or clever noise-based alpha mapping to handle the topology mismatch between pure mathematical geometry and heavily sculpted photogrammetry.

## 6. Collaboration Protocol (Strict)
*   **Targeted Edits:** Do not modify code, layout, or copy that falls outside the immediate scope of the user's request. 
*   **Creative Input:** Proactive creative suggestions are welcome within the requested task, but unsolicited changes to independent blocks of the project are prohibited.
*   **Phase Discipline:** Stay focused exclusively on the current case study or project segment. Do not initiate or suggest moving to the next stage of the project until explicitly asked.
