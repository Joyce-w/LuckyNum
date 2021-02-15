const lucky_form = $("#lucky-form")
const results = $('#lucky-results')
const base_url = 'http://numbersapi.com/'

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
    
    handleResponse(res)

}

/** handleResponse: deal with response from our lucky-num API. */
function handleResponse(res) {
    //get data from html that flask sent->html
    console.log(res.data)
    let num_fact = (res.data.num.fact)
    let num = (res.data.num.num)
    let year_fact = (res.data.year.fact)
    let year = (res.data.year.year)

    results.html(`<p>Your lucky number is ${num}:<br>
    ${num_fact}.</p>
    <p>Your birth year ${year} fact is:<br>
    ${year_fact}.</p>`)
}

lucky_form.on("submit", processForm)


