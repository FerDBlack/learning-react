import { useEffect, useState } from "react"
import { getRandomCatFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

const useCatFact() => {
    const [fact, setFact] = useState()
    useEffect(() => {
        getRandomCatFact().then(newFact => setFact(newFact))
    }, [])
}

export function App() {

    const { imageUrl } = useCatImage(fact)

    

    const handleClick = async () => {
        const newFact = await getRandomCatFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App</h1>
            <button onClick={handleClick}>Reroll</button>
            {fact &&
                <p>{fact}</p>
            }
            {imageUrl &&
                <img src={imageUrl} alt={`img taken from the first word of ${fact}`} />
            }
        </main>

    )

}