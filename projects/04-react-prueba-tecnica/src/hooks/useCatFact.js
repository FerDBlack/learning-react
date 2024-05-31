import { useState, useEffect } from 'react'
import { getRandomCatFact } from '../services/facts.js'

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomCatFact().then(newFact => setFact(newFact))
    }
    // Para recuperar la cita al cargar la página
    useEffect(refreshFact, [])
    
    return { fact, refreshFact }
}