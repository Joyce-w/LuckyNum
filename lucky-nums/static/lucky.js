const lucky_form = $("#lucky-form")
const results = $('#lucky-results')

/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault()
    
    let name = $('#name').val()
    let email = $('#email').val()
    let year = $('#year').val()
    let color = $('#color').val()
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    let res = await axios.post(`/api/get-lucky-num`, {
            "name": name,
            "email": email,
            "year": year,
            "color": color
    }, config)
    
    if (check_year(year) || check_color(color)) {
        $('#fieldname-err').append(`<p>Please enter a year between 1900 and 2000</p>`)
        $('#fieldname-err').append(`<p>Please choose only red, green, orange, or blue for your favorite color!</p>`)
    }
    else {
        handleResponse(res)        
    }

    //clear form/errors 
    $('#name').val('')
    $('#email').val('')
    $('#year').val('')
    $('#color').val('')

    
}

/** handleResponse: deal with response from our lucky-num API. */
function handleResponse(res) {
    //get data from html that flask sent->html

    let num_fact = (res.data.num.fact)
    let num = (res.data.num.num)
    let year_fact = (res.data.year.fact)
    let year = (res.data.year.year)

    results.html(`<p>Your lucky number is ${num}:<br>
    ${num_fact}.</p>
    <p>Your birth year ${year} fact is:<br>
    ${year_fact}.</p>`)
    
    $('#fieldname-err').children().remove()
}

lucky_form.on("submit", processForm)



function check_year(year) {
    // check if year is within range (1900,2000)
    if (year <= 1900 || year >= 2000) {
        return true
    }
}

function check_color(color) {
    // check that fav color is valid 
    const color_choices = ["red", "green", "orange", "blue"]
    let lowercase = color.toLowerCase()

    if (!color_choices.includes(lowercase)) {
        return true
    }
}