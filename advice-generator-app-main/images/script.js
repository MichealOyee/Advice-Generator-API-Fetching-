const advice = document.getElementById('advice');
const quote = document.getElementById('quote');
const dice = document.getElementById('dice');

async function getQuote(){
    try{
        const response =  await fetch('https://api.adviceslip.com/advice');
        const data = await response.json()
        let id = data.slip.id
        advice.innerHTML = `ADVICE #${id}`
        quote.innerHTML = data.slip.advice
        
        
    } catch(error){
        console.error(error);
        
    }
}

dice.addEventListener('click', getQuote)

getQuote()