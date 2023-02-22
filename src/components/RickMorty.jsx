import React, { useEffect, useState } from 'react'
import '../css/RickMorty.css'

const RickMorty = () => {
    
    const [page, setPage] = useState(1)
    const [charIndex, setCharIndex] = useState(0)
    const [char, setChar] = useState({})
    const [arrayLength, setArrayLength] = useState(19)
    
    const getRickyMortyData=async(page)=>{
        let response=await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        let data=await response.json()
        console.log(data.results)
        return data.results
    }

    useEffect(() => {
        getRickyMortyData(page).then(r=>{
            setChar(r[charIndex])
            setArrayLength(r.length-1)
        })
    }, [,page,charIndex])

    useEffect(() => {
        setCharIndex(0)
    }, [page])
    
    

  return (
    <div className={`char-info ${char.gender==="Male"?"char-male":char.gender==="Female"?"char-female":""}`}>
            <p className='char-pagination char-pagination--title'>Page: {page}</p>
            <button className='char-pagination char-pagination--previous' onClick={()=>{setPage(page-1)}} disabled={page===1?true:false}>Previous</button>
            <button className='char-pagination char-pagination--next' onClick={()=>{setPage(page+1)}}disabled={page===42?true:false}>Next</button>
        <div className='container pt-5'>
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <img src={char.image} alt={char.name} className="w-100" />
                </div>
                <div className="col">
                    <h2 className='text-center'>{char.name}</h2>
                    <p>Specie: {char.species}</p>
                    <p>Location:</p>
                    <p>Gender: {char.gender}</p>
                    <p>Status: {char.status}</p>
                </div>
            </div>
        </div>
        <div className="buttons">
            <button onClick={()=>{setCharIndex(charIndex-1)}} disabled={charIndex===0?true:false}>Previous</button>
            <button onClick={()=>{setCharIndex(charIndex+1)}}disabled={charIndex===arrayLength?true:false}>Next</button>
        </div>

    </div>
  )
}

export default RickMorty