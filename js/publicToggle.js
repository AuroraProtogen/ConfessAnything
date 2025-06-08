let isPublic = false;

function togglePublic() {
  isPublic = !isPublic;
  const btn = document.getElementById('publicToggleBtn');
  btn.textContent = isPublic ? 'X' : '';
}