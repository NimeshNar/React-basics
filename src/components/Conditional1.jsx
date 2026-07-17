import React from 'react'

const Conditional1 = (isLoggedIn) => {
    return (
        <div>
            {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
            {isLoggedIn && <h2>Welcome Nimesh</h2>}
        </div>
    )
}

export default Conditional1