console.log("Legacy app.js disabled. React renders UI.");
// Load external CI data
const TAXONOMY = window.TAXONOMY_DATA || {};
console.log("✅ CIs loaded:", Object.keys(TAXONOMY));

// DOM — controls
const ciSelect = document.getElementById("ciSelect");
const searchInput = document.getElementById("searchInput");
const ciSearchInput = document.getElementById("ciSearchInput");
const ciSearchResults = document.getElementById("ciSearchResults");
const ciDropdownButton = document.getElementById("ciDropdownButton");
const ciCombobox = document.getElementById("ciCombobox");
const clearBtn = document.getElementById("clearBtn");
const filterBtn = document.getElementById("filterBtn");
const tbody = document.getElementById("tbody");
const tableTitle = document.getElementById("tableTitle");
const tableMeta = document.getElementById("tableMeta");

// DOM — filter dropdowns
const s_cat = document.getElementById("s_cat");
const s_sub = document.getElementById("s_sub");
const s_role = document.getElementById("s_role");

// DOM — sidebar path panel
const pathText = document.getElementById("pathText");

// DOM — theme
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const themeText = document.querySelector(".theme-text");
const topRightMoon = document.querySelector(".top-right-image__moon");
const topRightSun = document.querySelector(".top-right-image__sun");

// DOM — selected taxonomy popup
const taxModalOverlay = document.getElementById("taxModalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const m_cat = document.getElementById("m_cat");
const m_sub = document.getElementById("m_sub");
const m_role = document.getElementById("m_role");
const m_close = document.getElementById("m_close");
const m_subclose = document.getElementById("m_subclose");
const m_kb = document.getElementById("m_kb");
const modalPathText = document.getElementById("modalPathText");

let activeCI = "";
let activeRows = [];
let filteredRows = [];
let selectedTr = null;

// Theme management
const getStoredTheme = () => localStorage.getItem('theme') || 'dark';
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
  themeText.textContent = theme === 'light' ? '' : '';
  if (topRightMoon && topRightSun) {
    if (theme === 'light') {
      topRightMoon.style.opacity = '0';
      topRightSun.style.opacity = '1';
    } else {
      topRightMoon.style.opacity = '1';
      topRightSun.style.opacity = '0';
    }
  }
  setStoredTheme(theme);
};

document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme
  const currentTheme = getStoredTheme();
  setTheme(currentTheme);

  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  populateDropdown();

  ciSelect.addEventListener("change", onCIChange);
  ciSearchInput.addEventListener("input", renderCISearchResults);
  ciSearchInput.addEventListener("focus", renderCISearchResults);
  ciDropdownButton.addEventListener("click", () => {
    if (ciSearchResults.hidden) {
      ciSearchInput.focus();
      renderCISearchResults();
    } else {
      hideCISearchResults();
    }
  });
  ciSearchInput.addEventListener("keydown", handleCIKeyboard);
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#ciCombobox")) hideCISearchResults();
  });
  searchInput.addEventListener("input", render);
  s_cat.addEventListener("change", enableFilterBtn);
  s_sub.addEventListener("change", enableFilterBtn);
  s_role.addEventListener("change", enableFilterBtn);
  filterBtn.addEventListener("click", applyFilter);
  clearBtn.addEventListener("click", resetAll);

  // Popup modal wiring
  modalCloseBtn.addEventListener("click", closeModal);
  taxModalOverlay.addEventListener("click", (e) => {
    if (e.target === taxModalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !taxModalOverlay.hidden) closeModal();
  });

  resetUI();
});


function renderCISearchResults() {
  const query = ciSearchInput.value.trim().toLowerCase();
  const matches = Object.keys(TAXONOMY)
    .filter(ci => !query || ci.toLowerCase().includes(query))
    .sort((a, b) => a.localeCompare(b));

  ciSearchResults.innerHTML = "";
  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "ci-search-empty";
    empty.textContent = "No CI found";
    ciSearchResults.appendChild(empty);
  } else {
    matches.forEach(ci => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ci-search-option";
      button.textContent = ci;
      button.addEventListener("click", () => selectCIFromSearch(ci));
      ciSearchResults.appendChild(button);
    });
  }
  ciSearchResults.hidden = false;
  ciSearchInput.setAttribute("aria-expanded", "true");
}

function selectCIFromSearch(ci) {
  ciSelect.value = ci;
  ciSearchInput.value = ci;
  hideCISearchResults();
  onCIChange();
}

function hideCISearchResults() {
  ciSearchResults.hidden = true;
  ciSearchInput.setAttribute("aria-expanded", "false");
}

function handleCIKeyboard(e) {
  const options = Array.from(ciSearchResults.querySelectorAll(".ci-search-option"));
  const current = document.activeElement;
  const index = options.indexOf(current);

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (ciSearchResults.hidden) renderCISearchResults();
    (options[index + 1] || options[0])?.focus();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    (options[index - 1] || options[options.length - 1])?.focus();
  } else if (e.key === "Enter" && !ciSearchResults.hidden) {
    const exact = Object.keys(TAXONOMY).find(ci => ci.toLowerCase() === ciSearchInput.value.trim().toLowerCase());
    if (exact) selectCIFromSearch(exact);
  } else if (e.key === "Escape") {
    hideCISearchResults();
  }
}

function populateDropdown() {
  Object.keys(TAXONOMY).forEach(ci => {
    const opt = document.createElement("option");
    opt.value = ci;
    opt.textContent = ci;
    ciSelect.appendChild(opt);
  });
}

function onCIChange() {
  activeCI = ciSelect.value;
  ciSearchInput.value = activeCI;
  activeRows = TAXONOMY[activeCI];
  searchInput.disabled = false;
  clearBtn.disabled = false;
  populateDropdownOptions();
  closeModal();
  render();
}

function populateDropdownOptions() {
  // Get unique values from activeRows
  const categories = [...new Set(activeRows.map(r => r.category))].sort();
  const subCategories = [...new Set(activeRows.map(r => r.subCategory))].sort();
  const roleComponents = [...new Set(activeRows.map(r => r.roleComponent))].sort();

  // Clear existing options (except first empty option)
  s_cat.innerHTML = '<option value="">Any category</option>';
  s_sub.innerHTML = '<option value="">Any sub category</option>';
  s_role.innerHTML = '<option value="">Any role component</option>';

  // Populate Category dropdown
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    s_cat.appendChild(opt);
  });

  // Populate Sub Category dropdown
  subCategories.forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub;
    s_sub.appendChild(opt);
  });

  // Populate Role Component dropdown
  roleComponents.forEach(role => {
    const opt = document.createElement("option");
    opt.value = role;
    opt.textContent = role;
    s_role.appendChild(opt);
  });
}

function renderRows(rows) {
  tableTitle.textContent = `CI: ${activeCI}`;
  tableMeta.textContent = `${rows.length} row(s) shown`;
  tbody.innerHTML = "";
  selectedTr = null;

  rows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.onclick = () => selectRow(i, tr);
    tr.innerHTML = `
      <td>${r.ci}</td>
      <td>${r.category}</td>
      <td>${r.subCategory}</td>
      <td>${r.roleComponent}</td>
      <td>${r.closeCode}</td>
      <td>${r.subCloseCode}</td>
      <td>${r.kb || "—"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function render() {
  const q = searchInput.value.toLowerCase();
  filteredRows = activeRows.filter(r =>
    Object.values(r).join(" ").toLowerCase().includes(q)
  );
  renderRows(filteredRows);
}

function buildPath(r) {
  return `${r.category} >\n${r.subCategory} >\n${r.ci} >\n${r.roleComponent} >\n${r.subCloseCode}`;
}

function selectRow(i, trEl) {
  const r = filteredRows[i];

  if (selectedTr) selectedTr.classList.remove("selected-row");
  if (trEl) {
    trEl.classList.add("selected-row");
    selectedTr = trEl;
  }

  const path = buildPath(r);
  pathText.textContent = path;

  // Populate popup
  modalTitle.textContent = r.ci;
  m_cat.textContent = r.category;
  m_sub.textContent = r.subCategory;
  m_role.textContent = r.roleComponent;
  m_close.textContent = r.closeCode;
  m_subclose.textContent = r.subCloseCode;
  m_kb.textContent = r.kb || "—";
  modalPathText.textContent = path;

  openModal();
}

function openModal() {
  taxModalOverlay.hidden = false;
  requestAnimationFrame(() => taxModalOverlay.classList.add("open"));
}

function closeModal() {
  taxModalOverlay.classList.remove("open");
  setTimeout(() => { taxModalOverlay.hidden = true; }, 200);
}

function resetAll() {
  if (!activeCI) {
    resetUI();
    return;
  }

  closeModal();
  pathText.textContent = "—";
  searchInput.value = "";
  s_cat.value = "";
  s_sub.value = "";
  s_role.value = "";
  filterBtn.disabled = true;
  render();
}

function resetUI() {
  searchInput.value = "";
  searchInput.disabled = true;
  clearBtn.disabled = true;
  filterBtn.disabled = true;
  tbody.innerHTML = "";
  tableTitle.textContent = "No CI selected";
  tableMeta.textContent = "—";
  pathText.textContent = "—";
  closeModal();

  // Clear dropdowns
  s_cat.innerHTML = '<option value="">Any category</option>';
  s_sub.innerHTML = '<option value="">Any sub category</option>';
  s_role.innerHTML = '<option value="">Any role component</option>';
}

function enableFilterBtn() {
  // Enable filter button if any dropdown has a value
  const hasFilter = s_cat.value || s_sub.value || s_role.value;
  filterBtn.disabled = !hasFilter;
}

function applyFilter() {
  const q = searchInput.value.toLowerCase();
  const selectedCat = s_cat.value;
  const selectedSub = s_sub.value;
  const selectedRole = s_role.value;

  filteredRows = activeRows.filter(r => {
    const matchesSearch = Object.values(r).join(" ").toLowerCase().includes(q);
    const matchesCat = !selectedCat || r.category === selectedCat;
    const matchesSub = !selectedSub || r.subCategory === selectedSub;
    const matchesRole = !selectedRole || r.roleComponent === selectedRole;

    return matchesSearch && matchesCat && matchesSub && matchesRole;
  });

  renderRows(filteredRows);
}

function copyText(t) {
  navigator.clipboard.writeText(t);
}