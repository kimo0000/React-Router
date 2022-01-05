import React from 'react'
import { Link } from 'react-router-dom';



const Navigation = () => {
    return (
        <div className='container'>
            <ul style={{display: 'flex'}}>

                <Link>
                   <li style={{listStyle: 'none', marginLeft: '25px'}}>Home</li> 
                </Link>
               
                <Link>
                   <li style={{listStyle: 'none', marginLeft: '25px'}}>About</li>
                </Link>
                
                <Link>
                   <li style={{listStyle: 'none', marginLeft: '25px'}}>Contact</li>
                </Link>
                
              
            
            </ul>
        </div>
    )
}

export default Navigation