import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
export const UserList = (props) => {

	const { name, email, id } = props.user;
	const { onDeleteUser, onUpdateUser } = props;
	const [userName, setUserName] = useState(name);
	const [userEmail, setUserEmail] = useState(email);

	return (
		<div>
			<Form inline className='m-2 border border-secondary text-info'>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="name" className="mr-sm-2">Name: </Label>
					<Input type="text" name="name" id="name" value={userName} onChange={(e) => setUserName(e.target.value)} />
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="email" className="mr-sm-2">Email: </Label>
					<Input type="email" name="email" id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
				</FormGroup>
				<Button color='primary' className="btn" onClick={() => onUpdateUser(id, userName, userEmail)}>Update</Button>
				<Button color='danger' className="ml-1 btn" onClick={() => onDeleteUser(id)}>Delete</Button>
			</Form>
			
		</div>
	)
}
