import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import male from '../assets/male.png'
import female from '../assets/female.png'
import userFullName from '../assets/first-name.png'
import phoneNumber from '../assets/phone-number.png'
import gender from '../assets/gender.png'
import email from '../assets/email.png'

const ViewPage = ({ match, history }) => {

    let contactId = match.params.id
    let [contact, setContact] = useState(null)

    useEffect(() => {
        getContact()
    }, [contactId])

    let getContact = async () => {
        let response = await fetch(`/api/contact/${contactId}`)
        let data = await response.json()
        setContact(data)
    }

    let createContact = async () => {
        console.log('ss')
        fetch("/api/contact/create/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        console.log(contact)
        if (contact) {
            if (contact.first_name === undefined) alert('All fields are required')
            else if (contact.last_name === undefined) alert('All fields are required')
            else if (contact.phone_number === undefined) alert('All fields are required')
            else if (contact.gender === undefined) alert('All fields are required')
            else if (contact.email === undefined) alert('All fields are required')
            else setTimeout(() => history.push('/'), 100)
    } else {
            alert('All fields are required!')
        }
    }

    let updateContact = async () => {
        fetch(`/api/contact/${contactId}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        setTimeout(() => history.push('/'), 100)
        
    }

    let deleteContact = async () => {
        fetch(`/api/contact/${contactId}/delete/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setTimeout(() => history.push('/'), 100)
    }

    let getGenderIcon = (contact) => {
        if (contact) {
            if (contact.gender === 'male') return male
            else return female
        }
    }

    let backButton = () => {
        history.push('/')
    }

    return (
        <div className="note">
            <Header showAdd={false}/>
            <div className="note-header">
                {contactId !== 'new' ? (
                    <div style={{display: 'flex'}}>
                        <button className="cancel-button" style={{marginRight: '15px'}} onClick={backButton}>Cancel</button>
                        <button className="floating-button delete" onClick={deleteContact}>Delete</button>
                        <button className="floating-button update" onClick={updateContact}>Update</button>
                    </div>
                ) : (
                    <div style={{display: 'flex'}}>
                        <button className="cancel-button" style={{marginRight: '15px'}} onClick={backButton}>Cancel</button>
                        <button className="floating-button update" onClick={createContact}>Create</button>
                    </div>
                )}
            </div>
            {contactId !== 'new' && 
            <div className="card-contact">
                <img src={getGenderIcon(contact)} alt="User" />
                <div className="text-align">
                    <p style={{fontSize: '55px'}}>
                        <span style={{paddingRight: '15px'}}>{contact?.first_name}</span> 
                        <span><b>{contact?.last_name}</b></span>
                    </p>
                    <p style={{fontSize: '35px', paddingTop: '25px'}}>{contact?.phone_number}</p>
                    <p style={{fontSize: '20px', paddingTop: '12px'}}>{contact?.email} </p>
                </div>
            </div>}
            <div style={{padding: '40px', fontSize: '24px'}}>
                <div className="flex-input-view">
                    <div className="image-input">
                        <img width="100%" src={userFullName}/> 
                    </div>
                    <div style={{width: '100%'}}>
                        <p style={{paddingBottom: '10px'}}>First Name:</p>
                        <input onChange={(e) => {setContact({...contact, 'first_name': e.target.value})}} defaultValue={contact?.first_name}></input>
                    </div> 
                </div>
                <div className="flex-input-view">
                    <div className="image-input">
                        <img width="100%" src={userFullName}/> 
                    </div>
                    <div style={{width: '100%'}}>
                        <p style={{paddingBottom: '10px'}}>Last Name:</p>
                        <input onChange={(e) => {setContact({...contact, 'last_name': e.target.value})}} defaultValue={contact?.last_name}></input>
                    </div> 
                </div>
                <div className="flex-input-view">
                    <div className="image-input">
                        <img width="100%" src={phoneNumber}/> 
                    </div>
                    <div style={{width: '100%'}}>
                        <p style={{paddingBottom: '10px'}}>Contact Number</p>
                        <input type="number" onChange={(e) => {setContact({...contact, 'phone_number': e.target.value})}} defaultValue={contact?.phone_number}></input>
                    </div> 
                </div>
                <div className="flex-input-view">
                    <div className="image-input">
                        <img width="100%" src={gender}/> 
                    </div>
                    <div style={{width: '100%'}}>
                        <p style={{paddingBottom: '10px'}}>Gender</p>
                        <select className="gender-select" onChange={(e) => {setContact({...contact, 'gender': e.target.value})}} value={contact?.gender ? contact.gender : ''}>
                            <option value='' disabled>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div> 
                </div>
                <div className="flex-input-view">
                    <div className="image-input">
                        <img width="100%" src={email}/> 
                    </div>
                    <div style={{width: '100%'}}>
                        <p style={{paddingBottom: '10px'}}>Email</p>
                        <input onChange={(e) => {setContact({...contact, 'email': e.target.value})}} defaultValue={contact?.email}></input>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ViewPage
