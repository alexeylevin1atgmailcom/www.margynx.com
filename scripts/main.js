
(() => {
  const AI_PREVIEW_HTML = `
    <div class="ai-preview ai-preview-modal">
      <div class="ai-preview-head">AI Command Center</div>

      <div class="ai-preview-section">
        <div class="ai-preview-section-title">What it does</div>
        <div class="ai-preview-note">Explains what changed</div>
        <div class="ai-preview-note">Recommends the next move</div>
        <div class="ai-preview-note">Executes approved actions</div>
      </div>

      <div class="ai-preview-section">
        <div class="ai-preview-section-title">Agents</div>
        <div class="ai-preview-item"><span class="dot dot-violet"></span><span>Growth Analyst</span></div>
        <div class="ai-preview-item"><span class="dot dot-sky"></span><span>Pricing Strategist</span></div>
        <div class="ai-preview-item"><span class="dot dot-cyan"></span><span>Inventory Guardian</span></div>
        <div class="ai-preview-item"><span class="dot dot-blue"></span><span>Marketplace Intel</span></div>
      </div>

      <div class="ai-preview-section">
        <div class="ai-preview-section-title">Alerts</div>
        <div class="ai-preview-item"><span class="dot dot-amber"></span><span>Overstock Alert</span></div>
      </div>

      <div class="ai-preview-section">
        <div class="ai-preview-section-title">Best move</div>
        <div class="ai-preview-note">Adjust reorder levels</div>
      </div>

      <div class="ai-preview-section">
        <div class="ai-preview-section-title">Diagnostics</div>
        <div class="ai-preview-note">Demand forecast updated</div>
      </div>
    </div>
  `;

  const PANEL_DATA = {
    growth: {
      eyebrow: 'Growth Health',
      title: 'Are we on track or off track?',
      text: 'Growth Health answers the fastest executive question first: are we green or red? It highlights the few abnormal shifts that matter, so the operator sees quickly whether the issue is revenue, margin, demand, or conversion.',
      image: 'assets/growth-health.jpg',
      signals: ['Are we healthy?', 'Which delta matters most?', 'What needs attention first?']
    },
    buybox: {
      eyebrow: 'Buy Box Position',
      title: 'Are we winning where it matters?',
      text: 'Buy Box Position shows where share is stable, where it is fragile, and where lost position is turning into lost opportunity. It helps the operator decide where recovery action is worth taking now.',
      image: 'assets/buy-box-position.jpg',
      signals: ['Buy Box win rate', 'Revenue-weighted BB%', 'Lost opportunity']
    },
    pricing: {
      eyebrow: 'Pricing Power & Margin',
      title: 'Are we competing without giving away margin?',
      text: 'Pricing Power & Margin is where Agentix proves it is not a blind repricer. It shows when to push price, when to protect floor, and when volatility or overreaction is quietly eroding profit.',
      image: 'assets/pricing-control.jpg',
      signals: ['Margin protection', 'Price index', 'Floor violations and mode fit']
    },
    inventory: {
      eyebrow: 'Inventory Exposure & Risk',
      title: 'Is inventory helping growth or creating risk?',
      text: 'Inventory Exposure & Risk highlights the stock situations that amplify competitive risk: low cover, stockout pressure, and revenue sitting in fragile positions. It keeps replenishment and pricing in one operating loop.',
      image: 'assets/inventory-risk.jpg',
      signals: ['Days of coverage', 'Stockout risk', 'Revenue in low-cover ASINs']
    },
    ai: {
      type: 'ai',
      chat: [
        { role: 'user', text: 'Why did margin drop 5% last week for this product group, and what should I do first?' },
        { role: 'system', text: 'Margin fell because competitive pressure widened on a cluster of high-velocity SKUs while demand stayed healthy. First move: tighten floor protection on the affected group and restore Buy Box selectively before expanding discounts.' },
        { role: 'user', text: 'Enable repricing automation for this SKU list to win more Buy Box. Once share recovers, test higher prices up to 10%, but stop if units begin to soften.' },
        { role: 'system', text: 'Understood. I’ll run the group in recovery mode first, then shift to controlled price expansion once Buy Box stabilizes. I’ll pause the increase if unit momentum weakens.' }
      ]
    }
  };

  function initModalAndNav() {
    const modal = document.getElementById('panelModal');
    const modalDialog = modal?.querySelector('.modal-dialog');
    const modalMedia = document.getElementById('modalMedia');
    const modalCopy = document.getElementById('modalCopy');
    const modalClose = document.getElementById('modalClose');
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');

    function buildAiChat(chat) {
      return `
        <div class="ai-modal-layout">
          <div class="eyebrow">AI Command Center</div>
          <h2 class="agx-display-text">Ask the system like you’d ask your team.</h2>
          <p class="ai-modal-lead">The command layer turns the cockpit into a working operator. Ask what changed, request a pricing move, approve automation, or set constraints for how the system should behave after Buy Box recovers.</p>
          <div class="ai-modal-chat">
            ${chat.map(item => `
              <article class="chat-message ${item.role === 'user' ? 'chat-user' : 'chat-system'}">
                ${item.role === 'system' ? '<span class="assistant-label">Agentix</span>' : ''}
                <p>${item.text}</p>
              </article>
            `).join('')}
          </div>
        </div>
      `;
    }

    function openPanel(key) {
      const panel = PANEL_DATA[key];
      if (!panel || !modal || !modalDialog || !modalMedia || !modalCopy) return;

      modalDialog.classList.remove('ai-mode');
      modalMedia.innerHTML = '';
      modalCopy.innerHTML = `
        <div class="eyebrow" id="modalEyebrow"></div>
        <h2 class="agx-display-text" id="modalTitle"></h2>
        <p id="modalText"></p>
        <div class="signal-list" id="modalSignals"></div>
      `;

      if (panel.type === 'ai') {
        modalDialog.classList.add('ai-mode');
        modalMedia.innerHTML = AI_PREVIEW_HTML;
        modalCopy.innerHTML = buildAiChat(panel.chat);
      } else {
        modalMedia.innerHTML = `<img src="${panel.image}" alt="${panel.eyebrow}" />`;

        const eyebrow = modalCopy.querySelector('#modalEyebrow');
        const title = modalCopy.querySelector('#modalTitle');
        const text = modalCopy.querySelector('#modalText');
        const signals = modalCopy.querySelector('#modalSignals');

        eyebrow.textContent = panel.eyebrow;
        title.textContent = panel.title;
        text.textContent = panel.text;
        signals.innerHTML = '';

        panel.signals.forEach(signal => {
          const item = document.createElement('span');
          item.className = 'signal-pill';
          item.textContent = signal;
          signals.appendChild(item);
        });
      }

      modal.hidden = false;
      document.body.classList.add('modal-open');
    }

    function closeModal() {
      if (!modal) return;
      modal.hidden = true;
      document.body.classList.remove('modal-open');
    }

    document.querySelectorAll('.module-card').forEach(card => {
      card.addEventListener('click', () => openPanel(card.dataset.panel));
    });

    modal?.addEventListener('click', (e) => {
      if (e.target.dataset.close === 'true') closeModal();
    });

    modalClose?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
    });

    menuToggle?.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      siteNav?.classList.toggle('open');
    });

    siteNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }));
  }

  function initCommandDemo() {
    const chat = document.getElementById('commandDemoChat');
    const userAvatar = document.getElementById('demoUserAvatar');
    const agentAvatar = document.getElementById('demoAgentAvatar');
    const thinkingLog = document.getElementById('agentThinkingLog');
    if (!chat || !userAvatar || !agentAvatar || !thinkingLog) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const turns = [
      {
        user: 'Why did margin drop 5% last week for this product group, and what should I do first?',
        statuses: ['Loading data...', 'Calculating metrics...', 'Analyzing trends...', 'Thinking...'],
        agent: 'Margin fell because competitive pressure widened on a cluster of high-velocity SKUs while demand stayed healthy. First move: tighten floor protection on the affected group and restore Buy Box selectively before expanding discounts.'
      },
      {
        user: 'Enable repricing automation for this SKU list to win more Buy Box. Once share recovers, test higher prices up to 10%, but stop if units begin to soften.',
        statuses: ['Loading SKU list...', 'Checking Buy Box exposure...', 'Running analysis...', 'Preparing guardrails...'],
        agent: 'Understood. I’ll run the group in recovery mode first, then shift to controlled price expansion once Buy Box stabilizes. I’ll pause the increase if unit momentum weakens.'
      },
      {
        user: 'Show me the top ASINs driving the margin loss, then pause discounts on the weakest margin group.',
        statuses: ['Loading ASIN contribution...', 'Ranking margin drivers...', 'Scoring actions...', 'Drafting recommendation...'],
        agent: 'I found the largest drag in a small set of high-volume ASINs where discount depth widened faster than share improved. I’ll surface the top contributors and pause discounts first on the weakest margin cohort.'
      }
    ];

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function setSpeaker(target) {
      const userActive = target === 'user';
      const agentActive = target === 'agent';
      userAvatar.classList.toggle('active', userActive);
      userAvatar.classList.toggle('passive', !userActive);
      userAvatar.classList.toggle('speaking', userActive);
      agentAvatar.classList.toggle('active', agentActive);
      agentAvatar.classList.toggle('passive', !agentActive);
      agentAvatar.classList.toggle('thinking', agentActive);
    }

    function scrollChat() {
      chat.scrollTop = chat.scrollHeight;
    }

    function createBubble(role) {
      const article = document.createElement('article');
      article.className = `chat-message ${role === 'user' ? 'chat-user' : 'chat-system'} chat-live`;
      if (role === 'system') {
        const label = document.createElement('span');
        label.className = 'assistant-label';
        label.textContent = 'Agent';
        const status = document.createElement('div');
        status.className = 'agent-status';
        const p = document.createElement('p');
        article.append(label, status, p);
      } else {
        const p = document.createElement('p');
        article.appendChild(p);
      }
      chat.appendChild(article);
      requestAnimationFrame(() => article.classList.add('visible'));
      scrollChat();
      return article;
    }

    async function typeText(el, text, speed) {
      el.textContent = '';
      if (reduceMotion) {
        el.textContent = text;
        scrollChat();
        return;
      }
      for (let i = 0; i < text.length; i += 1) {
        el.textContent += text[i];
        if (i % 2 === 0) scrollChat();
        await sleep(speed);
      }
      scrollChat();
    }

    async function runStatuses(statusEl, statuses) {
      if (!statusEl) return;
      statusEl.classList.add('visible');
      if (reduceMotion) {
        statusEl.textContent = statuses[statuses.length - 1] || '';
        thinkingLog.textContent = statusEl.textContent || 'Reasoning...';
        await sleep(300);
        return;
      }
      const totalDuration = 2400;
      const interval = Math.floor(totalDuration / statuses.length);
      for (const status of statuses) {
        statusEl.textContent = status;
        thinkingLog.textContent = status;
        scrollChat();
        await sleep(interval);
      }
    }

    async function runLoop() {
      while (true) {
        chat.innerHTML = '';
        thinkingLog.textContent = 'Waiting for request...';
        setSpeaker('user');
        await sleep(reduceMotion ? 120 : 500);

        for (const turn of turns) {
          const userBubble = createBubble('user');
          setSpeaker('user');
          await typeText(userBubble.querySelector('p'), turn.user, 18);
          await sleep(reduceMotion ? 150 : 550);

          const agentBubble = createBubble('system');
          const statusEl = agentBubble.querySelector('.agent-status');
          const textEl = agentBubble.querySelector('p');
          setSpeaker('agent');
          await runStatuses(statusEl, turn.statuses);
          statusEl.textContent = '';
          statusEl.classList.remove('visible');
          thinkingLog.textContent = 'Response ready.';
          await typeText(textEl, turn.agent, 15);
          await sleep(reduceMotion ? 220 : 900);
        }

        setSpeaker('agent');
        thinkingLog.textContent = 'Ready for next request.';
        await sleep(reduceMotion ? 400 : 1700);
      }
    }

    runLoop();
  }

  initModalAndNav();
  initCommandDemo();
})();
