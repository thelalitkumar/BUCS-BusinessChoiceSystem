import React from 'react'
import { Link } from 'react-router-dom'

const PgFOF = () => {
    return (
        <div>
            <h1>404 not Found</h1>
            <div>Oops! You seem to be lost.</div>
            <div>
            <button><Link to='/'>Home</Link></button>
            </div>
        </div>
    )
}

export default PgFOF