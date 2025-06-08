let canSend = true;
const cooldown = 10000; // 10 seconds

function sendConfession() {
  const input = document.getElementById('confession');
  const confession = input.value.trim();
  const button = document.getElementById('sendBtn');

  if (!canSend) {
    showToast("Rate limit exceeded. Try again later.", "#aa0000");
    return;
  }

  if (!confession) {
    showToast("Missing confession", "#aa0000");
    return;
  }

  canSend = false;
  button.textContent = "Sending...";

  fetch('https://sweet-pond-868f.aurorap.workers.dev/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'confession=' + encodeURIComponent(confession) + '&public=' + isPublic
  })
  .then(response => {
    if (response.status === 429) {
      showToast("Too fast! Please wait.", "#aa0000");
    } else if (!response.ok) {
      showToast("Rate limit exceeded. Try again later." + response.status, "#aa0000");
    } else {
      input.value = '';
      showToast("Confession sent anonymously!", "#00aa55");
    }
  })
  .catch(err => {
    showToast("Network error: " + err.message, "#aa0000");
  })
  .finally(() => {
    setTimeout(() => {
      canSend = true;
      button.textContent = "Send";
    }, cooldown);
  });
}