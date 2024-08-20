document.addEventListener('DOMContentLoaded', () => {
    const deity = JSON.parse(localStorage.getItem('selectedDeity'));

    if (deity) {
        document.getElementById('deityTitle').textContent = deity.title;
        document.getElementById('deityImage').src = deity.image;
        document.getElementById('deityImage').alt = deity.title;
        document.getElementById('deityOrigin').textContent = deity.origin;
        document.getElementById('deityForms').textContent = deity.forms;
        document.getElementById('deityDescription').textContent = deity.description;
    } else {
        alert('No deity information found.');
    }
});

function closeModal() {
    window.history.back();
}


