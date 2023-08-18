import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	//const [contactInfo, setContactInfo] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [userIdToEdit, setUserIdToEdit] = useState(0);

	const fullName = useRef();
	const email = useRef();
	const address = useRef();
	const phone = useRef();

	const data = window.location; // GET URL

	const handleForm = e => {
		e.preventDefault();

		const newContact = {
			address: address.current.value,
			agenda_slug: "cristian1",
			email: email.current.value,
			full_name: fullName.current.value,
			phone: phone.current.value
		};

		actions.editContact(userIdToEdit, newContact);
	};

	/*const getUser = async id => {
		const data = await actions.getOneParticular(id);
		setContactInfo(data);
		console.log(data);
	};*/

	useEffect(() => {
		const id = data.pathname.slice(6, data.pathname.length);
		setUserIdToEdit(id);
		// getUser(id);
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={handleForm}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" ref={fullName} placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="text" className="form-control" ref={email} placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" className="form-control" ref={phone} placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" ref={address} placeholder="Enter address" />
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
