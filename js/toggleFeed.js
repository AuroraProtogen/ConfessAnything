function toggleFeed() {
    const feed = document.getElementById('publicFeed');
    const btn = document.getElementById('toggleFeedBtn');

    if (feed.style.display === 'none' || feed.style.display === '') {
      feed.style.display = 'block';
      btn.textContent = 'Close';
      btn.style.marginLeft = '300px';
    } else {
      feed.style.display = 'none';
      btn.textContent = 'Show Public Confessions';
      btn.style.marginLeft = '0';
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('publicFeed').style.display = 'none';
  });