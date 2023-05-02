const contactInfoButtons = document.querySelectorAll(".contact-info-container");

contactInfoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    text = btn.children.item(1).innerHTML;
    copyToClipboard(text);
  });
});

function copyToClipboard(text) { 
  navigator.clipboard.writeText(text);
  alert(`'${text}' is copied to clipboard!`);
}
