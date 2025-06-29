 // Register form logic
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('User registered successfully! (Local only)');
});

// Login form logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Simulate login check (basic demo)
  if (email && password) {
    if (email.includes('admin')) {
      window.location.href = 'admin.html';
    } else if (email.includes('doc')) {
      window.location.href = 'doctor.html';
    } else {
      window.location.href = 'user.html';
    }
  } else {
    alert('Please enter valid credentials');
  }
});
