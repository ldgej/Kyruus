import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export const AddUser = (props) => {

	const { onAddUser } = props;
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const handleAddUser = () => {
		if (userName === '' || userEmail === '') {
			return
		}
		onAddUser(userName, userEmail);
		setUserName('');
		setUserEmail('');
	}
	return (
		<div>
			<Form inline className='m-2 border border-dark text-light bg-info mt-5'>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="name" className="mr-sm-2">Name: </Label>
					<Input
						type="text"
						name="name"
						id="name"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="email" className="mr-sm-2">Email: </Label>
					<Input
						type="email"
						name="email"
						id="email"
						value={userEmail}
						onChange={(e) => setUserEmail(e.target.value)}
					/>
					
				</FormGroup>

				<Button color='warning' className="ml-4 button" onClick={handleAddUser}>Add User</Button>
			</Form>
		</div>
	)
}
