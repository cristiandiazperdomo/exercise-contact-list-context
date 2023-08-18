import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState({
		showModal: false
	});

	const [itemId, setItemId] = useState(0);

	useEffect(() => {
		actions.getInfo();
	}, [store.contacts]);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map(contact => (
							<ContactCard
								key={contact.id}
								name={contact.full_name}
								address={contact.address}
								email={contact.email}
								phone={contact.phone}
								onDelete={() => setState({ showModal: true })}
								setItemId={() => setItemId(contact.id)}
								id={contact.id}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} itemId={itemId} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
