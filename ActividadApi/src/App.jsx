import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getAllCharacters} from './api/httpRequest'

function App() {
  const [character, setCharacter] = useState ([])
  useEffect(()=>{
    const getCharactersDataRequest = async () => {
      const CharacterData = await getAllCharacters()
      setCharacter(CharacterData)
    }
    getCharactersDataRequest()
  }, [])

  return (
    <>
    <div className="container">
    <h1 className='text-center my-3'>Rick And Morty API</h1>
      <div className='cardContainer'>
      {
        character.map((item) => (
          <div className="card" key={item.id}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className='card-text'>Genero:{item.gender}</p>
            <p className='card-text'>Especie:{item.species}</p>
            <p className='card-text'>Estado:{item.status}</p>
          </div>
        </div>  
        ))
      }
      </div>
    </div>
      
    </>
  )
}

export default App
