import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Contact from "../component/Contact";


const Home = () => {
	const { store, actions } = useContext(Context);
	//id, name, phone, email, address 
	return (
		<div className="text-center mt-5 container">
			{store.contacts == null ? <h1>Cargando contactos...</h1> :
				store.contacts == false ? <h1>Ups, hubo un error</h1> :
					store.contacts && store.contacts.length > 0 && store.contacts.map((item) => (
						<Contact
							key={item.id}
							id={item.id}
							name={item.name}
							phone={item.phone}
							email={item.email}
							address={item.address}
						/>
					)
					)}
		</div>
	);
}
export default Home;