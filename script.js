document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    fetch("http://172.31.196.71:8080", {
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
