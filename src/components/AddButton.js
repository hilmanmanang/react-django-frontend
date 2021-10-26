import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'

const AddButton = ({nameBtn}) => {
    return (
        <Link to="/contact/new" className="floating-button">
          <AddIcon /> {nameBtn}
        </Link>
    )
}

export default AddButton
