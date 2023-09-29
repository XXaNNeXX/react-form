import { useState } from 'react'
import CharactersOutput from "./CharactersOutput.tsx";
import {characters, RickAndMortyCharacter} from "./RickAndMortyCharacters.ts";

export default function App() {

    const [character, setCharacter] = useState<RickAndMortyCharacter[]>(characters.results)

    return (
        <>
            <CharactersOutput allCharacters={character}/>
        </>
    )
}