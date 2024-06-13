function sendWhatsAppMessage() {
  var phoneNumber = "00963993282733";
  var message = "السلام ابي اسأل";
  var url =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
