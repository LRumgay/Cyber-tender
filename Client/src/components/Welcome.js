import React from 'react'
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <section id="welcome">
            
                    <h1>
                    Welcome page
                    <br/> 
                    What'll Ya Have??
                    </h1>
                    <Link to="/Questions">
                        <button> Click here to start</button>
                    </Link>
                    
        </section>
    )
}

export default Welcome
