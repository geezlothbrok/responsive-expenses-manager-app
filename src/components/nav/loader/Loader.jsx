import React from 'react'
import ReactDOM from "react-dom"

function Loader() {
  return ReactDOM.createPortal(
    <div>
        <h3>loading...</h3>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader