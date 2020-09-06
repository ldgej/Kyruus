import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PopUp from './PopUp';

export const AddUser = (props) => {

	const { onAddUser } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('error happend');
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');

	const toggle=()=>{
		setIsOpen(isOpen=>!isOpen);
	}

	const fChkMail=(szMail)=>{ 
	let szReg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
	return szReg.test(szMail); 
	}

	const handleAddUser = () => {
		if (userName.trim()=== '') {
			setIsOpen(true);
			setErrorMessage('Name of the user can not be empty,please fix it!');
			return
		}
		else if (userEmail.trim() === '') {
			setIsOpen(true);
			setErrorMessage('Email of the user can not be empty,please fix it!')
			return 
		}
		else if (!fChkMail(userEmail)) {
			setIsOpen(true);
			setErrorMessage('Email format is not correct, please fix it!')
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
			<PopUp isOpen={isOpen} errorMessage={errorMessage} toggle={toggle} />
		</div>
	)
}
