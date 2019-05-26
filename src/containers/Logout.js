import React from 'react'

let logout = (props) => {
    localStorage.removeItem('token')
}

export default logout;