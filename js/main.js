// 101 Jiu Jitsu & Kickboxing - Shared JavaScript

(function() {
  'use strict';

  // ========================================
  // MARKETING ATTRIBUTION + CONTEXT FOR GHL
  // ========================================
  const ATTR_STORAGE_KEY = 'ghl_attribution_context';
  const SESSION_ID_KEY = 'ghl_session_id';
  const ATTR_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
    'msclkid',
    'ttclid'
  ];

  const getNowIso = () => new Date().toISOString();

  const getPageUrl = () => `${window.location.origin}${window.location.pathname}${window.location.search}`;

  const getPageContext = () => ({
    page_url: getPageUrl(),
    page_path: window.location.pathname,
    page_query: window.location.search || '',
    page_title: document.title || '',
    page_referrer: document.referrer || '',
    browser_language: navigator.language || '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    user_agent: navigator.userAgent || ''
  });

  const getQueryAttribution = () => {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    ATTR_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) data[key] = value;
    });
    return data;
  };

  const getStoredAttributionContext = () => {
    try {
      const raw = localStorage.getItem(ATTR_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (error) {
      return null;
    }
  };

  const saveAttributionContext = (data) => {
    try {
      localStorage.setItem(ATTR_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      // Ignore storage errors (private mode / storage limits).
    }
  };

  const getSessionId = () => {
    const existing = sessionStorage.getItem(SESSION_ID_KEY);
    if (existing) return existing;
    const generated = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem(SESSION_ID_KEY, generated);
    return generated;
  };

  const syncAttributionContext = () => {
    const now = getNowIso();
    const pageUrl = getPageUrl();
    const queryData = getQueryAttribution();
    const existing = getStoredAttributionContext();
    const hasNewCampaignData = Object.keys(queryData).length > 0;

    const firstTouch = existing?.first_touch || {
      captured_at: now,
      landing_page: pageUrl,
      ...queryData
    };

    const lastTouch = hasNewCampaignData
      ? {
          captured_at: now,
          landing_page: pageUrl,
          ...queryData
        }
      : (existing?.last_touch || firstTouch);

    const attributionContext = {
      session_id: getSessionId(),
      first_seen_at: existing?.first_seen_at || now,
      last_seen_at: now,
      first_touch: firstTouch,
      last_touch: lastTouch,
      first_landing_page: existing?.first_landing_page || pageUrl,
      last_landing_page: pageUrl
    };

    saveAttributionContext(attributionContext);
    return attributionContext;
  };

  const getFlatTrackingFields = () => {
    const attrContext = getStoredAttributionContext() || syncAttributionContext();
    const pageContext = getPageContext();
    const firstTouch = attrContext.first_touch || {};
    const lastTouch = attrContext.last_touch || {};

    return {
      ...pageContext,
      session_id: attrContext.session_id || getSessionId(),
      first_seen_at: attrContext.first_seen_at || '',
      last_seen_at: attrContext.last_seen_at || '',
      landing_page: attrContext.last_landing_page || pageContext.page_url,
      first_landing_page: attrContext.first_landing_page || '',
      last_landing_page: attrContext.last_landing_page || '',
      first_touch_at: firstTouch.captured_at || '',
      last_touch_at: lastTouch.captured_at || '',
      first_touch_utm_source: firstTouch.utm_source || '',
      first_touch_utm_medium: firstTouch.utm_medium || '',
      first_touch_utm_campaign: firstTouch.utm_campaign || '',
      first_touch_utm_term: firstTouch.utm_term || '',
      first_touch_utm_content: firstTouch.utm_content || '',
      first_touch_gclid: firstTouch.gclid || '',
      first_touch_fbclid: firstTouch.fbclid || '',
      first_touch_msclkid: firstTouch.msclkid || '',
      first_touch_ttclid: firstTouch.ttclid || '',
      last_touch_utm_source: lastTouch.utm_source || '',
      last_touch_utm_medium: lastTouch.utm_medium || '',
      last_touch_utm_campaign: lastTouch.utm_campaign || '',
      last_touch_utm_term: lastTouch.utm_term || '',
      last_touch_utm_content: lastTouch.utm_content || '',
      last_touch_gclid: lastTouch.gclid || '',
      last_touch_fbclid: lastTouch.fbclid || '',
      last_touch_msclkid: lastTouch.msclkid || '',
      last_touch_ttclid: lastTouch.ttclid || '',
      utm_source: lastTouch.utm_source || '',
      utm_medium: lastTouch.utm_medium || '',
      utm_campaign: lastTouch.utm_campaign || '',
      utm_term: lastTouch.utm_term || '',
      utm_content: lastTouch.utm_content || '',
      gclid: lastTouch.gclid || '',
      fbclid: lastTouch.fbclid || '',
      msclkid: lastTouch.msclkid || '',
      ttclid: lastTouch.ttclid || ''
    };
  };

  const setHiddenAttributionValues = () => {
    const fields = getFlatTrackingFields();
    Object.entries(fields).forEach(([name, value]) => {
      document.querySelectorAll(`input[type="hidden"][name="${name}"]`).forEach((input) => {
        input.value = value;
      });
    });
  };

  syncAttributionContext();
  setHiddenAttributionValues();

  // ========================================
  // MOBILE MENU TOGGLE
  // ========================================
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ========================================
  // SCROLL REVEAL ANIMATION
  // ========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        navbar.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }

  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================
  // FORM VALIDATION
  // ========================================
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#E42416';
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });

  // ========================================
  // GOHIGHLEVEL FORM WORKFLOW
  // Keeps booking flow on-site while posting to GHL.
  // ========================================
  const ghlForms = document.querySelectorAll('form[data-ghl-form="true"]');

  ghlForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot spam field (should stay empty).
      const trapField = form.querySelector('input[name="website"]');
      if (trapField && trapField.value.trim() !== '') {
        return;
      }

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
      const originalLabel = submitButton ? submitButton.textContent : '';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
      }

      const payload = new FormData(form);
      syncAttributionContext();
      const trackingFields = getFlatTrackingFields();

      Object.entries(trackingFields).forEach(([key, value]) => {
        if (payload.has(key)) {
          payload.set(key, value);
        } else {
          payload.append(key, value);
        }
      });

      payload.set('submitted_at', new Date().toISOString());

      const successUrl = form.dataset.successUrl || 'thank-you.html';

      try {
        await fetch(form.action, {
          method: 'POST',
          body: payload,
          mode: 'no-cors',
          keepalive: true
        });
      } catch (error) {
        // Intentionally swallow fetch errors and continue redirect.
        // We prioritize uninterrupted booking UX.
      }

      window.location.href = successUrl;
    });
  });

  // ========================================
  // LAZY LOADING IMAGES
  // ========================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ========================================
  // COUNTER ANIMATION (for stats)
  // ========================================
  const counters = document.querySelectorAll('.counter');
  
  if (counters.length > 0) {
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // ========================================
  // PARALLAX EFFECT (subtle)
  // ========================================
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

})();
