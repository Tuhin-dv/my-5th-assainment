

const quantityBtns = document.querySelectorAll('.complete-btn');
for (const btn of quantityBtns) {
    btn.addEventListener('click', function (event) {

        event.target.classList.add('button-disable')
        const assaignedNumber = document.getElementById('Assigned-number')
        const currentNumber = parseInt(assaignedNumber.innerText)
        const newValue = Math.max(0, currentNumber - 1);
        assaignedNumber.innerText = '0' + newValue;


        const navNumber = document.getElementById('nav-number')
        const navValue = parseInt(navNumber.innerText) + 1
        navNumber.innerText = navValue;
        btn.disabled = true;

        

        const messageContainer = document.getElementById('message-container')
        const newElement = document.createElement('p')
        newElement.classList.add('notification')
        newElement.innerText = 'You have Complete The Task Add Dark Mode at 12:48:15 PM';

        messageContainer.appendChild(newElement)
        alert('Board update Succsessfully')

        const a = 0;
        const value = document.getElementById('Assigned-number')
        const convartedValue = parseInt(value.innerText)
        if (convartedValue === a) {
            alert('congrates!! you have complete all the current task')
        }

    })


}
document.getElementById('clear-button').addEventListener('click', function () {
    const notifications = document.querySelectorAll('.notification')

    for (const msg of notifications) {
        msg.remove();
    }


})

document.getElementById('other-page').addEventListener('click', function () {
    window.location.href = "qna.html"
})


document.getElementById('clr-change-btn').addEventListener('click', function () {

    const numberOne = Math.floor(Math.random() * 255)
    const numbertwo = Math.floor(Math.random() * 255)
    const numberthree = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${numberOne}, ${numbertwo}, ${numberthree})`


})


let time = new Date().toISOString().split('T')[0];
document.getElementById('new-date').innerText = time
