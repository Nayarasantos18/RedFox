import axios from 'axios';
import { Pokemons } from "../types/Pokemons"


const baseUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'

export const getPokemonInfo = async (Name: string): Promise<Pokemons | null> => {

  try{

    const response = await axios.get(`${baseUrl}/${Name}/json/}`)

    const pokemons: Pokemons = {
      Name: response.data.nome,
      ATK: response.data.ataque,
      DEF: response.data.defesa,
      Type1: response.data.tipo1,
      Type2: response.data.tipo2
    }
    return pokemons
  }catch (error){
    console.log('Erro np servidor getPokemonInfo:',error);
    return null
  }
}