/**
 * ROI Calculator for B2B Pages
 * Handles scenario switching (cobra vs nao cobra)
 */

class ROICalculator {
  constructor(prefix = '') {
    this.prefix = prefix; // For pages with multiple calculators
    this.init();
  }

  init() {
    // Setup scenario switcher buttons
    const btnCobra = document.getElementById(`btnCobra${this.prefix}`);
    const btnNaoCobra = document.getElementById(`btnNaoCobra${this.prefix}`);

    if (btnCobra) {
      btnCobra.addEventListener('click', () => this.showScenario('cobra'));
    }

    if (btnNaoCobra) {
      btnNaoCobra.addEventListener('click', () => this.showScenario('naoCobra'));
    }
  }

  showScenario(scenario) {
    const scenarioCobra = document.getElementById(`scenarioCobra${this.prefix}`);
    const scenarioNaoCobra = document.getElementById(`scenarioNaoCobra${this.prefix}`);
    const btnCobra = document.getElementById(`btnCobra${this.prefix}`);
    const btnNaoCobra = document.getElementById(`btnNaoCobra${this.prefix}`);

    if (!scenarioCobra || !scenarioNaoCobra) return;

    const activeClasses = ['bg-brand-cyan', 'text-brand-charcoal'];
    const inactiveClasses = ['bg-white/10', 'ring-1', 'ring-white/20', 'text-white'];

    if (scenario === 'cobra') {
      scenarioCobra.classList.remove('hidden');
      scenarioNaoCobra.classList.add('hidden');

      btnCobra.classList.remove(...inactiveClasses);
      btnCobra.classList.add(...activeClasses);
      btnNaoCobra.classList.remove(...activeClasses);
      btnNaoCobra.classList.add(...inactiveClasses);
    } else {
      scenarioCobra.classList.add('hidden');
      scenarioNaoCobra.classList.remove('hidden');

      btnNaoCobra.classList.remove(...inactiveClasses);
      btnNaoCobra.classList.add(...activeClasses);
      btnCobra.classList.remove(...activeClasses);
      btnCobra.classList.add(...inactiveClasses);
    }
  }
}

// Initialize calculators
document.addEventListener('DOMContentLoaded', () => {
  // Default calculator (most pages)
  if (document.getElementById('scenarioCobra')) {
    window.roiCalculator = new ROICalculator('');
  }

  // Fisioterapeutas page has suffix "Fisio"
  if (document.getElementById('scenarioCobraFisio')) {
    window.roiCalculatorFisio = new ROICalculator('Fisio');
  }
});

// Legacy global function support
window.showScenario = (scenario) => {
  if (window.roiCalculator) {
    window.roiCalculator.showScenario(scenario);
  }
};

window.showScenarioFisio = (scenario) => {
  if (window.roiCalculatorFisio) {
    window.roiCalculatorFisio.showScenario(scenario);
  }
};
