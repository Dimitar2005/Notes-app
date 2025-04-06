// Функция за записване на бележката
function saveNote() {
  const title = document.getElementById('note-title').value;
  const content = document.getElementById('note-content').value;

  // Записване на бележката в localStorage
  localStorage.setItem('note-title', title);
  localStorage.setItem('note-content', content);

  alert('Бележката беше записана!');
}

// Функция за смяна на тема
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme'); // Превключване на клас за тъмната тема
}

// Събитие за записване на бележка
document.getElementById('save-btn').addEventListener('click', saveNote);

// Събитие за смяна на тема
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

// Зареждане на запазените данни от localStorage при отваряне на страницата
window.onload = function() {
  const title = localStorage.getItem('note-title');
  const content = localStorage.getItem('note-content');

  if (title && content) {
    document.getElementById('note-title').value = title;
    document.getElementById('note-content').value = content;
  }
};


// Регистрация на Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
  });
}
