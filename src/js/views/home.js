import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Contact from "../component/Contact";


export const Home = () => {
	const { store, actions } = useContext(Context);
	//id, name, phone, email, address 
	return (
		<div className="text-center mt-5 container">
			{store.contacts.map((item) => (
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