document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('introduction').innerText = introduction;
        })
        .catch(error => {
            console.error('Hiba a felhasználói adatok betöltésekor:', error);
            document.getElementById('introduction').innerText = 'Hiba történt a bemutatkozás betöltésekor.';
        });

   
    document.getElementById('contact-toggle').addEventListener('click', (event) => {
        event.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection.style.display === 'none') {
            contactSection.style.display = 'block';
        } else {
            contactSection.style.display = 'none';
        }
    });
});