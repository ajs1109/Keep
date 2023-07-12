import React from 'react'

const Year = new Date().getFullYear();

function footer() {
  return (
    <footer><p>Copyright © {Year}</p></footer>
  )
}

export default footer;