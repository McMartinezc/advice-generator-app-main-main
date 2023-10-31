// ¡Buena suerte!
const button = document.querySelector(".card__dice");
const textContainer = document.querySelector(".card__quote");
const numberAdvice = document.querySelector(".card__number");


button.addEventListener("click", async()=>{
    const advice = await getRandomAdvice();
    textContainer.textContent = advice.advice;
    numberAdvice.textContent = `Advice #${advice.id}`;
})


//Función fetch
async function getRandomAdvice(){
    const urlApi= "https://api.adviceslip.com/advice";
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data)
    return data.slip;
}