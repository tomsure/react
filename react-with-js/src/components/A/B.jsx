import React from 'react'
import { useLocation } from 'react-router-dom'
export default function B() {
    let local = useLocation()
    console.log(local.state)
    return (
        <div>B</div>
    )
}

