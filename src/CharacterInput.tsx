import {ChangeEvent, FormEvent, useState} from "react";
import {characters, RickAndMortyCharacter} from "./RickAndMortyCharacters.ts";
import CharactersOutput from "./CharactersOutput.tsx";

export default function characterInput() {

    const [character, setCharacter] = useState<RickAndMortyCharacter[]>(characters.results)

    const [id, setId] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [species, setSpecies] = useState<string>("")

    function onIdInput(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value)
    }
    function onNameInput(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }
    function onStatusInput(event: ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.value)
    }
    function onSpeciesInput(event: ChangeEvent<HTMLInputElement>) {
        setSpecies(event.target.value)
    }

    function saveCharacter(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newCharacter: RickAndMortyCharacter = {
            id: id,
            name: name,
            status: status,
            species: species
        }

        const newCharacterList: RickAndMortyCharacter[] = [newCharacter, ...character]

        setCharacter(newCharacterList)
    }

    return (

        <>
            <form onSubmit={saveCharacter}>
                <label htmlFor={id}>Enter ID:</label>
                <input type={"number"} value={id} onChange={onIdInput}/><br/>
                <label htmlFor={name}>Enter Name:</label>
                <input value={name} onChange={onNameInput}/><br/>
                <label htmlFor={status}>Enter Status:</label>
                <input value={status} onChange={onStatusInput}/><br/>
                <label htmlFor={species}>Enter Species:</label>
                <input value={species} onChange={onSpeciesInput}/><br/>
                <button>Save</button>
            </form>
            <CharactersOutput allCharacters={character}/>
        </>
    )
}