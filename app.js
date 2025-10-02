document.getElementById('showTime').addEventListener('click', () => {
    const now = new Date();
    document.getElementById('timeDisplay').textContent = now.toLocaleTimeString('ru-RU');
});