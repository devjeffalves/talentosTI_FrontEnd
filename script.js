let light = document.getElementById("botao-alterar-tema");
let dark = document.getElementById("botao-alterar-tema-dark");
let head = document.querySelector('#head')
let body = document.querySelector('body')
let block = document.querySelector('#block')
let table = document.querySelector('table')
// let p = document.querySelectorAll('p')
// let p = document.querySelectorAll('p')

dark.addEventListener("click", () => {
    
    body.classList.toggle('dark');
    head.classList.toggle('dark');
    block.classList.toggle('dark');
    table.classList.toggle('dark');

    // p.forEach((element) => {
    //     element.classList.toggle('dark')
    // });
})




