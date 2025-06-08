function showToast(message, color = "#333") {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "bottom",
      position: "center",
      close: true,
      backgroundColor: color,
      stopOnFocus: true,
    }).showToast();
  }