function sendMessage() {
    const urlToWhatsapp = `https://wa.me/6281385152460?text=Nama saya, ${nama.value}, ${pesan.value}`;
    window.open(urlToWhatsapp, "_blank");
  }
  