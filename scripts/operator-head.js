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
      transform: translateY(-18px) scale(1.32);
      transform-origin: center center;
    }

    .operator-head svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
      transform: scaleX(1);
      transform-origin: 50% 50%;
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
        transform: translate(0, 0) scale(0.82);
      }
      35% {
        opacity: 0.62;
      }
      100% {
        opacity: 0;
        transform: translate(24px, -10px) scale(1.14);
      }
    }

    @keyframes operatorHeadSoundWave2 {
      0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.82);
      }
      35% {
        opacity: 0.52;
      }
      100% {
        opacity: 0;
        transform: translate(30px, -12px) scale(1.22);
      }
    }

    @keyframes operatorHeadSoundWave3 {
      0% {
        opacity: 0;
        transform: translate(0, 0) scale(0.82);
      }
      35% {
        opacity: 0.42;
      }
      100% {
        opacity: 0;
        transform: translate(36px, -15px) scale(1.3);
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
      animation: operatorHeadSoundWave2 1.2s ease-out infinite 0.18s;
    }

    .operator-head[data-speaking="true"] .sound-wave-3 {
      animation: operatorHeadSoundWave3 1.2s ease-out infinite 0.34s;
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
        <path d="M 244 228 Q 255 222 266 214 Q 276 206 287 199" stroke="#7FD7A8" stroke-width="1.9" fill="none" opacity="0.68" stroke-linecap="round" />
        <path d="M 245 232 Q 258 225 270 216 Q 280 209 291 201" stroke="#7FD7A8" stroke-width="1.9" fill="none" opacity="0.68" stroke-linecap="round" />
      </g>

      <g class="sound-wave-2">
        <path d="M 246 226 Q 260 219 274 208 Q 286 199 299 190" stroke="#5CBF8E" stroke-width="1.6" fill="none" opacity="0.56" stroke-linecap="round" />
        <path d="M 247 231 Q 262 223 278 212 Q 291 203 305 193" stroke="#5CBF8E" stroke-width="1.6" fill="none" opacity="0.56" stroke-linecap="round" />
      </g>

      <g class="sound-wave-3">
        <path d="M 248 224 Q 265 215 282 203 Q 296 193 311 182" stroke="#5CBF8E" stroke-width="1.3" fill="none" opacity="0.44" stroke-linecap="round" />
        <path d="M 250 229 Q 268 219 286 206 Q 301 195 318 183" stroke="#5CBF8E" stroke-width="1.3" fill="none" opacity="0.44" stroke-linecap="round" />
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