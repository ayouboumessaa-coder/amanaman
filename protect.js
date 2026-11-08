// AMAN privacy & security shield.
// Protects vulnerable users from screen surveillance, unauthorized recording, and snooping.
// Includes instant stealth camouflage (Double-tap Escape) and private session protections.
(()=>{
  const root = document.documentElement;
  const msg = [
    "المحتوى مخفي لحماية الخصوصية والأمان",
    "Contenu masqué pour protéger la confidentialité",
    "Content hidden to protect privacy"
  ];
  const lang = () => {
    try { return typeof L === "number" ? L : 0; } catch (e) { return 0; }
  };

  const shield = document.createElement("div");
  shield.id = "aman-shield";
  shield.setAttribute("aria-hidden", "true");

  const setText = () => {
    shield.textContent = msg[lang()] || msg[0];
  };

  const hide = () => {
    if (hasActiveMedia()) return; // Never disrupt active emergency, sign camera, or voice assistant
    setText();
    root.classList.add("aman-hidden");
  };

  const show = () => root.classList.remove("aman-hidden");

  const mount = () => {
    if (!shield.isConnected) document.body.appendChild(shield);
  };
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);

  // Check if camera or audio assistant is actively running
  const hasActiveMedia = () => Boolean(
    (window.amanCameraState && window.amanCameraState.stream) ||
    window.amanBlindVoiceActive ||
    window.amanContinuousListening ||
    window.amanMediaStreamActive
  );

  // Hide content when the tab goes to background (app switcher previews, tab switching)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) hide(); else show();
  });
  addEventListener("pagehide", hide);
  addEventListener("pageshow", show);

  // Double-tap Escape key for Instant Emergency Camouflage (Weather Screen)
  let lastEscTime = 0;
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      const now = Date.now();
      if (now - lastEscTime < 500) {
        if (typeof window.amanCamouflage === "function") {
          window.amanCamouflage();
        }
      }
      lastEscTime = now;
    }
  }, true);

  // Print Screen and common screen capture shortcut detection:
  // Briefly blur the window and clear the system clipboard image buffer
  const capture = e => {
    const k = (e.key || "").toLowerCase();
    const prt = k === "printscreen" || e.keyCode === 44;
    const mac = e.metaKey && e.shiftKey && ["3", "4", "5", "s"].includes(k);
    const win = e.metaKey && e.shiftKey && k === "s";
    if (!prt && !mac && !win) return;
    hide();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText("");
      }
    } catch (err) {}
    setTimeout(show, 1500);
  };
  addEventListener("keyup", capture, true);
  addEventListener("keydown", capture, true);

  // Block unauthorized tab screen-sharing from untrusted extensions or injected scripts
  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices.getDisplayMedia = () => Promise.reject(new DOMException("Screen capture is disabled on AMAN", "NotAllowedError"));
    }
  } catch (err) {}

  // Community content guard: prevent unauthorized copying/scraping of vulnerable women's testimonies
  const guarded = t => t && t.closest && t.closest(".community-post, .community-comment, .community-photo, .community-ai-out");
  const editable = t => t && t.closest && t.closest("input, textarea, [contenteditable=true]");
  ["contextmenu", "copy", "cut", "dragstart"].forEach(ev => {
    document.addEventListener(ev, e => {
      if (guarded(e.target) && !editable(e.target)) {
        e.preventDefault();
      }
    }, true);
  });

  // Printing / "Save as PDF" shows privacy notice
  addEventListener("beforeprint", hide);
  addEventListener("afterprint", show);
})();
