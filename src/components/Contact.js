import React from 'react'
import {useHistory} from 'react-router-dom'


const Contact = () => {

    let history = useHistory();

    return (
        <div>
            <h1>Contact</h1>
            <button onClick={() => history('/') }>GO TO HOME</button>       
        </div>
    )
}

export default Contact