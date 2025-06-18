const fadeUpElements = document.querySelectorAll('.fade-up');
const fadeScaleElements = document.querySelectorAll('.fade-scale');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // запускается один раз
    }
  });
}, { threshold: 0.2 });

fadeUpElements.forEach(el => observer.observe(el));
fadeScaleElements.forEach(el => observer.observe(el));

// Валидация формы
const form = document.getElementById("regForm");
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const service = document.getElementById("service");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!nameField.value || !email.value || !password.value || !confirmPassword.value || !service.value) {
    showMessage("Пожалуйста, заполните все поля", "red");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email.value)) {
    showMessage("Некорректный email!", "red");
    return;
  }

  if (password.value.length < 6) {
    showMessage("Пароль должен быть не менее 6 символов!", "red");
    return;
  }

  if (password.value !== confirmPassword.value) {
    showMessage("Пароли не совпадают!", "red");
    return;
  }

  showMessage("Регистрация прошла успешно", "green");
  form.reset();
});

function showMessage(text, bgColor) {
  message.textContent = text;
  message.style.backgroundColor = bgColor;
  message.style.color = "white";
  message.style.padding = "10px";
  message.style.borderRadius = "6px";
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});