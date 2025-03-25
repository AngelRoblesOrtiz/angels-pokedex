const copyButton = document.getElementById('copy-btn');
const textToCopy = document.getElementById('text-to-copy');

copyButton.addEventListener('click', () => {
  const trimmedText = textToCopy.textContent.trim();
  navigator.clipboard.writeText(trimmedText)
  alert("Copied 'git clone https://github.com/AngelRoblesOrtiz/angels-pokedex.git'")
});
