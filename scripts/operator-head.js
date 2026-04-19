(function () {
  const SVG_NS = "http://www.w3.org/2000/svg";

  const HEAD_SVG = `
<svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="operatorHeadStroke" x1="108" y1="78" x2="315" y2="334" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#E8FFF1" stop-opacity="0.96"/>
      <stop offset="0.22" stop-color="#B8F5CD" stop-opacity="0.94"/>
      <stop offset="0.56" stop-color="#67D18D" stop-opacity="0.88"/>
      <stop offset="1" stop-color="#2E9F58" stop-opacity="0.72"/>
    </linearGradient>

    <linearGradient id="operatorHeadInner" x1="138" y1="108" x2="292" y2="312" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#C5F7D7" stop-opacity="0.18"/>
      <stop offset="0.5" stop-color="#66D38A" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#66D38A" stop-opacity="0.02"/>
    </linearGradient>

    <radialGradient id="operatorHeadCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(206 188) rotate(90) scale(128 112)">
      <stop offset="0" stop-color="#C8F8D9" stop-opacity="0.2"/>
      <stop offset="0.52" stop-color="#6ED593" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#6ED593" stop-opacity="0"/>
    </radialGradient>

    <filter id="operatorHeadGlow" x="62" y="54" width="290" height="308" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="8.5" result="blur"/>
      <feColorMatrix in="blur" type="matrix"
        values="0 0 0 0 0.40
                0 0 0 0 0.84
                0 0 0 0 0.56
                0 0 0 0.28 0"/>
    </filter>

    <filter id="operatorHeadSoftGlow" x="86" y="70" width="246" height="272" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="4.5" result="blur"/>
      <feColorMatrix in="blur" type="matrix"
        values="0 0 0 0 0.64
                0 0 0 0 0.95
                0 0 0 0 0.75
                0 0 0 0.24 0"/>
    </filter>
  </defs>

  <g opacity="0.9" filter="url(#operatorHeadGlow)">
    <path
      d="M206 86
         C230 86 248 94 261 110
         C277 130 286 154 286 180
         L286 214
         C286 244 276 271 257 292
         C244 307 227 317 206 321
         C185 317 168 307 155 292
         C136 271 126 244 126 214
         L126 180
         C126 154 135 130 151 110
         C164 94 182 86 206 86Z"
      stroke="url(#operatorHeadStroke)"
      stroke-width="6.2"
      stroke-linecap="round"
      stroke-linejoin="round"/>
  </g>

  <g opacity="0.95" filter="url(#operatorHeadSoftGlow)">
    <path
      d="M206 94
         C228 94 245 101 257 116
         C271 134 279 156 279 180
         L279 214
         C279 242 270 267 253 286
         C241 300 225 309 206 313
         C187 309 171 300 159 286
         C142 267 133 242 133 214
         L133 180
         C133 156 141 134 155 116
         C167 101 184 94 206 94Z"
      fill="url(#operatorHeadCore)"/>
  </g>

  <path
    d="M206 94
       C228 94 245 101 257 116
       C271 134 279 156 279 180
       L279 214
       C279 242 270 267 253 286
       C241 300 225 309 206 313
       C187 309 171 300 159 286
       C142 267 133 242 133 214
       L133 180
       C133 156 141 134 155 116
       C167 101 184 94 206 94Z"
    fill="url(#operatorHeadInner)"
    stroke="url(#operatorHeadStroke)"
    stroke-width="3.2"
    stroke-linecap="round"
    stroke-linejoin="round"/>

  <path
    d="M164 146
       C174 136 188 130 206 129
       C224 130 238 136 248 146"
    stroke="url(#operatorHeadStroke)"
    stroke-width="3.2"
    stroke-linecap="round"
    opacity="0.82"/>

  <path
    d="M173 172
       C181 167 192 165 206 165
       C220 165 231 167 239 172"
    stroke="url(#operatorHeadStroke)"
    stroke-width="2.6"
    stroke-linecap="round"
    opacity="0.62"/>

  <g class="operator-head-eye">
    <path
      d="M178 186
         C184 181 191 179 198 179
         C205 179 212 181 218 186"
      stroke="url(#operatorHeadStroke)"
      stroke-width="3.1"
      stroke-linecap="round"
      opacity="0.96"/>
  </g>

  <path
    d="M202 188
       C204 201 204 213 202 226"
    stroke="url(#operatorHeadStroke)"
    stroke-width="2.6"
    stroke-linecap="round"
    opacity="0.5"/>

  <path
    d="M186 242
       C194 249 201 252 210 252
       C220 252 228 249 236 241"
    stroke="url(#operatorHeadStroke)"
    stroke-width="3.1"
    stroke-linecap="round"
    stroke-linejoin="round"
    opacity="0.9"/>

  <path
    d="M163 149
       C158 160 155 172 155 186
       L155 213
       C155 232 161 249 172 263"
    stroke="url(#operatorHeadStroke)"
    stroke-width="2.3"
    stroke-linecap="round"
    opacity="0.34"/>

  <path
    d="M249 149
       C254 160 257 172 257 186
       L257 213
       C257 232 251 249 240 263"
    stroke="url(#operatorHeadStroke)"
    stroke-width="2.3"
    stroke-linecap="round"
    opacity="0.34"/>

  <g class="operator-head-mouth-group">
    <path
      class="operator-head-mouth"
      d="M188 242 C195 247 201 249 210 249 C219 249 226 247 234 242"
      stroke="url(#operatorHeadStroke)"
      stroke-width="3.2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"/>
    <path
      class="operator-head-jaw"
      d="M182 254 C191 264 199 268 210 268 C221 268 230 264 239 254"
      stroke="url(#operatorHeadStroke)"
      stroke-width="2.1"
      stroke-linecap="round"
      stroke-linejoin="round"
      opacity="0.16"
      fill="none"/>
  </g>

  <g>
    <path class="operator-head-wave operator-head-wave-1"
      d="M286 232 C300 227 307 214 308 198"
      stroke="#7BE2A1" stroke-width="2.3" stroke-linecap="round" opacity="0"/>
    <path class="operator-head-wave operator-head-wave-2"
      d="M296 244 C315 236 325 219 326 198"
      stroke="#93ECB5" stroke-width="2.1" stroke-linecap="round" opacity="0"/>
    <path class="operator-head-wave operator-head-wave-3"
      d="M306 257 C330 245 343 225 344 198"
      stroke="#B4F6CC" stroke-width="1.9" stroke-linecap="round" opacity="0"/>
  </g>
</svg>`;

  function createPath(d, className) {
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", d);
    if (className) path.setAttribute("class", className);
    return path;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function easeInOutSine(t) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  }

  class OperatorHead {
    constructor(root) {
      this.root = root;
      this.avatar = root.closest(".avatar-user") || root.parentElement;
      this.isSpeaking = false;
      this.raf = null;
      this.startTime = 0;

      this.render();
      this.cacheNodes();
      this.observeSpeakingState();
      this.syncState();
    }

    render() {
      this.root.innerHTML = HEAD_SVG;
    }

    cacheNodes() {
      this.svg = this.root.querySelector("svg");
      this.mouth = this.root.querySelector(".operator-head-mouth");
      this.jaw = this.root.querySelector(".operator-head-jaw");

      this.closedMouth = "M188 242 C195 247 201 249 210 249 C219 249 226 247 234 242";
      this.openMouthA = "M188 242 C195 252 201 256 210 256 C219 256 226 252 234 242";
      this.openMouthB = "M188 242 C195 255 201 261 210 261 C219 261 226 255 234 242";

      this.closedJaw = "M182 254 C191 264 199 268 210 268 C221 268 230 264 239 254";
      this.openJawA = "M181 255 C190 270 199 278 210 278 C221 278 230 270 240 255";
      this.openJawB = "M180 256 C189 274 198 284 210 284 C222 284 231 274 241 256";
    }

    observeSpeakingState() {
      if (!this.avatar || typeof MutationObserver === "undefined") return;

      this.observer = new MutationObserver(() => this.syncState());
      this.observer.observe(this.avatar, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }

    syncState() {
      const speaking = !!(this.avatar && this.avatar.classList.contains("speaking"));
      if (speaking === this.isSpeaking) return;

      this.isSpeaking = speaking;

      if (speaking) {
        this.start();
      } else {
        this.stop();
      }
    }

    start() {
      if (this.raf) return;
      this.startTime = performance.now();
      this.tick = this.tick.bind(this);
      this.raf = requestAnimationFrame(this.tick);
    }

    stop() {
      if (this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = null;
      }

      if (this.mouth) this.mouth.setAttribute("d", this.closedMouth);
      if (this.jaw) {
        this.jaw.setAttribute("d", this.closedJaw);
        this.jaw.setAttribute("opacity", "0.16");
      }
    }

    tick(now) {
      if (!this.isSpeaking) {
        this.stop();
        return;
      }

      const elapsed = (now - this.startTime) / 1000;

      const base = (Math.sin(elapsed * 8.4) + 1) / 2;
      const mod = (Math.sin(elapsed * 15.2 + 0.9) + 1) / 2;
      const phrase = (Math.sin(elapsed * 2.1 - 0.6) + 1) / 2;

      let openness = base * 0.58 + mod * 0.26 + phrase * 0.16;
      openness = clamp(openness, 0, 1);

      const holdShape = phrase > 0.74;
      const eased = easeInOutSine(openness);

      if (this.mouth) {
        const mouthD = holdShape
          ? this.openMouthB
          : eased > 0.58
            ? this.openMouthA
            : this.closedMouth;
        this.mouth.setAttribute("d", mouthD);
      }

      if (this.jaw) {
        const jawD = holdShape
          ? this.openJawB
          : eased > 0.52
            ? this.openJawA
            : this.closedJaw;
        this.jaw.setAttribute("d", jawD);
        this.jaw.setAttribute("opacity", String(0.16 + eased * 0.32));
      }

      this.raf = requestAnimationFrame(this.tick);
    }
  }

  function initOperatorHeads() {
    const roots = document.querySelectorAll("[data-operator-head]");
    roots.forEach((root) => {
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