// ============================================================
// Reading List — app.js  (feature/dark-mode branch)
// Commits 1 & 2: dark mode toggle + three books added
// ============================================================

// ── Your reading list ─────────────────────────────────────────
//
// Add your own books to this array as part of the lab!
// Each entry needs:
//   title    — the book title
//   author   — the author's name
//   status   — "to-read", "reading", or "done"
//   category — any label you like (Engineering, Design, Fiction, etc.)
//
// ─────────────────────────────────────────────────────────────

const books = [
  { id: 1, title: "The Pragmatic Programmer",      author: "David Thomas & Andrew Hunt", status: "done",    category: "Engineering"      },
  { id: 2, title: "Atomic Habits",                 author: "James Clear",                status: "reading", category: "Self-Development" },
  { id: 3, title: "The Design of Everyday Things", author: "Don Norman",                 status: "to-read", category: "Design"           },
  { id: 4, title: "Deep Work",                     author: "Cal Newport",                status: "to-read", category: "Self-Development" },
  { id: 5, title: "A Mind for Numbers",            author: "Barbara Oakley",             status: "done",    category: "Self-Development" },
  { id: 6, title: "Thinking, Fast and Slow",       author: "Daniel Kahneman",            status: "to-read", category: "Self-Development" },
  { id: 7, title: "A Philosophy of Software Design", author: "John Ousterhout",          status: "reading", category: "Engineering"      },
  { id: 8, title: "The Lean Startup",              author: "Eric Ries",                  status: "done",    category: "Business"         },
];

// ── State ─────────────────────────────────────────────────────

let currentFilter = 'all';

// ── Rendering ─────────────────────────────────────────────────

function renderBooks() {
  const list       = document.getElementById('book-list');
  const emptyState = document.getElementById('empty-state');
  const bookCount  = document.getElementById('book-count');

  const filtered = currentFilter === 'all'
    ? books
    : books.filter((b) => b.status === currentFilter);

  bookCount.textContent = `${books.length} book${books.length !== 1 ? 's' : ''}`;
  list.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  filtered.forEach((book) => {
    const li = document.createElement('li');
    li.className = 'book-card';
    li.innerHTML = `
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <span class="book-category">${book.category}</span>
      </div>
      <span class="book-status book-status--${book.status}">${formatStatus(book.status)}</span>
    `;
    list.appendChild(li);
  });
}

// ── Filter buttons ─────────────────────────────────────────────

document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderBooks();
  });
});

// ── Dark mode ─────────────────────────────────────────────────

const themeToggle = document.getElementById('theme-toggle');
const savedTheme  = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ── Helpers ───────────────────────────────────────────────────

function formatStatus(status) {
  const labels = { 'to-read': 'To Read', reading: 'Reading', done: 'Done' };
  return labels[status] || status;
}

// ── Init ──────────────────────────────────────────────────────

renderBooks();
