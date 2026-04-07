console.log("Legacy app.js disabled. React renders UI.");
// Load external CI data
const TAXONOMY = window.TAXONOMY_DATA || {};
console.log("✅ CIs loaded:", Object.keys(TAXONOMY));

// DOM
const ciSelect = document.getElementById("ciSelect");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
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

let activeCI = "";
let activeRows = [];
let filteredRows = [];

document.addEventListener("DOMContentLoaded", () => {
  populateDropdown();

  ciSelect.addEventListener("change", onCIChange);
  searchInput.addEventListener("input", render);
  clearBtn.addEventListener("click", resetAll);

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
  render();
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
  s_cat.textContent = r.category;
  s_sub.textContent = r.subCategory;
  s_role.textContent = r.roleComponent;
  s_close.textContent = r.closeCode;
  s_subclose.textContent = r.subCloseCode;

  pathText.textContent =
    `${r.ci} > ${r.category} > ${r.subCategory} > ${r.roleComponent} > ${r.closeCode} > ${r.subCloseCode}`;

  copyPathBtn.disabled = false;
  copyCodesBtn.disabled = false;
}

function resetAll() {
  ciSelect.value = "";
  resetUI();
}

function resetUI() {
  searchInput.value = "";
  searchInput.disabled = true;
  clearBtn.disabled = true;
  tbody.innerHTML = "";
  tableTitle.textContent = "No CI selected";
  tableMeta.textContent = "—";
  pathText.textContent = "—";
  copyPathBtn.disabled = true;
  copyCodesBtn.disabled = true;
}

function copyText(t) {
  navigator.clipboard.writeText(t);
}