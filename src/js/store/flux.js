const GET_URL_API = "https://playground.4geeks.com/apis/fake/contact/agenda/cristian1";
const URL_API = "https://playground.4geeks.com/apis/fake/contact/";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			user: undefined
		},
		actions: {
			getInfo: async () => {
				try {
					let data = await (await fetch(GET_URL_API)).json();
					setStore({ contacts: data });
				} catch (error) {
					console.log(error);
				}
			},
			/*getOneParticular: async id => {
				try {
					let data = await (await fetch(URL_API + id)).json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},*/
			setInfo: async newContactInfo => {
				let data = await fetch(URL_API, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newContactInfo)
				});
				if (data.msg === "Contact created successfully") {
					getActions.getInfo();
				}
			},
			deleteContact: async id => {
				let data = await fetch(URL_API + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (data.msg === "Contact deleted successfully") {
					getActions.getInfo();
				}
			},
			editContact: async (id, newObj) => {
				await fetch(URL_API + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newObj)
				});
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
