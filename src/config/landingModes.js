'use strict';

// ---------------------------------------------------------------------------
// Seasonal events for the LPO calendar-aware CTA.
//
// Each entry:
//   name      – human label (for reference)
//   startDate – event start, MM-DD format
//   endDate   – event end,   MM-DD format
//   ctaText   – button text to show when within 90 days of startDate
//
// To add or edit a selling event, update this array only.
// ---------------------------------------------------------------------------
var seasonalEvents = [
  {
    name: 'Prime Day',
    startDate: '07-10',
    endDate: '07-20',
    ctaText: 'Start Planning Prime Day',
  },
  {
    name: 'Back to School',
    startDate: '07-25',
    endDate: '09-05',
    ctaText: 'Plan Your Back-to-School Push',
  },
  {
    name: 'Q4 Holiday peak',
    startDate: '10-01',
    endDate: '12-24',
    ctaText: 'Plan Your Q4 Now',
  },
  {
    name: 'Black Friday / Cyber Monday',
    startDate: '11-25',
    endDate: '12-02',
    ctaText: 'Start Planning Black Friday',
  },
];

// ---------------------------------------------------------------------------
// getLpoCta(today?)
//
// Returns the CTA button text for the LPO page.
// Finds the nearest upcoming event whose startDate falls within the next
// 90 days. If multiple qualify, picks the soonest. Falls back to default.
// Pass a Date for `today` only in tests; omit in production.
// ---------------------------------------------------------------------------
function getLpoCta(today) {
  today = today || new Date();
  var cutoff = new Date(today.getTime());
  cutoff.setDate(cutoff.getDate() + 90);

  var currentYear = today.getFullYear();
  var nearest = null;
  var nearestMs = Infinity;

  for (var i = 0; i < seasonalEvents.length; i++) {
    var event = seasonalEvents[i];
    // Check both current year and next year so the window works across
    // the December→January boundary.
    for (var yi = 0; yi < 2; yi++) {
      var year = currentYear + yi;
      var eventStart = new Date(year + '-' + event.startDate);
      if (eventStart >= today && eventStart <= cutoff) {
        var ms = eventStart - today;
        if (ms < nearestMs) {
          nearestMs = ms;
          nearest = event;
        }
      }
    }
  }

  return nearest ? nearest.ctaText : 'Start Planning Your Next Season';
}

// ---------------------------------------------------------------------------
// Landing mode configs
//
// Each mode object shape:
//   meta            – { title, description } for <title> and <meta description>
//   cta             – { buttonText, url, reassurance }
//                     buttonText may be a string or a zero-arg function
//   hero            – { eyebrow, h1, subhead }
//   pain            – { title, bullets: [{ title, body }] }
//   solutionTracks  – array of tracks. Single-track (LTCR): one item.
//                     Multi-track (LPO): two items.
//                     Each track: { title, intro|null, steps: [{ title, body }] }
//   socialProof     – { visible: bool }  — set true when real case studies exist
//
// ---------------------------------------------------------------------------
var landingModes = {

  // -------------------------------------------------------------------------
  // LTCR — Amazon resellers with buy box problems
  // Route: margynx.com/ltcr
  // -------------------------------------------------------------------------
  ltcr: {
    meta: {
      title: 'Win the Buy Box. Keep It. — Margynx',
      description:
        'A smart repricer that knows whether you want to win share or protect margin — and switches strategy automatically when the buy box state changes.',
    },
    cta: {
      buttonText: 'Start Free Trial',
      url: 'https://landing.margynx.com/?src=ltcr',
      reassurance: '60 days free. No credit card. Cancel anytime.',
    },
    hero: {
      eyebrow: 'FOR AMAZON RESELLERS',
      h1: 'Win the Buy Box. Keep It.',
      subhead:
        'A smart repricer that knows whether you want to win share or protect margin — and switches strategy automatically when the buy box state changes.',
    },
    pain: {
      title: 'If this sounds familiar…',
      bullets: [
        {
          title: 'You lose the buy box and don’t know why',
          body:
            'A new seller appeared, undercut you, and your sales fell off a cliff. By the time you noticed, you’d already lost a week of revenue.',
        },
        {
          title: 'Race to the bottom is killing your margin',
          body:
            'Repricers that just match the lowest price burn your margin to zero. You need one that fights smarter — sometimes for share, sometimes for profit.',
        },
        {
          title: 'You’re checking prices manually every morning',
          body:
            'Hours per week spent staring at ASINs that you could be spending on sourcing, accounts, and growth.',
        },
      ],
    },
    solutionTracks: [
      {
        title: 'Here’s what changes.',
        intro: null,
        steps: [
          {
            title: 'Margynx detects the signal',
            body:
              'Buy box lost on ASIN X. New competitor priced 8% below your floor. You see it in your morning briefing — ready by 7am your local time.',
          },
          {
            title: 'Margynx identifies the driver',
            body:
              'It’s not just price — competitor seller history, shipping speed, and stock levels all factor into the buy box algorithm. Margynx maps the chain.',
          },
          {
            title: 'Margynx proposes the action — you decide',
            body:
              'Raise your floor by $1.20. Or hold and let the competitor stock out in 6 days. Margynx shows you both options with expected outcomes. You approve the move.',
          },
        ],
      },
    ],
    socialProof: { visible: false },
  },

  // -------------------------------------------------------------------------
  // LPO — Large-portfolio brand owners with margin/analyst problems
  // Route: margynx.com/lpo
  // -------------------------------------------------------------------------
  lpo: {
    meta: {
      title: 'Run Your Season the Way You Actually Think About It. — Margynx',
      description:
        'Describe your strategy in plain language. Margynx executes the mechanics across every SKU, watches for deviations every night, and tells you the moment something needs your attention.',
    },
    cta: {
      // Function: resolved at render time so it reflects the current date.
      // Returns a seasonal event CTA if one starts within the next 90 days,
      // otherwise 'Start Planning Your Next Season'.
      buttonText: getLpoCta,
      url: 'https://landing.margynx.com/?src=lpo',
      reassurance:
        'Free 90-day analysis included. 60-day full trial. No credit card.',
    },
    hero: {
      eyebrow: 'FOR PORTFOLIO BRAND OWNERS',
      h1: 'Run Your Season the Way You Actually Think About It.',
      subhead:
        'Describe your strategy in plain language. Margynx executes the mechanics across every SKU, watches for deviations every night, and tells you the moment something needs your attention.',
    },
    pain: {
      title: 'If this sounds familiar…',
      bullets: [
        {
          title: 'Your strategy lives in your head — not in your tools',
          body:
            'You know exactly how you want to run the season: when to push prices up, when to hold, when to liquidate. The repricers you’ve tried are either buy-box-only or built on primitive demand models — none of them let you actually express a season strategy. So the strategy stays in your head, and the execution drifts away from it.',
        },
        {
          title: 'The real work starts after the data is pulled',
          body:
            'Most of the day goes to pulling reports, cross-referencing SKUs, and chasing down why a number moved. The actual thinking — the part that needs human judgment — gets the leftover time.',
        },
        {
          title: 'By the time you notice the deviation, the season has shifted',
          body:
            'A SKU stops moving. Velocity drops. A competitor enters with aggressive pricing. You find out about it three days later, when you finally get around to that week’s review. The window to react has already closed.',
        },
      ],
    },
    solutionTracks: [
      {
        title: 'Plan your season in plain language.',
        intro:
          'Tell Margynx your strategy the way you’d explain it to a colleague. It handles every price move from there — with the rules you set.',
        steps: [
          {
            title: 'Describe the plan',
            body:
              'Tell Margynx in plain language: ‘Start selling Product X at $24.99. Push the price up 1.5% daily as long as velocity stays above 40 units a day. At peak season, hold at $32. If velocity drops, pause and revert to the last stable price.’ That’s the whole instruction.',
          },
          {
            title: 'Set the guardrails',
            body:
              'You define the checkpoints. What thresholds trigger a pause. What triggers a revert. What you want to be alerted on immediately versus in the morning briefing. Margynx never acts outside the rules you authorize.',
          },
          {
            title: 'Margynx executes — you stay in control',
            body:
              'Every price move follows your plan. Every deviation triggers the action you specified. If reality contradicts the strategy, Margynx reverts to the last stable state and alerts you. You always know what happened and why.',
          },
        ],
      },
      {
        title: 'Walk in already knowing what moved.',
        intro:
          'While the plan runs, Margynx watches every metric on every SKU. By 7am your local time, your briefing is ready.',
        steps: [
          {
            title: 'Margynx catches the signal overnight',
            body:
              'Margin dropped 5% week over week. Three SKUs account for 78% of the drop. The data is processed overnight and your briefing is ready by 7am — no report-pulling required.',
          },
          {
            title: 'Margynx maps the driver chain',
            body:
              'SKU A lost the buy box to a new entrant. SKU B got hit by an FBA fee tier change. SKU C is seasonal decay matching last year’s pattern. The cross-referencing is done — you get the synthesis, ready for your review.',
          },
          {
            title: 'Margynx proposes the action — you decide',
            body:
              'Specific, dollar-quantified recommendations with confidence levels. You review, adjust, and approve. Margynx never acts on important decisions without your sign-off — it surfaces the work, you own the call.',
          },
        ],
      },
    ],
    socialProof: { visible: false },
  },
};

// ---------------------------------------------------------------------------
// Export — works both as a browser global and as a Node.js module (for tests)
// ---------------------------------------------------------------------------
(function () {
  var exports = { landingModes: landingModes, seasonalEvents: seasonalEvents, getLpoCta: getLpoCta };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exports;
  } else if (typeof window !== 'undefined') {
    window.LandingConfig = exports;
  }
})();
