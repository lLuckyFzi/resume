function sendMessageWhatsapp(phoneNumber: string, message: string) {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
  const encodedMessage = message ? encodeURIComponent(message) : "";
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}${
    encodedMessage ? `?text=${encodedMessage}` : ""
  }`;

  return whatsappUrl;
}

export default sendMessageWhatsapp;
