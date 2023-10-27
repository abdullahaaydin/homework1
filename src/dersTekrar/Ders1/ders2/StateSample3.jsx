import React, { useState } from 'react'

function StateSample3() {

    const [randomnumbers, setrandomnumbers] = useState([15,20,21])

    const add = () => {
        var randomNumber = Math.floor(Math.random()*100);
        randomnumbers.push(randomNumber);

        setrandomnumbers(...randomnumbers);
    }
  return ( <>
  <button onClick={() => add()}>Add Random</button>
  <ul>
    {
        randomnumbers.map(item => <li>{item}</li>)
    }
  </ul>
  
  </>
  )
}

export default StateSample3