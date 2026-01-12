/**
 * SCRIPT PARA SITIO WEB DE NAIL COLOR'S
 * Funcionalidades actualizadas para:
 * - Navegación responsive con Bootstrap
 * - Galería con scroll automático
 * - Animaciones mejoradas
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // 1. ACTUALIZAR AÑO EN COPYRIGHT AUTOMÁTICAMENTE
    // ============================================
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
        console.log(`Año actualizado en el copyright: ${currentYear}`);
    }

    // ============================================
    // 2. SCROLL SUAVE PARA ENLACES DE ANCLA
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcular posición considerando el header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                console.log(`Scroll suave hacia: ${targetId}`);
            }
        });
    });

    // ============================================
    // 3. ANIMACIÓN DE CARDS AL HACER SCROLL
    // ============================================
    const animateOnScroll = function () {
        const cards = document.querySelectorAll('.card');
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;

            // Si la card está visible en la ventana
            if (cardPosition < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Configurar cards inicialmente para animación
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // ============================================
    // 4. MANEJO DEL FORMULARIO DE CONTACTO
    // ============================================
    const contactForm = document.getElementById('formContacto');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener valores del formulario
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const service = this.querySelector('select').value;

            // Simular envío del formulario
            console.log('Formulario enviado con los siguientes datos:');
            console.log(`Nombre: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Servicio seleccionado: ${service}`);

            // Mostrar mensaje de éxito
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Mensaje Enviado!';
            submitButton.style.backgroundColor = '#2a9d8f';

            // Restaurar después de 3 segundos
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ============================================
    // 5. EFECTO DE HEADER AL HACER SCROLL
    // ============================================
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Ocultar/mostrar header al hacer scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll hacia arriba
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;

        // Añadir sombra al header cuando se hace scroll
        if (scrollTop > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });

    // ============================================
    // 6. CONTROL DE GALERÍA CON SCROLL AUTOMÁTICO
    // ============================================
    const galleryContainer = document.querySelector('.gallery-scroll-container');
    const galleryTrack = document.querySelector('.gallery-track');

    if (galleryContainer && galleryTrack) {
        // Clonar los items para efecto infinito
        const items = galleryTrack.querySelectorAll('.gallery-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            galleryTrack.appendChild(clone);
        });

        // Pausar animación al pasar el mouse
        galleryContainer.addEventListener('mouseenter', () => {
            galleryTrack.style.animationPlayState = 'paused';
        });

        galleryContainer.addEventListener('mouseleave', () => {
            galleryTrack.style.animationPlayState = 'running';
        });
    }

    // ============================================
    // 7. INICIALIZACIÓN Y MENSAJE DE CONSOLA
    // ============================================
    console.log('Sitio web de Nail Color\'s cargado correctamente');
    console.log('Bootstrap integrado correctamente');
    console.log('Funcionalidades activadas: navegación responsive, galería con scroll automático, animaciones mejoradas');
});