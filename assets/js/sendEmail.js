function sendMail(contactForm) {
    emailjs.send("service_5ox3c7p","Shadman", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            $("#success-text").html("<p>Thank you for logging a Project Request. An email has been sent and a response will be issued shortly.</p>"),
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        })
    return false
}