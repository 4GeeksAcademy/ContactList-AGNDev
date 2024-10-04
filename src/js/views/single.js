import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Single = () => {
  //const { store, actions } = useContext(Context);
  const { idContact } = useParams();
  const [currentContact, setCurrentContact] = useState()
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  async function submitForm(e) {
    e.preventDefault()
    let formData = new FormData(e.target)
    let updatedContact = {}
    formData.forEach((val, key) => updatedContact[key] = val)
    console.log(updatedContact)
    if (currentContact) {
      let resp = await actions.updateContact(currentContact.id, updatedContact)
      if (resp) {
        navigate("/")
      }
      else {
        alert("Ups, algo salió mal !!")
      }
    } else {
      let resp = await actions.createNewContact(updatedContact)
      if (resp) {
        navigate("/")
      }
      else {
        alert("Ups, algo salió mal !!")
      }
    }
  }

  useEffect(() => {
    if (store.contacts) {
      if (store.contacts.length > 0 && idContact) {
        let contact = store.contacts.find(contact => contact.id == idContact)
        setCurrentContact(contact)
      }
    }
  }, [idContact, store.contacts])

  return (
    <div className="jumbotron container">
      <h1 className="display-4">{!currentContact ?
        "Crear contacto" :
        "Actualizando contacto " + currentContact.id
      }</h1>
      {store.loading ?
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        :
        <form onSubmit={submitForm}>
          <input type="text" className="form-control my-2" name="name" placeholder="name" />
          <input type="text" className="form-control my-2" name="phone" placeholder="phone" />
          <input type="email" className="form-control my-2" name="email" placeholder="email" />
          <input type="text" className="form-control my-2" name="address" placeholder="address" />

          <button className="btn btn-outline-success mt-2" type="submit" role="button" > Guardar contacto</button>

        </form>
      }
    </div>
  );
};