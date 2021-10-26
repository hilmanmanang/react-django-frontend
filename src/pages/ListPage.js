import React, { useState, useEffect } from 'react'
import ContactList from '../components/ContactList'
import Header from '../components/Header'

const ListPage = () => {

    let [contact, setContact] = useState([])

    useEffect(() => {
        getContact()
    }, [])

    let getContact = async () => {
        let response = await fetch("/api/contact/")
        let data = await response.json()
        setContact(data)
    }

    return (
        <div className="notes">
            <Header showAdd={true}/>
            <div className="notes-list">
                <div className="head-list-contact">
                    <div>Name ({contact?.length})</div>
                    <div>Phone Number</div>
                </div>
                <hr />
                {contact.map((contact, index) => (
                    <ContactList key={index} contact={contact}/>
                ))}
            </div>
        </div>
    )
}

export default ListPage
