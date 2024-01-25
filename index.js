
let name=document.querySelector('.name')
name.textContent="coded by <> oluwadamilare </>"

let jokesDiv = document.querySelector(".jokesDiv");
let generate = document.querySelector(".generate");
let jokes = [
  "loremmmmmmmmmm",
  "loremmmmmmmmmm",

  "loremmmmmmmmmm",
  "loremmmmmmmmmm",
  "loremmmmmmmmmm",
  "loremmmmmmmmmm",
  "loremmmmmmmmmm",
  "loremmmmmmmmmm",
  "loremmmmmmmmmm",

];



generate.addEventListener('click',()=>{
    let random = Math.floor(Math.random() * jokes.length);

let jokesAndRandom = jokes[random];
console.log(jokesAndRandom);
jokesDiv.textContent=jokesAndRandom
})



// 
// 
// 
// 
//
// 
// 
