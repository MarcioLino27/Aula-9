document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.fontWeight = 'bold'; 
    });

    item.addEventListener('mouseout', () => {
        item.style.fontWeight = 'normal'; 
    });
});