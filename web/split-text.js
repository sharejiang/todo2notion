function splitText(element) {
  const text = element.dataset.text || element.textContent;
  element.textContent = '';
  element.classList.add('split-text');

  const words = text.split(' ');
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'split-text__word';

    [...word].forEach((char, charIndex) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'split-text__char';
      charSpan.textContent = char;
      const delay = (wordIndex * 70 + charIndex * 24) / 1000;
      charSpan.style.animationDelay = `${delay}s`;
      wordSpan.appendChild(charSpan);
    });

    element.appendChild(wordSpan);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    splitText(heroTitle);
  }
});
