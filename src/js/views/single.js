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
    <div className="jumbotron container bg-white" style={{ width: "1030px" }}>
      <h1 className="display-4 d-flex justify-content-center">{!currentContact ?
        "Add a new contact" :
        "Actualizando contacto " + currentContact.id
      }</h1>
      {store.loading ?
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        :
        <form onSubmit={submitForm}>
          <label for="Full Name">Full Name</label>
          <input type="text" className="form-control  mt-1 my-3" name="name" placeholder="Full Name" />
          <label for="Enter Phone">Enter phone</label>
          <input type="text" className="form-control mt-1 my-3" name="phone" placeholder="Enter phone" />
          <label for="Enter Email">Enter Email</label>
          <input type="email" className="form-control mt-1 my-3" name="email" placeholder="Enter email" />
          <label for="Enter address<">Enter address</label>
          <input type="text" className="form-control mt-1 my-3" name="address" placeholder="Enter address" />

          <button className="btn btn-primary mt-1 container-fluid" type="submit" role="button" >Save</button>
          <Link to="/ ">
            <span className="navbar-brand mb-0 h1">or get back to contacts</span>
          </Link>
        </form>
      }
    </div>
  );
};
