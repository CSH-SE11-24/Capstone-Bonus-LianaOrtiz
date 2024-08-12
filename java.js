console.log("Script Running..")
let para = document.querySelectorAll(".p2")
console.log(para)
let pa = document.querySelectorAll(".w3-large")
let darkBtn = document.querySelector("#dark")
let lightBtn = document.querySelector("#light")
let bod1 = document.querySelector("#bod")


// This is my javasript to select the words in the main page such as "hardworker"
// I asked chat gpt to say amazing things about me :)
let hard = document.querySelector("#hardworker")
  hard.addEventListener("click", function(event){
   hard.textContent = "Liana is an exceptionally hardworking individual, always going above and beyond to ensure every task is completed with precision and excellence. Her unwavering dedication and strong work ethic inspire those around her to strive for the same level of commitment."
})


let love = document.querySelector("#loving")
  love.addEventListener("click", function(event){
   love.textContent = "Liana is a loving person who always shows genuine care and compassion for those around her. Her warm and nurturing nature makes everyone feel valued and appreciated in her presence."
})

let dedicated = document.querySelector("#dedicated")
  dedicated.addEventListener("click", function(event){
   dedicated.textContent = "Liana is incredibly dedicated, always putting her heart and soul into everything she does. Her unwavering commitment to her goals and responsibilities sets her apart, making her a dependable and inspirational figure."
})


// Selects the text and changes it
let supportive = document.querySelector("#supportive")
  supportive.addEventListener("click", function(event){
   supportive.textContent = "Liana is an amazing individual, radiating positivity and excellence in everything she does. Her unique blend of talent, kindness, and dedication leaves a lasting impression on everyone she meets.";
     })



// Creates an array of random variables, uses it to randomize through when a text is clicked.
let headerr = document.querySelector("#header");
    let texts = ["Quote of the day: the purpose of life is a life of purpose", "Quote of the day: your patience is your power", "Quote of the day: the purpose of life is a life of purpose", "Quote of the day: if love can fade, then so can pain."]

headerr.addEventListener("click", function(event){
  let random =Math.floor(Math.random()* texts.length)
  let randomText = texts[random];

  headerr.textContent = randomText;
})


for(let a = 0; a < pa.length; a++){
  pa[a].addEventListener("mouseover", function(event){
    console.log("mouseover")

    pa[a].style.fontSize = "210%"
  })
}

for(let n = 0; n < pa.length; n++){
  pa[n].addEventListener("mouseout", function(event){
    console.log("mouseout")

    pa[n].style.fontSize = "100%"
  })
}


// Hey Ms Pham, please check this code because my accessiblity feature isnt working.
// darkBtn.addEventListener("click", function(event){
//   bod1.style.backgroundColor = "blue"
//   console.log(darkBtn)
// })