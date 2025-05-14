import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    
    console.log(jokesData)
    const jokeElements = jokesData.map((joke) => {
        console.log(joke.setup)
        return (
            <Joke  
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })

    return (
        <main>
            {jokeElements}
        </main>
    )
}