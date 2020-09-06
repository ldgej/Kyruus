import React, { Component } from 'react';
import { UserList, AddUser } from '../components';
import './userContainer.css';


export class UserContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: null
		}
	}
	componentDidMount() {
		fetch('/users').then(users => users.json()).then(users => { this.setState({ users }) });
	}

	handleOnDeleteUser = (id) => {
		console.log(id);
		fetch(`/users/${id}`, {
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(() => {
			console.log('success')
			this.setState({
				users: this.state.users.filter((user) => {
					return user.id !== id
				})
			})
		}).catch((error) => { console.log(error) });

	}
	handleOnUpdateUser = (id, name, email) => {
		console.log(id, name, email);
		fetch(`/users/${id}`, {
			method: "PATCH",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email })
		}).then((data) => data.json()).then((data) => {
			console.log('success')
			console.log(data);

			this.setState({
				users: this.state.users.map((item) => {
					if (item.id !== data.id) {
						return item;
					}
					else {
						return {
							...item,
							["name"]: data.name,
							["email"]: data.email
						}
					}
				})
			})
		}).catch((error) => { console.log(error) });
	}
	handleOnAddUser = (name,email) => {
		console.log(name,email);
		fetch(`/users`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email })
		}).then((data) => data.json()).then((data) => {
			console.log('success')
			console.log(data);

			this.setState({
				users:[...this.state.users,data]
			})
		}).catch((error) => { console.log(error) });
	 }
	
	render() {
		const { users } = this.state;
		return (
			<div className='userContainer'>
				{
					users && users.map((user) => {
						return <UserList
							key={user.id}
							user={user}
							onDeleteUser={this.handleOnDeleteUser}
							onUpdateUser={this.handleOnUpdateUser}
						/>
					})
				}
				<AddUser onAddUser={this.handleOnAddUser}/>
			
			</div>
		)
	}
}
