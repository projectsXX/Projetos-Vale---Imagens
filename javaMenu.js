function toggleInfo(element) {
    const card = element.closest('.card');
    const infoBox = card.querySelector('.info-box');

    infoBox.classList.toggle('visible');
    element.textContent = infoBox.classList.contains('visible') ? '−' : '+';
}