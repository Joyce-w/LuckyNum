const lucky_form = $("#lucky-form")

/** processForm: get data from form and make AJAX call to our API. */

function processForm(evt) {
    evt.preventDefault()
    alert("hello")
    
    let name = $('#name').val()
    let email = $('#email').val()
    let year = $('#year').val()
    let color = $('#color').val()

    console.log(name, email, year, color)
}

/** handleResponse: deal with response from our lucky-num API. */
function handleResponse(resp) {
}


lucky_form.on("submit", processForm)


