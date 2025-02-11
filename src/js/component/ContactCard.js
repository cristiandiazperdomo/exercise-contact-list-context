import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const urlId = "/edit/" + props.id;

	const handleDelete = () => {
		props.onDelete();
		props.setItemId();
	};

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link to={urlId} className="btn">
							<i className="fas fa-pencil-alt mr-3" />
						</Link>
						<button className="btn" onClick={handleDelete}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	name: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	address: PropTypes.string,
	id: PropTypes.number,
	setItemId: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
