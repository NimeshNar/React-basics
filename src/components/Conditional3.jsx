import React from 'react'

const Conditional3 = (isLoggedIn) => {
    switch (isLoggedIn) {
        case true:
            return <h2>Welcome back!</h2>
        case false:
            return <h2>Please log in.</h2>
        default:
            return <h2>Invalid User</h2>
    }
}

export default Conditional3