const anyKeyP = document.getElementById('anyKeyP')
const keyCode = document.getElementById('keyCode')
const eventKey = document.getElementById('eventKey')
const eventLocation = document.getElementById('eventLocation')
const eventWhich = document.getElementById('eventWhich')
const eventCode = document.getElementById('eventCode')

//the above are VARIABLES that i have connected to the ID's of html p's

document.addEventListener('keypress', (event) => { //here i have targetted the event in teh parameter and selected the keypress event
    const header = document.getElementById('header')
    const wrapper = document.getElementById('wrapper')
    header.style.display = 'flex'
    keyCode.style.display = 'flex'
    wrapper.style.display = 'flex'
    anyKeyP.style.display = 'none'

    keyCode.textContent = `${event.keyCode}` //in text content i can change what is stated in the p tag by using temperol literals
    eventKey.textContent = `${event.key}`
    eventLocation.textContent = `${event.location}`
    eventWhich.textContent = `${event.which}`
    eventCode.textContent = `${event.code}`

    console.log(event)
})

