function saveUserToLocalStorage(user) {
  const now = new Date();
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('loginTime', now.getTime());
}

function checkLoginExpiration() {
  const loginTime = localStorage.getItem('loginTime');
  
  if (loginTime) {
      const now = new Date().getTime();
      const oneWeek = 4 * 24 * 60 * 60 * 1000;

      if (now - loginTime > oneWeek) {
          localStorage.removeItem('user');
          localStorage.removeItem('loginTime');
          window.location.reload();
      }
  }
}

window.onload = checkLoginExpiration;