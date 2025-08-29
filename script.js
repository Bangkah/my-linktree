// Entrance animation
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    links.forEach((link, i) => {
        link.style.animationDelay = `${i * 0.1}s`;
        link.classList.add('fadeUp');
    });
});

// Ripple effect
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', e => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = link.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        link.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});