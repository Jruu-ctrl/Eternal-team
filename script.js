document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    fetch("https://bf9e896f-5f7a-4ada-a72b-a9ff2585bb28-00-k28lga9q4vqa.picard.replit.dev/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_name: name,
            message: review
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Review submitted successfully!');
        document.getElementById('reviewForm').reset();
    })
    .catch(error => {
        alert('Error submitting review.');
    });
});
