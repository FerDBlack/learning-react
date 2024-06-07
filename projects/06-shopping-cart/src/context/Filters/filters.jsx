import { createContext, useState } from "react";


//1º Crear el contexto.
export const FiltersContext = createContext()

//2º Crear el Provider, para proveer el contexto.
export function FiltersProvider({ children }) {
    const  [filters, setFilters] = useState({
        category:'all',
        minPrice:0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider >

    )
}