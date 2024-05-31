import { useState, useEffect } from "react"
import { CAT_ENDPOINT_IMAGE_URL } from "../constants"

export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const word = fact.split(' ',1)
 
        fetch(`${CAT_ENDPOINT_IMAGE_URL}${word}?json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                const url = `${CAT_ENDPOINT_IMAGE_URL}${word}`
                setImageUrl(url)
            })

    }, [fact])

    return { imageUrl }
}