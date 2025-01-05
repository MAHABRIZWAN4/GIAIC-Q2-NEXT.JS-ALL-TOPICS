import React from 'react'

export default async function API() {
 
  const API_URL = await fetch(`https://simple-books-api.glitch.me/books`)
  const res = await API_URL.json()
  console.log(res);


  return (
    <div>
      
    </div>
  )
}

