// Nav fold defaults: Reference unfolded, everything else as the theme
// leaves it (Archive, Legacy documentation, … folded).
// Material generates checkbox toggles with unstable ids, so locate the
// Reference group by its title link instead.
//
// Note: Material's own bundle resets all nav toggles (unchecked +
// indeterminate) during startup, so this re-applies the state at several
// points (parse time, DOM ready, window load, plus retries) and mimics a
// user toggle (checked + no indeterminate state).
function unfoldReference() {
  document.querySelectorAll(".md-nav__container").forEach((box) => {
    const link = box.querySelector(":scope > a.md-nav__link");
    if (link && link.textContent.trim() === "Reference") {
      const label = box.querySelector(":scope > label[for]");
      if (label) {
        const input = document.getElementById(label.getAttribute("for"));
        if (input) {
          input.indeterminate = false;
          input.classList.remove("md-toggle--indeterminate");
          input.checked = true;
        }
      }
    }
  });
}
unfoldReference();
document.addEventListener("DOMContentLoaded", unfoldReference);
window.addEventListener("load", unfoldReference);
[100, 500, 1500, 3000].forEach((ms) => setTimeout(unfoldReference, ms));
