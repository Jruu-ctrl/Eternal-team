document.getElementById("review").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const review = document.getElementById("message").value;

    const response = await fetch('http://localhost:5000/submit-form', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, review })
    });

    if (response.ok) {
      alert("Review submitted!");
    } else {
      alert("Failed to submit review");
    }
  });

