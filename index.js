
let name=document.querySelector('.name')
name.textContent="coded by <> oluwadamilare </>"

let jokesDiv = document.querySelector(".jokesDiv");
let generate = document.querySelector(".generate");
let jokes = [
  "What's your favorite drink? I'm asking so I know what to buy you on our first date.",
  "Do you have a name or can I call you mine?",
  "You owe me a drink. Because when I saw you, I dropped mine.",
  "Is your name Wi-Fi? Because I'm really feeling a connection.",
  "Are you a magician? Whenever I look at you, everyone else disappears.",
  "If you were a vegetable, you'd be a 'cute-cumber.'",
  "Do you have a map? I keep getting lost in your eyes.",
  "If you were a song, you'd be the best single on the album.",
  "Aren't you tired? From running through my mind all day?",
  "I don't know your name, but I'm sure it's just as beautiful as you are.",
  "If I could rearrange the alphabet, I'd put U and I together.",
  "I was feeling a little tired today, but you've turned me on again.",
  "Are you a charger? Because I'm dying without you..  oraimo charger abi ..lol",
  "I'd say God bless you, but it looks like he already has.",
  "If you let me borrow a kiss, I promise I'll give it right back.",
  "I'd never play hide and seek with you, because someone like you is impossible to find.",
  "Can I have your picture so I can show Santa what I want for Christmas this year?",
  "Not to be dramatic, but I think you're the answer to my prayers.",
  "I think there's something wrong with my phone. Your number's not in it.",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you, and now I need some serious medical attention.",
  "Excuse me, do you have a name or can I call you mine? Because I have a bet with my friends about how fast I can make a girl cringe.",
  "Do you believe in fate? Because I think we were destined to meet, and by 'destined,' I mean my imaginary friend told me so.",

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
