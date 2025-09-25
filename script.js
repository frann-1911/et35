// 1. Funcionalidad del Menú Hamburguesa (para dispositivos móviles)
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Escucha el click en el botón de hamburguesa
    navToggle.addEventListener('click', () => {
        // Alterna la clase 'open' para mostrar/ocultar el menú
        navList.classList.toggle('open');
    });

    // 2. Funcionalidad del Modo Claro/Oscuro
    // Comprueba si el usuario ya tiene un tema guardado en localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        }
    }

    // Escucha el clic en el botón de cambio de tema
    themeToggle.addEventListener('click', () => {
        // Alterna la clase 'dark-mode' en el body
        body.classList.toggle('dark-mode');
        
        let theme = 'light-mode';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            // Cambia el ícono a sol
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        } else {
            // Cambia el ícono a luna
            themeToggle.querySelector('i').classList.remove('fa-sun');
            themeToggle.querySelector('i').classList.add('fa-moon');
        }
        // Guarda la preferencia del usuario en el almacenamiento local
        localStorage.setItem('theme', theme);
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
