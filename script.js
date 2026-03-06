  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".subject").forEach(subject => {
      const text = subject.querySelector(".progress-text");
      const fill = subject.querySelector(".progress-fill");

      if (text && fill) {
        let percent = parseInt(text.textContent); // "45%" → 45
        if (!isNaN(percent)) {
          fill.style.width = percent + "%";

        }
      }
    });
  });

function showSection(sectionId) {
    const sections = ["academics", "extracurricular", "upcoming-events"];
    const headers = {
        "academics": "header-academics",
        "extracurricular": "header-extracurricular",
        "upcoming-events": "header-events"
    };

    sections.forEach(id => {
        const section = document.getElementById(id);
        const header = document.getElementById(headers[id]);

        if (section && header) {
            if (id === sectionId) {
                // Show section with correct display type
                const displayType = (id === "extracurricular") ? "flex" : "grid";
                section.style.display = displayType;
                header.style.display = "block";  // show corresponding header
            } else {
                section.style.display = "none";  // hide other sections
                header.style.display = "none";   // hide other headers
            }
        }
    });
}

function toggleSubject(progressElement) {
  const details = progressElement.nextElementSibling;
  details.classList.toggle("active");
}

function openTab(button, tabId) {
  const subjectDetails = button.closest(".subject-details");

  // remove active from all buttons in this subject
  subjectDetails.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));

  // hide all tab-content in this subject
  subjectDetails.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

  // activate the clicked button and its tab
  button.classList.add("active");
  subjectDetails.querySelector("#" + tabId).classList.add("active");
}

// Main navigation
        function showSection(sectionId) {
            const sections = document.querySelectorAll('.dashboard-section');
            sections.forEach(sec => sec.classList.remove('active'));
            const activeSection = document.getElementById(sectionId);
            if (activeSection) activeSection.classList.add('active');
        }

        // Inner navigation inside HOME
        function showInnerSection(sectionId) {
            const innerSections = document.querySelectorAll('#home .section');
            innerSections.forEach(sec => sec.classList.remove('active'));
            const activeInner = document.getElementById(sectionId);
            if (activeInner) activeInner.classList.add('active');
        }

        // Show home by default on page load
        window.addEventListener('DOMContentLoaded', () => {
            showSection('home');
            showInnerSection('academics');
        });









