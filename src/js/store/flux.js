const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			createAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/AGNDev", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
					})
					const data = await response.json()
					console.log(data);
					return true;
				} catch (error) {
					console.log("Error: ", error)
					return false;
				}
			},

			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/AGNDev/contacts", {
						method: "GET",
						headers: { "Content-Type": "application/json" },
					})
					// console.log(response);
					if (response.status == 404) {
						getActions().createAgenda();
					}
					const data = await response.json()
					setStore({ contacts: data.contacts });
					return true;
				} catch (error) {
					console.log("Error: ", error)
					return false;
				}
			},

			createNewContact: async (contact) => {
				// console.log(contact);
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/AGNDev/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contact)
					})

					const data = await response.json()
					// console.log(data);
					getActions().getContacts();
					return true;
				} catch (error) {
					console.log("Error: ", error)
					return false;
				}
			},

		}
	};
};

export default getState;
