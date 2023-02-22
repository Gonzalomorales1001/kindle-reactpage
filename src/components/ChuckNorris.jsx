import React, { useEffect, useState } from 'react'

const ChuckNorris = () => {
    const [chuck, setChuck] = useState(null)

    const getChuckNorrisAPI=async()=>{
        let response=await fetch(`https://api.chucknorris.io/jokes/random`)
        let data=await response.json()
        return data
    }

    const getChuckNorrisJoke=()=>{
        getChuckNorrisAPI()
        .then(result=>{
            setChuck(result.value)
        })
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        getChuckNorrisJoke()
    }, [])

  return (
    <div>
        <h1>Chuck Norris Facts:</h1>
        <p>{chuck}</p>
        <button className="btn btn-dark" onClick={()=>{
            setChuck(getChuckNorrisJoke())
        }}>Refresh</button>
    </div>
  )
}

export default ChuckNorris