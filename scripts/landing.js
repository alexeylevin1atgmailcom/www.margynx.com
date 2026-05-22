(function () {
  'use strict';

  var root = document.getElementById('lp-root');
  if (!root) return;

  var mode = root.dataset.mode;
  var cfg  = window.LandingConfig && window.LandingConfig.landingModes[mode];

  if (!cfg) {
    console.error('[landing.js] Unknown mode:', mode);
    return;
  }

  // Resolve CTA text — config may supply a function for calendar-aware text.
  var ctaText = typeof cfg.cta.buttonText === 'function'
    ? cfg.cta.buttonText()
    : cfg.cta.buttonText;

  // Forward UTM params from the current URL into the CTA destination URL.
  var currentParams = new URLSearchParams(window.location.search);
  var utmParams = new URLSearchParams();
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) {
    var v = currentParams.get(k);
    if (v) utmParams.set(k, v);
  });
  if (utmParams.toString()) {
    var sep = cfg.cta.url.indexOf('?') === -1 ? '?' : '&';
    cfg = Object.assign({}, cfg, { cta: Object.assign({}, cfg.cta, { url: cfg.cta.url + sep + utmParams.toString() }) });
  }

  // Update <title> and meta description.
  document.title = cfg.meta.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', cfg.meta.description);

  // Fire a pageview event if analytics is already configured on the page.
  // No new analytics dependency is added.
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', { landing_mode: mode });
  }

  // Render and inject.
  root.innerHTML = renderPage(cfg, ctaText);

  // PostHog: landing-specific events (session recording only on these two pages).
  if (window.posthog) {
    posthog.capture('landing_page_view', {
      mode: mode,
      $current_url: window.location.href,
    });
    posthog.startSessionRecording();

    document.querySelectorAll('.lp-cta-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        posthog.capture('landing_cta_click', {
          mode: mode,
          cta_text: btn.textContent.trim(),
          $current_url: window.location.href,
        });
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ---------------------------------------------------------------------------
  // Page
  // ---------------------------------------------------------------------------

  function renderPage(c, cta) {
    return [
      renderHeader(c, cta),
      '<main>',
        renderHero(c, cta),
        renderPain(c),
        renderSolution(c),
        c.socialProof.visible ? renderSocialProof(c) : '',
        renderBottomCta(c, cta),
      '</main>',
      renderFooter(),
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Header — logo + Sign In + primary CTA only (no site nav)
  // ---------------------------------------------------------------------------

  function renderHeader(c, cta) {
    return [
      '<header class="site-header lp-header">',
        '<div class="container nav-row">',
          '<a class="brand" href="https://margynx.com" aria-label="Margynx home">',
            '<img src="../logo.png" alt="Margynx logo" />',
            '<span>',
              '<strong>Margynx</strong>',
              '<em>Margynx Cockpit</em>',
            '</span>',
          '</a>',
          '<nav class="lp-tools-nav" aria-label="Tools">',
            '<div class="nav-dropdown">',
              '<button class="nav-dropdown-btn" type="button" aria-haspopup="true" aria-expanded="false">',
                'Tools <span class="agx-badge-free">FREE</span>',
                '<span class="nav-dropdown-arrow" aria-hidden="true">▾</span>',
              '</button>',
              '<div class="nav-dropdown-panel">',
                '<a href="https://calc.margynx.com/margin-calculator">',
                  'Margin Calculator <span class="agx-badge-free">FREE</span>',
                '</a>',
              '</div>',
            '</div>',
          '</nav>',
          '<div class="header-cta">',
            '<a class="agx-button agx-button-secondary lp-signin"',
            '   href="https://us-east-1xt9ey1kwy.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=5a47d140bl7kgre6hpq74ljd5f&response_type=code&scope=openid%20email%20phone%20profile&redirect_uri=https%3A%2F%2Fapp.margynx.com%2Fauth%2Fcallback"',
            '   rel="noopener noreferrer">Sign in</a>',
            '<a class="agx-button agx-button-primary"',
            '   href="' + esc(c.cta.url) + '"',
            '   target="_blank" rel="noopener noreferrer">' + esc(cta) + '</a>',
          '</div>',
        '</div>',
      '</header>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Hero
  // ---------------------------------------------------------------------------

  function renderHero(c, cta) {
    return [
      '<section class="lp-section lp-hero">',
        '<div class="container">',
          '<div class="lp-hero-inner agx-panel">',
            '<div class="eyebrow">' + esc(c.hero.eyebrow) + '</div>',
            '<h1 class="lp-h1">' + esc(c.hero.h1) + '</h1>',
            '<p class="lp-hero-subhead">' + esc(c.hero.subhead) + '</p>',
            renderCtaGroup(c, cta),
          '</div>',
        '</div>',
      '</section>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // CTA group (hero + bottom CTA share this)
  // ---------------------------------------------------------------------------

  function renderCtaGroup(c, cta) {
    return [
      '<div class="lp-cta-group">',
        '<a class="agx-button agx-button-primary lp-cta-btn"',
        '   href="' + esc(c.cta.url) + '"',
        '   target="_blank" rel="noopener noreferrer">' + esc(cta) + '</a>',
        '<span class="lp-reassurance">' + esc(c.cta.reassurance) + '</span>',
      '</div>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Pain section
  // ---------------------------------------------------------------------------

  function renderPain(c) {
    var cards = c.pain.bullets.map(function (b, i) {
      return [
        '<div class="lp-pain-card agx-panel">',
          '<div class="lp-pain-num">' + pad2(i + 1) + '</div>',
          '<h3 class="lp-pain-title">' + esc(b.title) + '</h3>',
          '<p class="lp-pain-body">' + esc(b.body) + '</p>',
        '</div>',
      ].join('\n');
    }).join('\n');

    return [
      '<section class="lp-section lp-pain">',
        '<div class="container">',
          '<div class="lp-pain-label">' + esc(c.pain.title) + '</div>',
          '<div class="lp-pain-grid">',
            cards,
          '</div>',
        '</div>',
      '</section>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Solution tracks
  // Single-track (LTCR): one <div class="lp-track">
  // Multi-track (LPO):   two <div class="lp-track"> separated by a border
  // ---------------------------------------------------------------------------

  function renderSolution(c) {
    var tracks = c.solutionTracks.map(function (track) {
      var intro = track.intro
        ? '<p class="lp-track-intro">' + esc(track.intro) + '</p>'
        : '';

      var steps = track.steps.map(function (step, si) {
        return [
          '<div class="lp-step">',
            '<div class="lp-step-num">' + pad2(si + 1) + '</div>',
            '<div class="lp-step-content">',
              '<h4 class="lp-step-title">' + esc(step.title) + '</h4>',
              '<p class="lp-step-body">' + esc(step.body) + '</p>',
            '</div>',
          '</div>',
        ].join('\n');
      }).join('\n');

      return [
        '<div class="lp-track">',
          '<div class="lp-track-header">',
            '<h2 class="lp-track-title">' + esc(track.title) + '</h2>',
            intro,
          '</div>',
          '<div class="lp-step-list">',
            steps,
          '</div>',
        '</div>',
      ].join('\n');
    }).join('\n');

    return [
      '<section class="lp-section lp-solution">',
        '<div class="container">',
          '<div class="lp-tracks">',
            tracks,
          '</div>',
        '</div>',
      '</section>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Social proof placeholder (rendered only when config.socialProof.visible)
  // ---------------------------------------------------------------------------

  function renderSocialProof() {
    return [
      '<section class="lp-section lp-social-proof">',
        '<div class="container">',
          '<!-- Social proof: add real case studies here when available. -->',
        '</div>',
      '</section>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Bottom CTA
  // ---------------------------------------------------------------------------

  function renderBottomCta(c, cta) {
    return [
      '<section class="lp-section lp-bottom-cta">',
        '<div class="container">',
          '<div class="lp-bottom-cta-inner agx-panel">',
            renderCtaGroup(c, cta),
          '</div>',
        '</div>',
      '</section>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Footer — identical to the main site footer
  // ---------------------------------------------------------------------------

  function renderFooter() {
    return [
      '<footer class="site-footer">',
        '<div class="container footer-grid">',
          '<div>',
            '<a class="brand footer-brand" href="https://margynx.com">',
              '<img src="../logo.png" alt="Margynx logo" />',
              '<span>',
                '<strong>Margynx</strong>',
                '<em>Margynx Cockpit</em>',
              '</span>',
            '</a>',
            '<p class="footer-copy">An independent software provider for Amazon seller analytics, smart repricing, and operational decision support.</p>',
          '</div>',
          '<nav class="footer-links" aria-label="Footer links">',
            '<a href="https://margynx.com/#product">Product</a>',
            '<a href="https://margynx.com/#pricing">Pricing</a>',
            '<a href="https://margynx.com/security.html">Security</a>',
            '<a href="https://margynx.com/privacy.html">Privacy</a>',
            '<a href="https://margynx.com/terms.html">Terms</a>',
            '<a href="https://margynx.com/contact.html">Contact</a>',
          '</nav>',
        '</div>',
        '<div class="container footer-bottom">',
          '<p>© 2026 Margynx. All rights reserved.</p>',
          '<p>Amazon is a trademark of Amazon.com, Inc. or its affiliates. Margynx is an independent service provider and is not endorsed by or affiliated with Amazon.</p>',
        '</div>',
      '</footer>',
    ].join('\n');
  }

  // ---------------------------------------------------------------------------
  // Utility
  // ---------------------------------------------------------------------------

  function pad2(n) {
    return n < 10 ? '0' + n : String(n);
  }

})();
