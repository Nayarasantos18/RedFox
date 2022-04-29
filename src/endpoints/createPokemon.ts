import { Request, Response } from "express";
import {getPokemonInfo} from "../services/getPokemonInfo"

export const createPokemon = async (req: Request, res: Response) => {
  try{
    const {Name, ATK, DEF, Type1, Type2} = req.body

    const pokemons = await getPokemonInfo(Name)
    if(!pokemons){
      throw new Error("Deu erro no servidor getPokemonInfo")
    }


    res.send({pokemons})
  }catch (error){
    if(error instanceof Error) {
      res.send({error, message: error.message})
    }else{
      res.send({message: "Erro inesperado"})
    }
  }
}
    