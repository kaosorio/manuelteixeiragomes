/**
 * Manuel Teixeira Gomes - Repositório Digital
 * JavaScript Principal
 */

document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // Marcar item de navegação ativo
  // =============================================
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item > a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.closest('.nav-item').classList.add('active');
    }
  });

  // Verificar também os itens de dropdown
  const dropdownLinks = document.querySelectorAll('.dropdown a');
  dropdownLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.closest('.nav-item').classList.add('active');
    }
  });

  // =============================================
  // Lightbox para galerias de imagens
  // =============================================
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightboxOverlay) {
    // Abrir lightbox ao clicar em imagem da galeria
    document.querySelectorAll('.gallery-item img, .home-gallery-item img').forEach(function (img) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function () {
        lightboxImg.src = this.src;
        const caption = this.closest('.gallery-item')
          ? this.closest('.gallery-item').querySelector('.gallery-caption')
          : null;
        lightboxCaption.textContent = caption ? caption.textContent : '';
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Fechar lightbox
    function closeLightbox() {
      lightboxOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightboxOverlay.addEventListener('click', function (e) {
      if (e.target === lightboxOverlay) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  // =============================================
  // Formulário de contacto
  // =============================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviado!';
      submitBtn.disabled = true;
      submitBtn.style.background = '#2d6a4f';

      const successMsg = document.getElementById('form-success');
      if (successMsg) {
        successMsg.style.display = 'block';
      }

      setTimeout(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        contactForm.reset();
        if (successMsg) {
          successMsg.style.display = 'none';
        }
      }, 4000);
    });
  }

  // =============================================
  // Menu mobile toggle
  // =============================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navInner = document.querySelector('.nav-inner');

  if (mobileMenuBtn && navInner) {
    mobileMenuBtn.addEventListener('click', function () {
      navInner.classList.toggle('open');
    });
  }

});
