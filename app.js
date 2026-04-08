console.log("Legacy app.js disabled. React renders UI.");
// Load external CI data
const TAXONOMY = window.TAXONOMY_DATA || {};
console.log("✅ CIs loaded:", Object.keys(TAXONOMY));

// DOM
const ciSelect = document.getElementById("ciSelect");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const filterBtn = document.getElementById("filterBtn");
const clearTaxBtn = document.getElementById("clearTaxBtn");
const tbody = document.getElementById("tbody");
const tableTitle = document.getElementById("tableTitle");
const tableMeta = document.getElementById("tableMeta");

// Selected fields
const s_ci = document.getElementById("s_ci");
const s_cat = document.getElementById("s_cat");
const s_sub = document.getElementById("s_sub");
const s_role = document.getElementById("s_role");
const s_close = document.getElementById("s_close");
const s_subclose = document.getElementById("s_subclose");
const pathText = document.getElementById("pathText");
const copyPathBtn = document.getElementById("copyPathBtn");
const copyCodesBtn = document.getElementById("copyCodesBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const themeText = document.querySelector(".theme-text");

let activeCI = "";
let activeRows = [];
let filteredRows = [];

// Theme management
const getStoredTheme = () => localStorage.getItem('theme') || 'dark';
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
  themeText.textContent = theme === 'light' ? '' : '';
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
  searchInput.addEventListener("input", render);
  s_cat.addEventListener("change", enableFilterBtn);
  s_sub.addEventListener("change", enableFilterBtn);
  s_role.addEventListener("change", enableFilterBtn);
  filterBtn.addEventListener("click", applyFilter);
  clearBtn.addEventListener("click", resetAll);
  clearTaxBtn.addEventListener("click", clearSelection);

  copyPathBtn.onclick = () => copyText(pathText.textContent);
  copyCodesBtn.onclick = () =>
    copyText(`Close Code: ${s_close.textContent}\nSub CloseCode: ${s_subclose.textContent}`);

  resetUI();
});

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
  activeRows = TAXONOMY[activeCI];
  searchInput.disabled = false;
  clearBtn.disabled = false;
  populateDropdownOptions();
  render();
}

function populateDropdownOptions() {
  // Get unique values from activeRows
  const categories = [...new Set(activeRows.map(r => r.category))].sort();
  const subCategories = [...new Set(activeRows.map(r => r.subCategory))].sort();
  const roleComponents = [...new Set(activeRows.map(r => r.roleComponent))].sort();

  // Clear existing options (except first empty option)
  s_cat.innerHTML = '<option value="">—</option>';
  s_sub.innerHTML = '<option value="">—</option>';
  s_role.innerHTML = '<option value="">—</option>';

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

function render() {
  const q = searchInput.value.toLowerCase();
  filteredRows = activeRows.filter(r =>
    Object.values(r).join(" ").toLowerCase().includes(q)
  );

  tableTitle.textContent = `CI: ${activeCI}`;
  tableMeta.textContent = `${filteredRows.length} row(s) shown`;
  tbody.innerHTML = "";

  filteredRows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.onclick = () => selectRow(i);
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

function selectRow(i) {
  const r = filteredRows[i];
  s_ci.textContent = r.ci;
  
  // Set selected dropdown values
  s_cat.value = r.category;
  s_sub.value = r.subCategory;
  s_role.value = r.roleComponent;
  
  s_close.textContent = r.closeCode;
  s_subclose.textContent = r.subCloseCode;

  pathText.textContent =
    `${r.ci} > ${r.category} > ${r.subCategory} > ${r.roleComponent} > ${r.closeCode} > ${r.subCloseCode}`;

  copyPathBtn.disabled = false;
  copyCodesBtn.disabled = false;
  clearTaxBtn.disabled = false;
}

function resetSelectedTaxonomy() {
  s_ci.textContent = "—";
  s_cat.value = "";
  s_sub.value = "";
  s_role.value = "";
  s_close.textContent = "—";
  s_subclose.textContent = "—";
  pathText.textContent = "—";
  copyPathBtn.disabled = true;
  copyCodesBtn.disabled = true;
  clearTaxBtn.disabled = true;
}

function clearSelection() {
  resetSelectedTaxonomy();
  filterBtn.disabled = true;
  searchInput.value = "";
  render();
}

function resetAll() {
  if (!activeCI) {
    resetUI();
    return;
  }

  resetSelectedTaxonomy();
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
  s_ci.textContent = "—";
  copyPathBtn.disabled = true;
  copyCodesBtn.disabled = true;
  clearTaxBtn.disabled = true;
  
  // Clear dropdowns
  s_cat.value = "";
  s_sub.value = "";
  s_role.value = "";
  s_close.textContent = "—";
  s_subclose.textContent = "—";
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
    // Apply search filter
    const matchesSearch = Object.values(r).join(" ").toLowerCase().includes(q);
    
    // Apply taxonomy filters
    const matchesCat = !selectedCat || r.category === selectedCat;
    const matchesSub = !selectedSub || r.subCategory === selectedSub;
    const matchesRole = !selectedRole || r.roleComponent === selectedRole;

    return matchesSearch && matchesCat && matchesSub && matchesRole;
  });

  tableTitle.textContent = `CI: ${activeCI}`;
  tableMeta.textContent = `${filteredRows.length} row(s) shown`;
  tbody.innerHTML = "";

  filteredRows.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.onclick = () => selectRow(i);
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

function copyText(t) {
  navigator.clipboard.writeText(t);
}