function fetchPublicConfessions() {
    const feed = document.getElementById("feedContent");
    fetch('https://sweet-pond-868f.aurorap.workers.dev/?GetPublicConfessions=true')
      .then(res => res.json())
      .then(confessions => {
        feed.innerHTML = '';
        confessions.forEach(c => {
          const div = document.createElement("div");
          div.className = "confession";
          div.textContent = c;
          feed.appendChild(div);
        });
        if (confessions.length === 0) {
          feed.innerHTML = "<i>No public confessions yet.</i>";
        }
      })
      .catch(() => {
        feed.innerHTML = "<i>Failed to load public confessions.</i>";
      });
  }

  // Load on page start
  fetchPublicConfessions();