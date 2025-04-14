let main = document.getElementById('main')
main.innerHTML = ''
let button = document.querySelector('.buttonclass')


async function getQuote() {
    try {

        const reponse = await fetch('https://api.adviceslip.com/advice')
        const aDataQuote = await reponse.json()
        console.log(aDataQuote);
        
        let identity = document.createElement('p')
        identity.classList.add('identity')
        identity.textContent = `Advise  #${aDataQuote.slip.id}`
        let quote = document.createElement('h2')
        quote.classList.add('quote')
        // quote.classList.add('quote')
        quote.textContent = `"${aDataQuote.slip.advice}"`

        console.log(aDataQuote);

        main.appendChild(identity)
        main.appendChild(quote)
        
    } catch (error) {
        console.log('error', error);

    }

}
getQuote()

function clear(){
    // main.innerHTML = 'Loading...';
    main.innerHTML = '';

    // getQuote()
}
button.addEventListener('click', ()=>{

    getQuote()
    clear()
})