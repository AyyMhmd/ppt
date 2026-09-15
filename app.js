/**
 * Sidang TA Presentation Controller
 * Stack: Vanilla HTML / CSS / JS
 * Transitions: View Transitions API (document.startViewTransition)
 * Morph Targets: Section 3.2 ui.md & Section 7 Backup Deck
 */

(function () {
  'use strict';

  // Main Slide State
  const TOTAL_MAIN_SLIDES = 19;
  let currentSlideIndex = 0;

  // Backup Deck State (Section 7 ui.md)
  const TOTAL_BACKUP_SLIDES = 10;
  let isBackupMode = false;
  let currentBackupSlideIndex = 0;
  let savedMainSlideIndex = 0;

  // DOM Elements - Main Deck
  const mainSlides = document.querySelectorAll('.slide:not(.backup-slide)');
  const pageNumberEl = document.getElementById('page-number');
  const progressBarEl = document.getElementById('progress-bar');
  const navPrevEl = document.getElementById('nav-prev');
  const navNextEl = document.getElementById('nav-next');

  // DOM Elements - Backup Deck
  const backupDeckContainer = document.getElementById('backup-deck-container');
  const backupSlides = document.querySelectorAll('.backup-slide');
  const backupPageNumberEl = document.getElementById('backup-page-number');
  const backupProgressBarEl = document.getElementById('backup-progress-bar');
  const backupCloseBtn = document.getElementById('backup-close-btn');
  const backupToggleBtn = document.getElementById('backup-toggle-btn');

  /**
   * Assigns view-transition-name to morphing elements for main slides
   */
  function prepareMorphNames(currentIndex, targetIndex) {
    document.querySelectorAll('[style*="view-transition-name"]').forEach(el => {
      el.style.viewTransitionName = '';
    });

    const currentSlide = mainSlides[currentIndex];
    const targetSlide = mainSlides[targetIndex];

    if (!currentSlide || !targetSlide) return;

    // A. Judul Running Morph (title-X -> title-Y)
    const currentTitle = currentSlide.querySelector('.morph-title');
    const targetTitle = targetSlide.querySelector('.morph-title');
    if (currentTitle) currentTitle.style.viewTransitionName = 'slide-title';
    if (targetTitle) targetTitle.style.viewTransitionName = 'slide-title';

    // B. Hero Stats -> Rekap Table Line Morph (Slide 12-15 to Slide 16)
    const statsMap = {
      'stat-functional': 'land-functional',
      'stat-usability': 'land-usability',
      'stat-security': 'land-security',
      'stat-portability': 'land-portability'
    };

    Object.entries(statsMap).forEach(([statId, landId]) => {
      const statEl = currentSlide.querySelector(`#${statId}`) || targetSlide.querySelector(`#${statId}`);
      const landEl = currentSlide.querySelector(`#${landId}`) || targetSlide.querySelector(`#${landId}`);

      if (statEl && landEl) {
        statEl.style.viewTransitionName = statId;
        landEl.style.viewTransitionName = statId;
      }
    });

    // C. Gold Seal Morph (Slide 8 small seal -> Slide 17 large seal)
    const sealSm = currentSlide.querySelector('#gold-seal-sm') || targetSlide.querySelector('#gold-seal-sm');
    const sealLg = currentSlide.querySelector('#gold-seal-lg') || targetSlide.querySelector('#gold-seal-lg');
    if (sealSm && sealLg) {
      sealSm.style.viewTransitionName = 'gold-seal';
      sealLg.style.viewTransitionName = 'gold-seal';
    }
  }

  // Slide 6 ISO Card Sub-Step State
  const TOTAL_SLIDE6_STEPS = 4;
  let slide6Step = 0;

  function updateSlide6Cards() {
    const isoCards = document.querySelectorAll('#slide-6 .iso-card');
    isoCards.forEach((card, idx) => {
      if (idx < slide6Step) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });
  }

  // Slide 8 Actor Card Sub-Step State
  const TOTAL_SLIDE8_STEPS = 5;
  let slide8Step = 0;

  function updateSlide8Cards() {
    const actorCards = document.querySelectorAll('#slide-8 .actor-card');
    actorCards.forEach((card, idx) => {
      if (idx < slide8Step) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });
  }

  /**
   * Updates DOM state for main target slide index
   */
  function renderSlide(nextIndex) {
    const prevIndex = currentSlideIndex;

    mainSlides.forEach((slide, idx) => {
      if (idx === nextIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    if (nextIndex === 6) {
      if (prevIndex < 6) {
        slide6Step = 0;
      } else if (prevIndex > 6) {
        slide6Step = TOTAL_SLIDE6_STEPS;
      }
      updateSlide6Cards();
    }

    if (nextIndex === 8) {
      if (prevIndex < 8) {
        slide8Step = 0;
      } else if (prevIndex > 8) {
        slide8Step = TOTAL_SLIDE8_STEPS;
      }
      updateSlide8Cards();
    }

    // Update Main Page Number ("01 / 19", "02 / 19", etc.)
    const formattedCurrent = String(nextIndex + 1).padStart(2, '0');
    const formattedTotal = String(TOTAL_MAIN_SLIDES).padStart(2, '0');
    if (pageNumberEl) {
      pageNumberEl.textContent = `${formattedCurrent} / ${formattedTotal}`;
    }

    // Update Bottom Progress Bar Fill
    if (progressBarEl) {
      const progressPercent = ((nextIndex + 1) / TOTAL_MAIN_SLIDES) * 100;
      progressBarEl.style.width = `${progressPercent}%`;
    }

    currentSlideIndex = nextIndex;
  }

  /**
   * Navigates main slides with View Transitions API
   */
  function goToSlide(targetIndex) {
    if (targetIndex < 0 || targetIndex >= mainSlides.length) return;
    if (targetIndex === currentSlideIndex) return;

    prepareMorphNames(currentSlideIndex, targetIndex);

    if (!document.startViewTransition) {
      renderSlide(targetIndex);
      return;
    }

    document.startViewTransition(() => {
      renderSlide(targetIndex);
    });
  }

  function nextSlide() {
    if (currentSlideIndex === 6 && slide6Step < TOTAL_SLIDE6_STEPS) {
      slide6Step++;
      updateSlide6Cards();
      return;
    }
    if (currentSlideIndex === 8 && slide8Step < TOTAL_SLIDE8_STEPS) {
      slide8Step++;
      updateSlide8Cards();
      return;
    }
    if (currentSlideIndex < mainSlides.length - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex === 6 && slide6Step > 0) {
      slide6Step--;
      updateSlide6Cards();
      return;
    }
    if (currentSlideIndex === 8 && slide8Step > 0) {
      slide8Step--;
      updateSlide8Cards();
      return;
    }
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  // ==========================================================================
  // BACKUP DECK LOGIC (Section 7 ui.md)
  // ==========================================================================

  /**
   * Renders target Backup Deck slide (B1..B10)
   */
  function renderBackupSlide(targetIndex) {
    backupSlides.forEach((slide, idx) => {
      if (idx === targetIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update Backup Page Number ("BACKUP B01 / B10")
    const formattedCurrent = String(targetIndex + 1).padStart(2, '0');
    const formattedTotal = String(TOTAL_BACKUP_SLIDES).padStart(2, '0');
    if (backupPageNumberEl) {
      backupPageNumberEl.textContent = `BACKUP B${formattedCurrent} / B${formattedTotal}`;
    }

    // Update Backup Progress Bar
    if (backupProgressBarEl) {
      const progressPercent = ((targetIndex + 1) / TOTAL_BACKUP_SLIDES) * 100;
      backupProgressBarEl.style.width = `${progressPercent}%`;
    }

    currentBackupSlideIndex = targetIndex;
  }

  /**
   * Navigates backup slide index
   */
  function goToBackupSlide(targetIndex) {
    if (targetIndex < 0 || targetIndex >= backupSlides.length) return;

    const performTransition = () => renderBackupSlide(targetIndex);

    if (document.startViewTransition) {
      document.startViewTransition(performTransition);
    } else {
      performTransition();
    }
  }

  function nextBackupSlide() {
    if (currentBackupSlideIndex < backupSlides.length - 1) {
      goToBackupSlide(currentBackupSlideIndex + 1);
    }
  }

  function prevBackupSlide() {
    if (currentBackupSlideIndex > 0) {
      goToBackupSlide(currentBackupSlideIndex - 1);
    }
  }

  // Expose global helper for index item clicks
  window.goToBackupSlide = goToBackupSlide;

  /**
   * Toggles Backup Deck mode on/off
   * @param {boolean} [showForce]
   */
  function toggleBackupMode(showForce) {
    const targetState = typeof showForce === 'boolean' ? showForce : !isBackupMode;
    if (targetState === isBackupMode) return;

    const performToggle = () => {
      isBackupMode = targetState;

      if (isBackupMode) {
        // Save position of main deck before entering backup mode
        savedMainSlideIndex = currentSlideIndex;
        if (backupDeckContainer) {
          backupDeckContainer.classList.add('active');
          backupDeckContainer.setAttribute('aria-hidden', 'false');
        }
        renderBackupSlide(currentBackupSlideIndex);
      } else {
        // Return to saved main slide position without resetting
        if (backupDeckContainer) {
          backupDeckContainer.classList.remove('active');
          backupDeckContainer.setAttribute('aria-hidden', 'true');
        }
        renderSlide(savedMainSlideIndex);
      }
    };

    if (document.startViewTransition) {
      document.startViewTransition(performToggle);
    } else {
      performToggle();
    }
  }

  // Event Listeners for Backup Controls
  if (backupToggleBtn) {
    backupToggleBtn.addEventListener('click', () => toggleBackupMode(true));
  }
  if (backupCloseBtn) {
    backupCloseBtn.addEventListener('click', () => toggleBackupMode(false));
  }

  // Touch & Zone Navigation
  if (navPrevEl) {
    navPrevEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isBackupMode) prevBackupSlide();
      else prevSlide();
    });
  }

  if (navNextEl) {
    navNextEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isBackupMode) nextBackupSlide();
      else nextSlide();
    });
  }

  // Touchpad / Mouse Screen Click Navigation for Main Deck
  const deckContainer = document.getElementById('deck-container');
  if (deckContainer) {
    deckContainer.addEventListener('click', (e) => {
      if (isBackupMode) return;
      if (e.target.closest('.backup-toggle-btn, .backup-close-btn, button, a, #nav-prev')) return;
      nextSlide();
    });
  }

  // Keyboard Shortcuts (Section 7.1 ui.md)
  document.addEventListener('keydown', (e) => {
    // 1. Toggle Backup Deck with 'B' or 'b'
    if (e.key === 'b' || e.key === 'B') {
      e.preventDefault();
      toggleBackupMode();
      return;
    }

    // 2. Exit Backup Deck with 'Escape'
    if (e.key === 'Escape') {
      if (isBackupMode) {
        e.preventDefault();
        toggleBackupMode(false);
        return;
      }
    }

    // 3. Arrow & Space Navigation
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      if (isBackupMode) nextBackupSlide();
      else nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      if (isBackupMode) prevBackupSlide();
      else prevSlide();
    }
  });

  // Initialize main presentation on slide 0
  renderSlide(0);
})();
