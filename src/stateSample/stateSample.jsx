import React, { useState } from 'react';

function StateSample() {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);

    const change = () => {
        
        setWidth(parseInt(width));
        setHeight(parseInt(height));
    }

    return (
        <>
            <div>
                <label htmlFor="Width">Width</label>
                <input type="text" onChange={(e) => setWidth(e.target.value)} />
                <label htmlFor="Height">Height</label>
                <input type="text" onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <button onClick={change}>Change</button>
            </div>
            <div style={{ width: width, height: height, borderStyle: 'solid' }}></div>
        </>
    )
}

export default StateSample;
