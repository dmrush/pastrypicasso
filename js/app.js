document.addEventListener('DOMContentLoaded', () => {
  let activeCategoryId = 'all';
  let searchQuery = '';

  const data = window.menuData || { restaurant: {}, categories: [], items: [] };

  // DOM Elements
  const resName = document.getElementById('res-name');
  const resTagline = document.getElementById('res-tagline');
  const resNotice = document.getElementById('res-notice');
  const resAddress = document.getElementById('res-address');
  const resHours = document.getElementById('res-hours');
  const footerResName = document.getElementById('footer-res-name');
  const btnCall = document.getElementById('btn-call');
  const btnWhatsapp = document.getElementById('btn-whatsapp');

  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  const categoryPillsNav = document.getElementById('category-pills');
  
  const currentCategoryTitle = document.getElementById('current-category-title');
  const itemCountBadge = document.getElementById('item-count-badge');
  const menuGrid = document.getElementById('menu-grid');
  const noResults = document.getElementById('no-results');

  // Initialize Header Metadata
  function initHeader() {
    const res = data.restaurant;
    if (resName && res.name) resName.textContent = res.name;
    if (resTagline && res.tagline) resTagline.textContent = res.tagline;
    if (resNotice && res.tableNotice) resNotice.querySelector('span').textContent = res.tableNotice;
    if (resAddress && res.address) resAddress.textContent = res.address;
    if (resHours && res.hours) resHours.textContent = res.hours;
    if (footerResName && res.name) footerResName.textContent = res.name;

    if (btnCall && res.phone) {
      btnCall.href = `tel:${res.phone.replace(/[^0-9+]/g, '')}`;
    }
    if (btnWhatsapp && res.whatsapp) {
      const waMsg = encodeURIComponent(`Hi ${res.name}! I'm looking at your digital menu and would like to order.`);
      btnWhatsapp.href = `https://wa.me/${res.whatsapp}?text=${waMsg}`;
    }
  }

  // Render Category Pills
  function renderCategories() {
    if (!categoryPillsNav) return;
    categoryPillsNav.innerHTML = '';

    data.categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-pill ${cat.id === activeCategoryId ? 'active' : ''}`;
      btn.dataset.id = cat.id;
      btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.label}</span>`;
      
      btn.addEventListener('click', () => {
        activeCategoryId = cat.id;
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');

        // Update category title text
        if (currentCategoryTitle) {
          currentCategoryTitle.textContent = cat.id === 'all' ? 'All Items' : cat.label;
        }

        renderMenuGrid();
      });

      categoryPillsNav.appendChild(btn);
    });
  }

  // Get CSS Badge Class
  function getBadgeClass(badgeText) {
    const text = badgeText.toLowerCase();
    if (text.includes('popular')) return 'badge-popular';
    if (text.includes('spicy')) return 'badge-spicy';
    if (text.includes('vegan')) return 'badge-vegan';
    if (text.includes('chef')) return 'badge-chef';
    return 'badge-popular';
  }

  // Render Menu Grid
  function renderMenuGrid() {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    const query = searchQuery.trim().toLowerCase();

    const filteredItems = data.items.filter(item => {
      const matchesCategory = activeCategoryId === 'all' || item.categoryId === activeCategoryId;
      const matchesSearch = !query || 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Update count badge
    if (itemCountBadge) {
      itemCountBadge.textContent = `${filteredItems.length} Item${filteredItems.length === 1 ? '' : 's'}`;
    }

    if (filteredItems.length === 0) {
      if (noResults) noResults.style.display = 'block';
      return;
    }

    if (noResults) noResults.style.display = 'none';

    filteredItems.forEach(item => {
      const card = document.createElement('article');
      card.className = 'menu-card';

      const badgesHtml = (item.badges || []).map(b => 
        `<span class="badge ${getBadgeClass(b)}">${b}</span>`
      ).join('');

      card.innerHTML = `
        <div class="card-image-wrap">
          <img class="card-image" src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="card-badges">${badgesHtml}</div>
          <div class="card-price-tag">${item.price}</div>
        </div>
        <div class="card-content">
          <h3 class="card-name">${item.name}</h3>
          <p class="card-desc">${item.description}</p>
        </div>
      `;

      menuGrid.appendChild(card);
    });
  }

  // Search Input Handler
  function setupSearch() {
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
      }
      renderMenuGrid();
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
        renderMenuGrid();
      });
    }
  }

  // Initialize
  initHeader();
  renderCategories();
  renderMenuGrid();
  setupSearch();
});
