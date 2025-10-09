/**
 * LGPD Compliant Cookie Consent Manager
 * Handles cookie consent banner and tracking preferences
 */

class CookieConsent {
  constructor() {
    this.consentKey = 'fyit_cookie_consent';
    this.consentDate = 'fyit_consent_date';
    this.init();
  }

  init() {
    // Check if user already gave consent
    const consent = this.getConsent();

    if (!consent) {
      this.showBanner();
    } else {
      // Check if consent is older than 12 months (LGPD requirement)
      const consentDate = localStorage.getItem(this.consentDate);
      if (consentDate) {
        const monthsSinceConsent = this.getMonthsSince(new Date(consentDate));
        if (monthsSinceConsent >= 12) {
          this.showBanner();
        }
      }
    }
  }

  showBanner() {
    const banner = this.createBanner();
    document.body.appendChild(banner);

    // Accessibility: focus on banner
    setTimeout(() => {
      const acceptBtn = banner.querySelector('#acceptCookies');
      if (acceptBtn) acceptBtn.focus();
    }, 100);
  }

  createBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookieConsentBanner';
    banner.className = 'fixed bottom-0 left-0 right-0 bg-brand-charcoal border-t-2 border-brand-cyan p-4 z-50 shadow-2xl';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookieConsentTitle');
    banner.setAttribute('aria-describedby', 'cookieConsentDesc');

    banner.innerHTML = `
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex-1">
          <h3 id="cookieConsentTitle" class="text-white font-semibold mb-1">
            🍪 Usamos cookies
          </h3>
          <p id="cookieConsentDesc" class="text-brand-light text-sm">
            Este site usa cookies essenciais para funcionar e cookies de análise para melhorar sua experiência.
            Ao continuar navegando, você concorda com nossa
            <a href="/politica-privacidade.html" class="text-brand-cyan hover:underline">Política de Privacidade</a>.
          </p>
        </div>
        <div class="flex gap-3 shrink-0">
          <button
            id="rejectCookies"
            class="px-4 py-2 rounded-lgx bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium"
            aria-label="Rejeitar cookies opcionais"
          >
            Apenas Essenciais
          </button>
          <button
            id="acceptCookies"
            class="px-6 py-2 rounded-lgx bg-brand-cyan text-brand-charcoal hover:opacity-90 transition-opacity text-sm font-semibold"
            aria-label="Aceitar todos os cookies"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    `;

    // Event listeners
    banner.querySelector('#acceptCookies').addEventListener('click', () => {
      this.setConsent(true);
      this.removeBanner();
    });

    banner.querySelector('#rejectCookies').addEventListener('click', () => {
      this.setConsent(false);
      this.removeBanner();
    });

    return banner;
  }

  setConsent(accepted) {
    localStorage.setItem(this.consentKey, accepted ? 'accepted' : 'essential-only');
    localStorage.setItem(this.consentDate, new Date().toISOString());

    // Enable analytics only if user accepted
    if (accepted) {
      this.enableAnalytics();
    }
  }

  getConsent() {
    return localStorage.getItem(this.consentKey);
  }

  removeBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
      banner.style.animation = 'slideDown 0.3s ease-out';
      setTimeout(() => banner.remove(), 300);
    }
  }

  enableAnalytics() {
    // Only enable tracking if user consented
    // This is where you'd initialize Google Analytics, Plausible, etc.
    console.info('Analytics enabled with user consent');

    // Example: Load Google Analytics
    // const script = document.createElement('script');
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    // document.head.appendChild(script);
  }

  getMonthsSince(date) {
    const now = new Date();
    const months = (now.getFullYear() - date.getFullYear()) * 12;
    return months + now.getMonth() - date.getMonth();
  }
}

// Initialize cookie consent
document.addEventListener('DOMContentLoaded', () => {
  window.cookieConsent = new CookieConsent();
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
