// ===== HEADER SCROLL =====
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.borderBottomColor = 'rgba(255,255,255,0.12)';
        } else {
            header.style.borderBottomColor = 'rgba(255,255,255,0.08)';
        }
    });
}
