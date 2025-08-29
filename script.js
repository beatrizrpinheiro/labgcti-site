// Animação on scroll (efeito fade-in para elementos que entram na tela)
function animateOnScroll() {
	const elements = document.querySelectorAll(
		".fade-in, .fade-in-up, .fade-in-up-delay, .fade-in-up-delay2"
	);
	const windowHeight = window.innerHeight;
	elements.forEach((el) => {
		const rect = el.getBoundingClientRect();
		if (rect.top < windowHeight - 60) {
			el.style.animationPlayState = "running";
		}
	});
}
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("DOMContentLoaded", animateOnScroll);

// Simulação simples de envio de formulário
document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault();
	document.getElementById("successMessage").style.display = "block";
	this.reset();
	setTimeout(function () {
		document.getElementById("successMessage").style.display = "none";
	}, 4000);
});

// Efeito suave para rolagem ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: "smooth" });
		}
	});
});
