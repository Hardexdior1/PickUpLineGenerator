
let name=document.querySelector('.name')
name.textContent="coded by <>'oluwadamilare </>'"

let jokesDiv = document.querySelector(".jokesDiv");
let generate = document.querySelector(".generate");
let jokes = [
  "what is the name of baby duck ......lil durk",
  "the name of bayern pick up lines",
  "does your mother sells okro ...because you are drawing my attention ",
];



generate.addEventListener('click',()=>{
    let random = Math.floor(Math.random() * jokes.length);

let jokesAndRandom = jokes[random];
console.log(jokesAndRandom);
jokesDiv.textContent=jokesAndRandom
})

// "Is your name Google? Because you've got everything I'm searching for."
// "Do you have a name or can I call you mine?"
// "Are you a magician? Whenever I look at you, everyone else disappears."
// "Is your dad a boxer? Because you're a knockout!"
// "Is your name Wi-Fi? Because I'm really feeling a connection."
// "If you were a vegetable, you'd be a 'cute-cumber.'"
// "Excuse me, but I think you dropped something: my jaw."
// "Is your dad a baker? Because you're a cutie pie!"
// "Do you have a map? I keep getting lost in your eyes."
// "I must be a snowflake because I've fallen for you."


// Apologies for the repetition earlier. Here are 20 new and crazy pickup lines for you:

// 1. "Is your name Google? Because you have everything I'm searching for, including my lost sanity."
// 2. "Are you a parking ticket? Because you've got 'fine' written all over you, and I'm guilty as charged."
// 3. "Are you a magician? Because whenever I look at you, everyone else disappears, just like my chances of staying sane around you."
// 4. "Do you believe in fate? Because I think we were destined to meet, and by 'destined,' I mean my imaginary friend told me so."
// 5. "Are you a time traveler? Because every time I see you, my watch goes crazy and time seems to stand still."
// 6. "Excuse me, do you have a name or can I call you mine? Because I have a bet with my friends about how fast I can make a girl cringe."
// 7. "Do you have a map? Because I keep getting lost in your eyes, and Google Maps refuses to help me navigate this level of attractiveness."
// 8. "If you were a vegetable, you'd be a cute-cumber, and I'd be a nutjob for using vegetable analogies in pickup lines."
// 9. "Are you a dictionary? Because you add meaning to my life, or at least you would if I understood half the words you use."
// 10. "Is your dad an artist? Because you're a masterpiece, and I'm willing to go to the crazy lengths of pretending I know anything about art."
// 11. "Are you a magician? Because whenever I see you, everyone else disappears, and I start questioning the fabric of reality."
// 12. "Do you have a Band-Aid? Because I just fell from heaven, and now I have a twisted ankle and a strong desire to meet you."
// 13. "Is your dad a baker? Because you're a cutie pie, and I'm willing to risk a sugar overdose for your attention."
// 14. "Excuse me, but I think you dropped something: my sanity. Mind helping me find it by going out with me?"
// 15. "Is your name Wi-Fi? Because I'm feeling a strong connection, and I'm willing to trade my sanity for a stable internet connection."
// 16. "If you were a vegetable, you'd be a 'fineapple,' and I'd be a 'crazy' fruit trying to impress you."
// 17. "Do you have a Band-Aid? Because I just scraped my knee falling for you, and now I need some serious medical attention."
// 18. "Is your dad a boxer? Because you're a knockout, and I'm willing to let you give me a standing eight-count of crazy love."
// 19. "Do you have a name, or can I call you 'mine'? Because I'm about to go completely off the rails with these pickup lines."
// 20. "Is your dad a magician? Because whenever I look at you, everyone else disappears, and I start to question the very fabric of reality... in a completely sane and not at all crazy way."

// Remember to use these lines with a sense of humor and be prepared for different reactions. Not everyone may appreciate the craziness, so be attentive to the other person's response and adjust accordingly.