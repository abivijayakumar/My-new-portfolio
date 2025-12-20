// Dark/Light Mode
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

// Scroll Progress
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width = (winScroll / height) * 100 + "%";
});

// Typing Effect
const typingText = ["Full Stack Developer",  "Java Enthusiast"];
let i = 0, j = 0, isDeleting = false;
function type() {
  const current = typingText[i];
  document.getElementById("typing").textContent = current.substring(0, j);
  if (!isDeleting) {
    if (j < current.length) j++;
    else { isDeleting = true; setTimeout(type, 1500); return; }
  } else {
    if (j > 0) j--;
    else { isDeleting = false; i = (i + 1) % typingText.length; }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Skill Animation
function animateBars() {
  document.querySelectorAll(".bar").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.getAttribute("style").match(/--width:\s*(\d+%)/)[1];
    }
  });
}
window.addEventListener("scroll", animateBars);
animateBars();

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Certifications Data
const certificates = {
  novitech: [
    { title: "Full Stack Development", link: "https://drive.google.com/file/d/1cqbEvtSlajpN-imlrYh6lfGaB4cSgiDw/view" },
    { title: "Data Analytics", link: "https://drive.google.com/file/d/1JBlka1ccp6RD0liauZVD47_jJAZG6wcT/view" },
    { title: "Power BI", link: "https://drive.google.com/file/d/1AWIjGjpO68W8tRsn5lm29T0xVOPjqHi9/view" }
  ],
  cursa: [
    { title: "Software Testing", link: "https://drive.google.com/file/d/1By6CFFykTf2FVic9NqfCoM_NVUMkzrCH/view" }
  ],
  linkedin: [
    { title: "Learning Python", link: "https://drive.google.com/file/d/18yxYSF51Rgu4jbNnUMa9b9ypFYLfxaXa/view" },
    { title: "Python Data Analysis", link: "https://drive.google.com/file/d/181I0HB-JUn6NOFrbLPfWx0_zkUeIjVjW/view" },
    { title: "Learning SQL Programming", link: "https://drive.google.com/file/d/1gLx9N6J2sEcZ4f0ErV1Y9r2lgsCsdUdI/view" },
    { title: "MySQL Essential Training", link: "https://drive.google.com/file/d/1gotKq4LSixMDrBYkxgL7ooAKjpZK3EkN/view" },
    { title: "Introduction to Data Science", link: "https://drive.google.com/file/d/1h5j88HYMFqWxiF29Fqbox1emMvn2LvzX/view" },
    { title: "Data Science Foundation and Fundamentals", link: "https://drive.google.com/file/d/1QVMKXCk4XfP8pHXJe4LiGFnjiLaTbony/view" }
  ],
  internshala: [
    { title: "Data Science", link: "https://drive.google.com/file/d/1T4PmRbt7iaJ9uZrqFIMbNd2lXCwTBEO6/view" }
  ],
  letsupgrade: [
    { title: "HTML & CSS Bootcamp", link: "https://drive.google.com/file/d/1CmPod044pRoG2Bh64ljwUajPspNvwESa/view" },
    { title: "Prompt Engineering", link: "https://drive.google.com/file/d/15i2mCEyFuDs1teA0DURl0vqXuPmlvjXD/view" },
    { title: "JavaScript Bootcamp", link: "https://drive.google.com/file/d/10OmjcLfMeBrlpmWaE8bcx6fmt7aJChcu/view" },
    { title: "Power BI Bootcamp", link: "https://drive.google.com/file/d/19FcU5XzMazodLlyE00HrmI5KBRwfQvH4/view" }
  ],
  mongodb: [
    { title: "MongoDB Basics for Students", link: "https://drive.google.com/file/d/14cixHOFSPWXtniO0y2R0uBFZpUL59o3f/view" }
  ]
};

// Certification Navigation
const companiesSection = document.getElementById("cert-companies");
const gallerySection = document.getElementById("cert-gallery");
const certGrid = document.getElementById("cert-grid");
document.getElementById("backToCompanies").addEventListener("click", () => {
  companiesSection.style.display = "flex";
  gallerySection.style.display = "none";
});
document.querySelectorAll(".company-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    companiesSection.style.display = "none";
    gallerySection.style.display = "block";
    certGrid.innerHTML = certificates[btn.dataset.company]
      .map(cert => `<div class="cert-item"><a href="${cert.link}" target="_blank">${cert.title}</a></div>`)
      .join("");
  });
});

// Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffb400" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: { enable: true, color: "#ffb400", opacity: 0.4 },
    move: { enable: true, speed: 2 }
  }
});