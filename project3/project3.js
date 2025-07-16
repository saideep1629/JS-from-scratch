const clock = document.querySelector('#clock');
// console.log(clock);


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
