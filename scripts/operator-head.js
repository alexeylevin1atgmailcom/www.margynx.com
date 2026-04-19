(function () {
  const STYLE_ID = "operator-head-runtime-styles";

  const RUNTIME_CSS = `
    .operator-head::before {
      display: none !important;
    }

    .operator-head {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      isolation: isolate;
    }

    .operator-head svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .operator-head svg * {
      vector-effect: non-scaling-stroke;
    }

    @keyframes operatorHeadMouthSpeak {
      0%, 100% {
        d: path("M 237 235 Q 234 236 230 235");
      }
      15% {
        d: path("M 237 235 Q 234 238 230 235");
      }
      30% {
        d: path("M 237 235 Q 234 236 230 235");
      }
      45% {
        d: path("M 237 235 Q 234 239 230 235");
      }
      60% {
        d: path("M 237 235 Q 234 237 230 235");
      }
      75% {
        d: path("M 237 235 Q 234 238 230 235");
      }
    }

    @keyframes operatorHeadLowerLipSpeak {
      0%, 100% {
        d: path("M 236 240 Q 233 241 229 240");
      }
      15% {
        d: path("M 236 242 Q 233 243 229 242");
      }
      30% {
        d: path("M 236 240 Q 233 241 229 240");
      }
      45% {
        d: path("M 236 243 Q 233 244 229 243");
      }
      60% {
        d: path("M 236 241 Q 233 242 229 241");
      }
      75% {
        d: path("M 236 242 Q 233 243 229 242");
      }
    }

    @keyframes operatorHeadJawMove {
      0%, 100% {
        d: path("M 230 270 Q 225 280 215 287 Q 200 294 180 298");
      }
      15% {
        d: path("M 230 272 Q 225 281 215 288 Q 200 295 180 299");
      }
      30% {
        d: path("M 230 270 Q 225 280 215 287 Q 200 294 180 298");
      }
      45% {
        d: path("M 230 273 Q 225 282 215 289 Q 200 296 180 300");
      }
      60% {
        d: path("M 230 271 Q 225 280 215 287 Q 200 294 180 298");
      }
      75% {
        d: path("M 230 272 Q 225 281 215 288 Q 200 295 180 299");
      }
    }

    @keyframes operatorHeadBlink {
      0%, 90%, 100% { opacity: 1; }
      95% { opacity: 0.1; }
    }

    @keyframes operatorHeadSoundWave1 {
      0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.8);
      }
      50% {
        opacity: 0.6;
      }
      100% {
        opacity: 0;
        transform: translate(15px, 0) scale(1.2);
      }
    }

    @keyframes operatorHeadSoundWave2 {
      0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.8);
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 0;
        transform: translate(20px, 0) scale(1.3);
      }
    }

    @keyframes operatorHeadSoundWave3 {
      0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.8);
      }
      50% {
        opacity: 0.4;
      }
      100% {
        opacity: 0;
        transform: translate(25px, 0) scale(1.4);
      }
    }

    .operator-head .eye {
      animation: operatorHeadBlink 4s ease-in-out infinite;
      transform-origin: center;
    }

    .operator-head .sound-wave-1,
    .operator-head .sound-wave-2,
    .operator-head .sound-wave-3 {
      opacity: 0;
      transform-box: fill-box;
      transform-origin: center;
    }

    .operator-head[data-speaking="true"] .mouth-upper {
      animation: operatorHeadMouthSpeak 1.8s ease-in-out infinite;
    }

    .operator-head[data-speaking="true"] .mouth-lower {
      animation: operatorHeadLowerLipSpeak 1.8s ease-in-out infinite;
    }

    .operator-head[data-speaking="true"] .jaw {
      animation: operatorHeadJawMove 1.8s ease-in-out infinite;
    }

    .operator-head[data-speaking="true"] .sound-wave-1 {
      animation: operatorHeadSoundWave1 1.2s ease-out infinite;
    }

    .operator-head[data-speaking="true"] .sound-wave-2 {
      animation: operatorHeadSoundWave2 1.2s ease-out infinite 0.2s;
    }

    .operator-head[data-speaking="true"] .sound-wave-3 {
      animation: operatorHeadSoundWave3 1.2s ease-out infinite 0.4s;
    }
  `;

  const HEAD_SVG = `
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="operatorHeadGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="operatorHeadSoftGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="200" cy="330" r="120" stroke="#7FD7A8" stroke-width="0.5" opacity="0.12" />
      <circle cx="200" cy="330" r="140" stroke="#7FD7A8" stroke-width="0.5" opacity="0.10" />
      <circle cx="200" cy="330" r="160" stroke="#7FD7A8" stroke-width="0.5" opacity="0.08" />

      <path d="M 88 155 Q 87 175 88 195 Q 90 215 94 235" stroke="#5CBF8E" stroke-width="1" fill="none" opacity="0.6" />
      <path d="M 92 170 Q 91 190 93 210" stroke="#5CBF8E" stroke-width="0.8" fill="none" opacity="0.5" />

      <ellipse cx="120" cy="190" rx="18" ry="30" stroke="#7FD7A8" stroke-width="1.6" fill="none" filter="url(#operatorHeadGlow)" />
      <path d="M 130 184 Q 127 190 130 196" stroke="#5CBF8E" stroke-width="1.2" fill="none" opacity="0.8" />
      <path d="M 127 187 Q 125 190 127 193" stroke="#5CBF8E" stroke-width="1" fill="none" opacity="0.7" />
      <path d="M 125 195 Q 123 198 125 201" stroke="#5CBF8E" stroke-width="1" fill="none" opacity="0.65" />

      <g filter="url(#operatorHeadSoftGlow)">
        <ellipse cx="122" cy="197" rx="5.5" ry="8.5" fill="#E8FFF1" opacity="0.95" />
        <ellipse cx="122" cy="197" rx="4.5" ry="7.5" fill="#ffffff" opacity="0.75" />
        <rect x="120" y="204" width="4" height="13" rx="2" fill="#E8FFF1" opacity="0.9" />
        <ellipse cx="123" cy="195" rx="1.8" ry="2.8" fill="#E8FFF1" opacity="1" />
        <ellipse cx="122" cy="197" rx="5.5" ry="8.5" stroke="#43D17D" stroke-width="0.7" fill="none" opacity="0.18" />
      </g>

      <path d="M 125 135 Q 130 148 135 165" stroke="#5CBF8E" stroke-width="1" fill="none" opacity="0.6" />

      <ellipse cx="215" cy="165" rx="13" ry="8" stroke="#7FD7A8" stroke-width="1.3" fill="none" filter="url(#operatorHeadGlow)" class="eye" />
      <circle cx="217" cy="164" r="3.5" fill="#7FD7A8" opacity="0.7" class="eye" />
      <circle cx="218" cy="163" r="1.5" fill="#E8FFF1" opacity="1" class="eye" />
      <path d="M 203 158 Q 215 156 227 158" stroke="#5CBF8E" stroke-width="1.1" fill="none" opacity="0.75" />

      <path d="M 148 175 Q 155 190 165 205" stroke="#5CBF8E" stroke-width="1" fill="none" opacity="0.55" />

      <path d="M 220 170 Q 225 180 230 192 Q 233 203 234 214" stroke="#7FD7A8" stroke-width="1.4" fill="none" filter="url(#operatorHeadGlow)" />
      <path d="M 234 214 Q 238 219 242 222 Q 244 224 243 226" stroke="#7FD7A8" stroke-width="1.2" fill="none" opacity="0.85" />
      <path d="M 243 226 Q 240 227 237 226" stroke="#5CBF8E" stroke-width="0.9" fill="none" opacity="0.65" />
      <path d="M 218 173 Q 222 183 227 195" stroke="#5CBF8E" stroke-width="1" fill="none" opacity="0.6" />

      <path d="M 237 235 Q 234 236 230 235" stroke="#7FD7A8" stroke-width="1.1" fill="none" opacity="0.7" class="mouth-upper" />
      <path d="M 236 240 Q 233 241 229 240" stroke="#5CBF8E" stroke-width="0.9" fill="none" opacity="0.6" class="mouth-lower" />

      <g class="sound-wave-1">
        <path d="M 260 311 L 270 311 Q 280 311 290 301 Q 300 291 310 281" stroke="#7FD7A8" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round" />
        <path d="M 260 313 L 270 313 Q 280 313 290 303 Q 300 293 310 283" stroke="#7FD7A8" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round" />
        <path d="M 260 315 L 270 315 Q 280 315 290 305 Q 300 295 310 285" stroke="#7FD7A8" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round" />
      </g>

      <g class="sound-wave-2">
        <path d="M 262 310 L 274 310 Q 286 310 298 298 Q 310 286 322 274" stroke="#5CBF8E" stroke-width="1.8" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 262 312 L 274 312 Q 286 312 298 300 Q 310 288 322 276" stroke="#5CBF8E" stroke-width="1.8" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 262 314 L 274 314 Q 286 314 298 302 Q 310 290 322 278" stroke="#5CBF8E" stroke-width="1.8" fill="none" opacity="0.6" stroke-linecap="round" />
      </g>

      <g class="sound-wave-3">
        <path d="M 264 309 L 278 309 Q 292 309 306 295 Q 320 281 334 267" stroke="#5CBF8E" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round" />
        <path d="M 264 311 L 278 311 Q 292 311 306 297 Q 320 283 334 269" stroke="#5CBF8E" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round" />
        <path d="M 264 313 L 278 313 Q 292 313 306 299 Q 320 285 334 271" stroke="#5CBF8E" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round" />
      </g>

      <path d="M 230 250 Q 228 260 230 270" stroke="#7FD7A8" stroke-width="1.2" fill="none" opacity="0.7" />
      <path d="M 230 270 Q 225 280 215 287 Q 200 294 180 298" stroke="#7FD7A8" stroke-width="1.4" fill="none" filter="url(#operatorHeadGlow)" class="jaw" />
      <path d="M 180 210 Q 178 230 178 250" stroke="#5CBF8E" stroke-width="0.9" fill="none" opacity="0.5" />

      <path d="M 180 298 Q 165 301 150 302 L 130 302 Q 115 300 102 296" stroke="#7FD7A8" stroke-width="1.5" fill="none" filter="url(#operatorHeadGlow)" />
      <path d="M 155 302 L 155 316 Q 152 321 148 324" stroke="#7FD7A8" stroke-width="1.2" fill="none" opacity="0.5" />
      <path d="M 135 302 L 135 316 Q 138 321 142 324" stroke="#7FD7A8" stroke-width="1.2" fill="none" opacity="0.5" />

      <path d="M 130 115 Q 150 108 173 105" stroke="#5CBF8E" stroke-width="1" fill="none" opacity="0.7" />
      <path d="M 153 110 Q 170 106 187 108" stroke="#5CBF8E" stroke-width="0.9" fill="none" opacity="0.65" />
      <path d="M 175 107 Q 193 108 210 113" stroke="#5CBF8E" stroke-width="0.8" fill="none" opacity="0.6" />

      <path d="M 215 116 Q 227 123 235 133" stroke="#7FD7A8" stroke-width="1" fill="none" opacity="0.6" />

      <line x1="155" y1="316" x2="155" y2="326" stroke="#43D17D" stroke-width="0.5" opacity="0.15" />
      <line x1="145" y1="316" x2="145" y2="329" stroke="#43D17D" stroke-width="0.5" opacity="0.18" />
      <line x1="135" y1="316" x2="135" y2="326" stroke="#43D17D" stroke-width="0.5" opacity="0.15" />

      <circle cx="210" cy="95" r="1.5" fill="#E8FFF1" opacity="0.8" />
      <circle cx="185" cy="92" r="1" fill="#E8FFF1" opacity="0.7" />
      <circle cx="165" cy="145" r="1" fill="#E8FFF1" opacity="0.6" />
      <circle cx="220" cy="185" r="1.2" fill="#E8FFF1" opacity="0.65" />
    </svg>
  `;

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = RUNTIME_CSS;
    document.head.appendChild(style);
  }

  class OperatorHead {
    constructor(root) {
      this.root = root;
      this.avatar = root.closest(".avatar-user") || root.parentElement || null;
      this.observer = null;

      this.render();
      this.bind();
      this.syncSpeaking();
    }

    render() {
      this.root.innerHTML = HEAD_SVG;
    }

    bind() {
      if (!this.avatar || typeof MutationObserver === "undefined") return;

      this.observer = new MutationObserver(() => this.syncSpeaking());
      this.observer.observe(this.avatar, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }

    syncSpeaking() {
      const speaking = !!(this.avatar && this.avatar.classList.contains("speaking"));
      this.root.setAttribute("data-speaking", speaking ? "true" : "false");
    }
  }

  function initOperatorHeads() {
    ensureStyles();

    document.querySelectorAll("[data-operator-head]").forEach((root) => {
      if (!root.__operatorHeadInstance) {
        root.__operatorHeadInstance = new OperatorHead(root);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initOperatorHeads, { once: true });
  } else {
    initOperatorHeads();
  }
})();