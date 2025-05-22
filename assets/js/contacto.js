document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('contactForm');
  let responseMessage = document.getElementById('response');

  form.addEventListener('submit', async e => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a FormData object to gather the form data
    let formData = new FormData(form);

    try {
      // Send form data to the server using the fetch API
      let response = await fetch('../php/send_email.php', {
        method: 'POST',
        body: formData,
      });

      // Parse the response from the server (text or JSON)
      let result = await response.text(); // You can use .json() if your server returns JSON

      // Display the response message in the #response div
      responseMessage.innerHTML = `<p class='alert alert-info'>${result}</p>`;
    } catch (error) {
      // Handle any errors (e.g., network issues)
      responseMessage.innerHTML = `<p class='alert alert-danger'>An error occurred: ${error.message}</p>`;
    }
  });
});
