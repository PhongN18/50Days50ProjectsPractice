const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

generateJoke()

async function generateJoke() {
    const config = {
        headers: { 
            'Accept': 'application/json' 
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    joke.innerHTML = data.joke
}

// function generateJoke() {
//     const config = {
//         headers: { 
//             'Accept': 'application/json' 
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then(response => response.json())
//         .then(data => {
//             joke.innerHTML = data.joke
//         }) 
// }

jokeBtn.addEventListener('click', generateJoke)