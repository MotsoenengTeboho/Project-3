var form = document.getElementById("my-form"); //get my form and submit it

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status"); //get the status of my form
      var data = new FormData(event.target); //get the data of my form (Information of the form)
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        //add my html class to show the user the status message
        status.classList.add('success')
        //if the submission is successful then the user will receive this status message
        status.innerHTML = "Thanks for your submission!";
        form.reset() //reset the form
      }).catch(error => {
        //add my html class to show the user the status message
        status.classList.add('error')
        //catch the error and show the user an error message if the submission was unsuccessful
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
