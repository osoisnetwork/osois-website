document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav drawer
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.close-drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Simple work/talent carousel (scroll by one card)
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('[data-track]');
    const prev = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    if (!track) return;
    const scrollAmount = () => track.clientWidth * 0.9;
    if (next) next.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
  });

  // Contact form (demo submit, no backend)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) status.textContent = form.id === 'joinForm' ? 'Application form preview complete. Connect this form to your live submission service before launch.' : 'Contact form preview complete. Connect this form to your live submission service before launch.';
      form.reset();
    });
  }

  // Active nav link highlighting based on current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-drawer a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ============================================
  // TALENT DIRECTORY (network.html)
  // ============================================
  const talentTrack = document.getElementById('talentTrack');
  if (talentTrack) {
    const TALENT = [
      {
        name: 'Ava Martin', location: 'Los Angeles, CA', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'9"', bust: '34"', waist: '24"', hips: '35"' },
        disciplines: ['Runway', 'Commercial', 'Print', 'Editorial', 'Swim', 'Fitness', 'Lifestyle'],
        about: 'Ava is a commercial and runway model with a bold, versatile look. She brings confidence, professionalism, and energy to every project.'
      },
      {
        name: 'Lily Anderson', location: 'Miami, FL', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'8"', bust: '32"', waist: '23"', hips: '34"' },
        disciplines: ['Editorial', 'Swim', 'Print', 'Commercial'],
        about: 'Lily specializes in editorial and swim work, known for her natural expressiveness in front of the camera and easy adaptability on set.'
      },
      {
        name: 'Zoe Johnson', location: 'New York, NY', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'10"', bust: '33"', waist: '24"', hips: '35"' },
        disciplines: ['Runway', 'Editorial', 'Print'],
        about: 'Zoe is a runway specialist trained through the OSOIS Academy, with a sharp walk and strong presence for high-fashion bookings.'
      },
      {
        name: 'Natalie King', location: 'Dallas, TX', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'7"', bust: '34"', waist: '25"', hips: '36"' },
        disciplines: ['Commercial', 'Lifestyle', 'Print'],
        about: 'Natalie brings a warm, approachable energy to commercial and lifestyle campaigns, with a portfolio built around brand and product work.'
      },
      {
        name: 'Briana Cole', location: 'Atlanta, GA', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'6"', bust: '33"', waist: '24"', hips: '35"' },
        disciplines: ['Fitness', 'Commercial', 'Swim'],
        about: 'Briana is a fitness and commercial model with a disciplined, athletic build and a track record of reliable, high-energy shoots.'
      },
      {
        name: 'Sophia Reyes', location: 'Chicago, IL', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'9"', bust: '32"', waist: '23"', hips: '34"' },
        disciplines: ['Print', 'Editorial', 'Runway'],
        about: 'Sophia works primarily in print and editorial, with an eye for composition that makes her a favorite among OSOIS photographers.'
      },
      {
        name: 'Emma Wilson', location: 'Phoenix, AZ', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'8"', bust: '34"', waist: '25"', hips: '36"' },
        disciplines: ['Commercial', 'Lifestyle', 'Print'],
        about: 'Emma has a versatile commercial look and a professional, easygoing set presence that clients consistently ask to rebook.'
      },
      {
        name: 'Victoria Lee', location: 'Seattle, WA', tag: 'OSOIS Verified Model',
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=700&q=80',
        measurements: { height: '5\'9"', bust: '33"', waist: '24"', hips: '34"' },
        disciplines: ['Runway', 'Editorial', 'Commercial'],
        about: 'Victoria splits her work between runway and editorial, bringing a striking, high-fashion look to every booking.'
      }
    ];

    const nameEl = document.getElementById('profileName');
    const tagEl = document.getElementById('profileTag');
    const locEl = document.getElementById('profileLocation');
    const measEl = document.getElementById('profileMeasurements');
    const discEl = document.getElementById('profileDisciplines');
    const aboutEl = document.getElementById('profileAbout');
    const imgEl = document.getElementById('profileImage');
    const bookBtn = document.getElementById('bookBtn');

    function renderProfile(t) {
      nameEl.textContent = t.name;
      tagEl.textContent = t.tag;
      locEl.textContent = '📍 ' + t.location;
      measEl.innerHTML = `
        <div><span>${t.measurements.height}</span><label>Height</label></div>
        <div><span>${t.measurements.bust}</span><label>Bust</label></div>
        <div><span>${t.measurements.waist}</span><label>Waist</label></div>
        <div><span>${t.measurements.hips}</span><label>Hips</label></div>`;
      discEl.innerHTML = t.disciplines.map(d => `<span>${d}</span>`).join('');
      aboutEl.textContent = t.about;
      imgEl.src = t.image;
      imgEl.alt = t.name;
      bookBtn.textContent = 'Request Talent →';
      document.querySelectorAll('.talent-card').forEach(card => {
        card.classList.toggle('active', card.dataset.name === t.name);
      });
    }

    // Build "More Talent" strip
    TALENT.forEach((t) => {
      const card = document.createElement('div');
      card.className = 'talent-card' + (t.name === 'Ava Martin' ? ' active' : '');
      card.dataset.name = t.name;
      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}">
        <div class="tc-info"><h5>${t.name}</h5><span>${t.location}</span></div>`;
      card.addEventListener('click', () => {
        renderProfile(t);
        document.querySelector('.profile-viewer').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      talentTrack.appendChild(card);
    });

    // Category nav (visual only — swaps active state)
    document.querySelectorAll('#categoryNav .cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#categoryNav .cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Pose tabs (visual only)
    document.querySelectorAll('.pose-tabs .pose-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pose-tabs .pose-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // View-type icons (visual only)
    document.querySelectorAll('.view-icon').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.view-icon').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // "Apply Filters" is a visual demo — no live filtering logic wired up yet
    const applyBtn = document.querySelector('.filters-panel .btn-primary');
    const clearBtn = document.getElementById('clearFilters');
    if (applyBtn) {
      applyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        applyBtn.textContent = 'Filters Applied ✓';
        setTimeout(() => { applyBtn.textContent = 'Apply Filters'; }, 1500);
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.filters-panel select').forEach(s => s.selectedIndex = 0);
        document.querySelectorAll('.filters-panel input').forEach(i => i.value = '');
      });
    }
  }

  // ============================================
  // JOIN OSOIS — role selector (join.html)
  // ============================================
  const roleGrid = document.getElementById('roleGrid');
  if (roleGrid) {
    const categorySelect = document.getElementById('categorySelect');
    const selectedRoleLabel = document.getElementById('selectedRoleLabel');
    const roleCards = roleGrid.querySelectorAll('.role-card');

    roleCards.forEach(card => {
      card.addEventListener('click', () => {
        roleCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const role = card.dataset.role;
        if (categorySelect && role) categorySelect.value = role;
        if (selectedRoleLabel) {
          const label = card.querySelector('h4');
          selectedRoleLabel.textContent = label ? label.textContent : role;
        }
      });
    });

    // Keep the role cards in sync if someone changes the dropdown directly
    if (categorySelect) {
      categorySelect.addEventListener('change', () => {
        roleCards.forEach(c => {
          c.classList.toggle('active', c.dataset.role === categorySelect.value);
        });
        const activeCard = roleGrid.querySelector('.role-card.active');
        if (selectedRoleLabel && activeCard) {
          const label = activeCard.querySelector('h4');
          selectedRoleLabel.textContent = label ? label.textContent : categorySelect.value;
        }
      });
    }
  }
});
