import React, {useState} from 'react'


function StateSample() {
    const [counter, setcounter] = useState(0)

    const increase = () => {
            setcounter(5)
    }
 
    }
  return (<>
  <h1>{counter}</h1>
  <button onClick={() => increase()}></button>
  </>
    
  )
}

export default StateSample