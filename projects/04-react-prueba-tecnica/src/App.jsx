
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from "./hooks/useCatFact.js"

export function App() {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
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