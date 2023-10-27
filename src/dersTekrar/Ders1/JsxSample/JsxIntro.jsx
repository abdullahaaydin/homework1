import React from 'react'

var h1Style = { color:"red" }
var country = "Türkiye"

function JsxIntro() {
  return (<>
    <h1>{country}</h1>
    <h1 style={{color:'tomato'}}>Abdullah Aydın</h1>
    </>)
}

export default JsxIntro