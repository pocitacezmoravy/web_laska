document.getElementById('dateForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
        date: document.getElementById('date').value,
        activity: document.getElementById('activity').value,
        note: document.getElementById('note').value
    };

    // Nahraďte URL vaším odkazem z Formspree
    const response = await fetch('https://formspree.io/f/VASI_FORMSPREE_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        document.getElementById('dateForm').reset();
        document.getElementById('confirmationMessage').classList.remove('hidden');
    }
});