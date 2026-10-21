(() => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  menuToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }));

  document.querySelectorAll(".accordion-trigger").forEach(button => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
      const symbol = button.querySelector(".accordion-symbol");
      if (symbol) symbol.textContent = expanded ? "+" : "−";
    });
  });

  const cases = {
    support: {
      kicker: "CASE STUDY 01 · ILLUSTRATIVE EXERCISE",
      title: "A structured technical support playbook",
      body: `<h4>Problem to solve</h4><p>A customer reports that a core feature is not working. The issue is unclear, and the support team needs to avoid repeated questions and premature escalation.</p><h4>Approach</h4><ul><li>Clarify the expected result, actual behaviour, timing, affected users, device/browser, and any error message.</li><li>Check known incidents and approved troubleshooting steps before asking the customer to repeat actions.</li><li>Document steps to reproduce, impact, frequency, evidence, and what has already been tested.</li><li>Escalate with a concise summary and keep the customer updated using an agreed next-update time.</li></ul><h4>How I would evaluate it</h4><p>Track first-response time, time to resolution, repeat contacts, escalation quality, and customer feedback. Baseline data would be needed before claiming improvement.</p><h4>Deliverable</h4><p>A reusable triage checklist, escalation template, and customer update examples.</p>`
    },
    onboarding: {
      kicker: "CASE STUDY 02 · ILLUSTRATIVE EXERCISE",
      title: "A first-week B2B SaaS onboarding journey",
      body: `<h4>Problem to solve</h4><p>New customers may not know what to configure first, who owns each task, or how to tell whether setup is complete.</p><h4>Approach</h4><ul><li>Send a concise welcome message with the goal, timeline, key contacts, and preparation checklist.</li><li>Break setup into small milestones with a clear owner and completion criteria.</li><li>Identify likely blockers early and offer short, contextual guidance rather than overwhelming customers with documentation.</li><li>Schedule a checkpoint to confirm that the customer has completed the key first-use task and knows where to get help.</li></ul><h4>How I would evaluate it</h4><p>Measure time to first value, onboarding milestone completion, setup-related tickets, attendance at key sessions, and early customer feedback.</p><h4>Deliverable</h4><p>A welcome email, onboarding checklist, blocker-handling guide, and first-week follow-up template.</p>`
    },
    feedback: {
      kicker: "CASE STUDY 03 · ILLUSTRATIVE EXERCISE",
      title: "Turning recurring tickets into useful product feedback",
      body: `<h4>Problem to solve</h4><p>Similar customer issues arrive through different channels and are described in different ways, making patterns hard to see.</p><h4>Approach</h4><ul><li>Apply consistent categories and tags to tickets, separating symptoms from confirmed causes.</li><li>Group recurring issues by affected workflow, customer impact, frequency, and available workaround.</li><li>Prepare a concise bug report with steps to reproduce, expected versus actual behaviour, evidence, and environment details.</li><li>Share a prioritized summary with product or engineering, then close the loop with support colleagues when status changes.</li></ul><h4>How I would evaluate it</h4><p>Review repeat-ticket volume, time to identify patterns, completeness of bug reports, resolution status, and customer impact. Use a real baseline before drawing conclusions.</p><h4>Deliverable</h4><p>A sample ticket taxonomy, anonymized fictional dataset, issue summary, and product feedback report.</p>`
    }
  };
  const detail = document.getElementById("caseDetail");
  document.querySelectorAll(".case-open").forEach(button => button.addEventListener("click", () => {
    const item = cases[button.dataset.case];
    if (!item || !detail) return;
    document.getElementById("caseKicker").textContent = item.kicker;
    document.getElementById("caseTitle").textContent = item.title;
    document.getElementById("caseBody").innerHTML = item.body;
    detail.hidden = false;
    detail.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  }));
  document.getElementById("caseClose")?.addEventListener("click", () => { detail.hidden = true; });
  document.getElementById("year").textContent = new Date().getFullYear();
})();