import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CursorBubble } from "./cursor/CursorBubble.tsx";
import { CursorDotRing } from "./cursor/CursorDotRing.tsx";
import { CursorGlow } from "./cursor/CursorGlow.tsx";
import { CursorMagnetic } from "./cursor/CursorMagnetic.tsx";
import { CursorParticles } from "./cursor/CursorParticles.tsx";
import { CursorRipple } from "./cursor/CursorRipple.tsx";
import { CursorSpotlight } from "./cursor/CursorSpotlight.tsx";
import { CursorTrail } from "./cursor/CursorTrail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CursorBubble /> not working 
    {/* <CursorDotRing /> */}
    {/* <CursorGlow /> */}
    {/* <CursorMagnetic /> */}
    {/* <CursorParticles color="black"/> */}
    {/* <CursorRipple color="green"/> not working  */}
    {/* <CursorSpotlight /> */}
    {/* <CursorTrail /> */}
  </StrictMode>,
);
