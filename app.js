const toggle_btn = document.querySelector('#toggle_btn');

toggle_btn.addEventListener('click', function() {
  toggle_btn.classList.toggle('active');
  
  // Check if monthly or annually is selected
  const isAnnually = toggle_btn.classList.contains('active');

  if (isAnnually) {
    document.getElementById('price_basic').innerText = '$199.99';
    document.getElementById('price_pro').innerText = '$249.99';
    document.getElementById('price_master').innerText = '$399.99';
  } else {
    document.getElementById('price_basic').innerText = '$19.99';
    document.getElementById('price_pro').innerText = '$24.99';
    document.getElementById('price_master').innerText = '$39.99';
  }
});
