document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('Vidya-container');

    // Fetch the JSON data
    fetch('detail.json')
        .then(response => response.json())
        .then(data => {
            const deities = data.deities;

            // Create cards for each deity
            deities.forEach(deity => {
                const card = document.createElement('div');
                card.classList.add('Vidya-card');

                card.innerHTML = `
                    <img src="${deity.image}" alt="${deity.title}">
                    <h2>${deity.title}</h2>
                `;

                card.addEventListener('click', () => {
                    localStorage.setItem('selectedDeity', JSON.stringify(deity));
                    window.location.href = 'cover.html'; // Redirect to the deity details page
                });

                container.appendChild(card);
            });

            // Set href attributes for dropdown items
            deities.forEach(deity => {
                const elementId = `item${deity.title.replace(/ /g, '')}`;
                const linkElement = document.getElementById(elementId);
                if (linkElement) {
                    linkElement.href = '#'; // Placeholder href
                    linkElement.addEventListener('click', () => {
                        localStorage.setItem('selectedDeity', JSON.stringify(deity));
                        window.location.href = 'cover.html'; // Redirect to the deity details page
                    });
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});