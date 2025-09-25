// 1. Funcionalidad del Menú Hamburguesa (para dispositivos móviles)
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.getElementById('body');

    // Escucha el click en el botón de hamburguesa
    navToggle.addEventListener('click', () => {
        // Alterna la clase 'open' para mostrar/ocultar el menú
        navList.classList.toggle('open');
    });

    // 2. Funcionalidad para el Modo Oscuro/Claro
    // Carga la preferencia del usuario desde localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Escucha el click en el botón de cambio de tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Guarda la preferencia en localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // 3. Ejemplo de contenido dinámico (Opcional: para la sección 'highlights')
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
