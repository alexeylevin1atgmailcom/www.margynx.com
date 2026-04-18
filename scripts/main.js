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

const DEMO_SEQUENCE = [
  {
    user: 'Why did margin drop 5% last week for this product group, and what should I do first?',
    statuses: ['Loading data...', 'Calculating metrics...', 'Analyzing trends...', 'Thinking...'],
    agent: 'Margin fell because competitive pressure widened on a cluster of high-velocity SKUs while demand stayed healthy. First move: tighten floor protection on the affected group and restore Buy Box selectively before expanding discounts.'
  },
  {
    user: 'Enable repricing automation for this SKU list to win more Buy Box. Once share recovers, test higher prices up to 10%, but stop if units begin to soften.',
    statuses: ['Loading data...', 'Running scenario model...', 'Checking guardrails...', 'Preparing action plan...'],
    agent: 'Understood. I’ll run the group in recovery mode first, then shift to controlled price expansion once Buy Box stabilizes. I’ll pause the increase if unit momentum weakens.'
  },
  {
    user: 'Which SKUs should I prioritize first if I want the fastest recovery with the lowest margin risk?',
    statuses: ['Loading data...', 'Ranking SKU clusters...', 'Scoring margin risk...', 'Building recommendation...'],
    agent: 'Start with the high-velocity SKUs where Buy Box is recoverable without crossing your floor. Those listings give the fastest gain with controlled margin exposure, while low-confidence arenas should stay in monitor mode.'
  }
];

const modal = document.getElementById('panelModal');
const modalDialog = modal?.querySelector('.modal-dialog') ?? null;
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
  if (!panel || !modalDialog || !modalMedia || !modalCopy || !modal) return;

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

    if (eyebrow) eyebrow.textContent = panel.eyebrow;
    if (title) title.textContent = panel.title;
    if (text) text.textContent = panel.text;
    if (signals) {
      signals.innerHTML = '';
      panel.signals.forEach(signal => {
        const item = document.createElement('span');
        item.className = 'signal-pill';
        item.textContent = signal;
        signals.appendChild(item);
      });
    }
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
  if (e.target instanceof HTMLElement && e.target.dataset.close === 'true') {
    closeModal();
  }
});

modalClose?.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && !modal.hidden) {
    closeModal();
  }
});

menuToggle?.addEventListener('click', () => {
  if (!siteNav || !menuToggle) return;
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.classList.toggle('open');
});

siteNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const demoUserAvatar = document.getElementById('demoUserAvatar');
const demoAgentAvatar = document.getElementById('demoAgentAvatar');
const commandDemoChat = document.getElementById('commandDemoChat');
const agentThinkingLog = document.getElementById('agentThinkingLog');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function wait(ms) {
  return new Promise(resolve => window.setTimeout(resolve, ms));
}

function setSpeaker(speaker) {
  if (!demoUserAvatar || !demoAgentAvatar) return;

  if (speaker === 'user') {
    demoUserAvatar.classList.add('active', 'speaking');
    demoUserAvatar.classList.remove('passive');
    demoAgentAvatar.classList.add('passive');
    demoAgentAvatar.classList.remove('active', 'thinking');
  } else if (speaker === 'agent') {
    demoAgentAvatar.classList.add('active', 'thinking');
    demoAgentAvatar.classList.remove('passive');
    demoUserAvatar.classList.add('passive');
    demoUserAvatar.classList.remove('active', 'speaking');
  } else {
    demoUserAvatar.classList.add('active');
    demoUserAvatar.classList.remove('passive', 'speaking');
    demoAgentAvatar.classList.add('passive');
    demoAgentAvatar.classList.remove('active', 'thinking');
  }
}

function resetDemoState() {
  if (!commandDemoChat) return;

  // Critical fix: fully clear previous cycle so height/scroll state does not accumulate.
  commandDemoChat.innerHTML = '';
  commandDemoChat.scrollTop = 0;
  commandDemoChat.style.scrollBehavior = 'auto';

  if (agentThinkingLog) {
    agentThinkingLog.textContent = 'Waiting for request...';
  }

  if (demoUserAvatar) {
    demoUserAvatar.className = 'avatar avatar-user active';
  }

  if (demoAgentAvatar) {
    demoAgentAvatar.className = 'avatar avatar-agent passive';
  }
}

function createChatMessage(role) {
  const article = document.createElement('article');
  article.className = `chat-message ${role === 'user' ? 'chat-user' : 'chat-system'} chat-live`;

  if (role === 'system') {
    const label = document.createElement('span');
    label.className = 'assistant-label';
    label.textContent = 'Agent';

    const status = document.createElement('div');
    status.className = 'agent-status';

    const text = document.createElement('p');

    article.appendChild(label);
    article.appendChild(status);
    article.appendChild(text);

    return { article, text, status };
  }

  const text = document.createElement('p');
  article.appendChild(text);

  return { article, text, status: null };
}

function revealMessage(article) {
  requestAnimationFrame(() => {
    article.classList.add('visible');
  });
}

function keepBottomVisible() {
  if (!commandDemoChat) return;
  commandDemoChat.scrollTop = commandDemoChat.scrollHeight;
}

async function typeText(node, text, speed = 18) {
  node.textContent = '';
  if (prefersReducedMotion) {
    node.textContent = text;
    keepBottomVisible();
    return;
  }

  for (let i = 0; i < text.length; i += 1) {
    node.textContent += text[i];
    keepBottomVisible();
    await wait(speed);
  }
}

async function showStatuses(statusNode, statuses) {
  if (!statusNode) return;

  statusNode.classList.add('visible');

  if (prefersReducedMotion) {
    statusNode.textContent = statuses[statuses.length - 1] ?? '';
    keepBottomVisible();
    await wait(250);
    return;
  }

  for (const status of statuses) {
    statusNode.textContent = status;
    keepBottomVisible();
    await wait(700);
  }

  await wait(450);
}

async function playTurn(turn) {
  if (!commandDemoChat) return;

  setSpeaker('user');

  const userMsg = createChatMessage('user');
  commandDemoChat.appendChild(userMsg.article);
  revealMessage(userMsg.article);
  keepBottomVisible();
  await wait(180);
  await typeText(userMsg.text, turn.user, 18);
  await wait(550);

  setSpeaker('agent');

  const agentMsg = createChatMessage('system');
  commandDemoChat.appendChild(agentMsg.article);
  revealMessage(agentMsg.article);
  keepBottomVisible();
  await wait(180);

  if (agentThinkingLog) {
    agentThinkingLog.textContent = turn.statuses[0] ?? 'Thinking...';
  }

  if (agentMsg.status) {
    for (const status of turn.statuses) {
      if (agentThinkingLog) {
        agentThinkingLog.textContent = status;
      }
      agentMsg.status.textContent = status;
      agentMsg.status.classList.add('visible');
      keepBottomVisible();
      await wait(prefersReducedMotion ? 120 : 650);
    }

    agentMsg.status.textContent = '';
    agentMsg.status.classList.remove('visible');
  }

  if (agentThinkingLog) {
    agentThinkingLog.textContent = 'Preparing response...';
  }

  await wait(prefersReducedMotion ? 80 : 300);
  await typeText(agentMsg.text, turn.agent, 15);

  if (agentThinkingLog) {
    agentThinkingLog.textContent = 'Waiting for request...';
  }

  await wait(900);
}

let demoLoopRunning = false;

async function runCommandDemo() {
  if (demoLoopRunning || !commandDemoChat) return;
  demoLoopRunning = true;

  while (true) {
    resetDemoState();
    await wait(450);

    for (const turn of DEMO_SEQUENCE) {
      await playTurn(turn);
    }

    await wait(1200);
  }
}

runCommandDemo();