import React from 'react'
import { Link } from 'react-router-dom'
import male from '../assets/male.png'
import female from '../assets/female.png'

const ContactList = ({ contact }) => {

    let getGenderIcon = (contact) => {
        if (contact.gender === 'male') return male
        else return female
    }

    return (
        <Link to={`/contact/${contact.id}`} className="contact-list">
            <div className="display-img-contact">
                <img className="img-margin" src={getGenderIcon(contact)} alt="User" />
                <span style={{paddingRight: '7px'}}>{contact.first_name}</span> 
                <span><b>{contact.last_name}</b></span>
            </div>
            <div>{contact.phone_number}</div>
        </Link>
    )
}

export default ContactList
