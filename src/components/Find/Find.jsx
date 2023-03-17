import React from 'react'
import { Link } from 'react-router-dom'

function Find() {
    return (
        <div className='Find'>
            <div>
                <h1>Find Your Perfect Plant</h1>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dicta quis, nihil officiis minima fugit sapiente fuga. Ab quam mollitia sunt alias assumenda, modi qui quasi nostrum quibusdam iste similique veniam, excepturi, tenetur asperiores. Corporis facere harum numquam velit perspiciatis.</h4>
                <Link to='/started' relative='path'>
                    <button className='btn'>get started</button>
                </Link>
            </div>
        </div>
    )
}

export default Find
