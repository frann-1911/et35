// 1. Funcionalidad del Menú Hamburguesa (para dispositivos móviles)
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    // Escucha el click en el botón de hamburguesa
    navToggle.addEventListener('click', () => {
        // Alterna la clase 'open' para mostrar/ocultar el menú
        navList.classList.toggle('open');
    });

    // 2. Ejemplo de contenido dinámico (Opcional: para la sección 'highlights')
    const highlightsSection = document.querySelector('.highlights');
    
    const noticias = [
        { title: "Inscripciones Abiertas 2026", date: "20/09", text: "Proceso de inscripción para el próximo ciclo. ¡Revisa los requisitos!" },
        { title: "Feria de Ciencias", date: "15/09", text: "Nuestros alumnos de Computación presentaron sus proyectos de IA." },
    ];

    let htmlContent = '<h2>Últimas Noticias</h2><div class="news-grid">';
    noticias.forEach(item => {
        htmlContent += `
            <article class="news-card">
                <span class="news-date">${item.date}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </article>
        `;
    });
    htmlContent += '</div>';
    
    // Si la sección existe, inyecta el contenido
    if (highlightsSection) {
         highlightsSection.innerHTML = htmlContent;
    }
});