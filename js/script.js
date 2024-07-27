// Scroll to contact section
function scrollToContact() {
    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
}

// Mengirim WA
function send() {
    var name = document.getElementById("name").value;
    var msg = document.getElementById("message").value;

    var whatsappUrl =
         "https://wa.me/628170270073" +
         "?text=Halo WUPM, Saya " +
         name +
         ", " +
         msg;

    window.open(whatsappUrl);
}