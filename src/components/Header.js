import React, { useState, useEffect } from 'react'
import AddButton from './AddButton'

const Header = ({showAdd}) => {
    return (
        <div className="app-header">
            {showAdd ? <h1>Contact List</h1> : <h1>Contact</h1> }
            {showAdd && <AddButton nameBtn="Add Contact"/>}
        </div>
    )
}

export default Header
