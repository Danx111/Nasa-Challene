document.getElementById("boton").addEventListener("click", () => {
  alert("¡Gracias por visitar mi proyecto!");
});

// Ejemplo: scroll suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const el = document.querySelector(a.getAttribute("href"));
    el?.scrollIntoView({ behavior: "smooth" });
  });
});
