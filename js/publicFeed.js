function loadPublicFeed() {
    fetch('https://sweet-pond-868f.aurorap.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'GetPublicConfessions=true'
    })
    .then(res => res.text())
    .then(text => {
      const feed = document.getElementById('feedContent');
      const confessions = text.split('\n').filter(x => x.trim() !== '');
      feed.innerHTML = confessions.map(c => `<p>${c}</p>`).join('');
    })
    .catch(err => {
      const feed = document.getElementById('feedContent');
      feed.innerHTML = '<p>Failed to load public confessions.</p>';
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadPublicFeed);
  