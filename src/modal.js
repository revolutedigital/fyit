/**
 * Modal Management System
 * Handles form modal opening/closing and lead capture
 */

class ModalManager {
  constructor() {
    this.modal = document.getElementById('modalForm');
    this.leadForm = document.getElementById('leadForm');
    this.init();
  }

  init() {
    // Add click listeners to all CTA buttons
    document.querySelectorAll('a[href="#contato"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // Close modal when clicking outside
    this.modal?.addEventListener('click', (e) => {
      if (e.target.id === 'modalForm') {
        this.close();
      }
    });

    // Handle form submission
    this.leadForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit(e);
    });
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Focus first input for accessibility
    const firstInput = this.modal.querySelector('input');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  handleSubmit(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Validate data (basic sanitization)
    const sanitizedData = {
      nome: this.sanitize(data.nome),
      email: this.sanitize(data.email),
      telefone: this.sanitize(data.telefone),
      quantidade: this.sanitize(data.quantidade)
    };

    // LGPD compliant - no console.log of PII
    // Send to analytics if needed (with user consent)

    // Redirect to WhatsApp
    const message = this.buildWhatsAppMessage(sanitizedData);
    window.location.href = `https://wa.me/5511999999999?text=${message}`;
  }

  sanitize(str) {
    if (!str) return '';
    return str.replace(/[<>]/g, '');
  }

  buildWhatsAppMessage(data) {
    const parts = [
      'Olá! Gostaria de agendar uma demonstração.',
      '',
      `Nome: ${encodeURIComponent(data.nome)}`,
      `Email: ${encodeURIComponent(data.email)}`,
      `Telefone: ${encodeURIComponent(data.telefone)}`,
      `Quantidade: ${encodeURIComponent(data.quantidade)}`
    ];
    return parts.join('%0A');
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.modalManager = new ModalManager();
  });
} else {
  window.modalManager = new ModalManager();
}

// Expose close function globally for inline onclick handlers
window.closeModal = () => {
  if (window.modalManager) {
    window.modalManager.close();
  }
};
