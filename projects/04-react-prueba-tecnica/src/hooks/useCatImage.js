export function useCatImage(fact) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const word = fact.split(' ', 1).join(' ')

        fetch(`https://cataas.com/cat/says/${word}?json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `https://cataas.com/cat/says/${word}`
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}