import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from './UserList';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The UserList component', () => {
	const mockFunc = jest.fn();
	const user={
		"id": "5",
		"name": "Filomena Keeling",
		"email": "Mercedes_Sauer@yahoo.com"
	  }
	  const props={
		  user,
		  onDeleteUser:mockFunc,
		  onUpdateUser:mockFunc
	  }
	const UserListComponent = shallow(<UserList {...props} />);

	it('should render without error', () => {
		expect(UserListComponent.length).toBe(1);
	})
	it('function should be called when the button is clicked', () => {
		const button = UserListComponent.find('.btn').at(0);
		button.simulate('click');
		let callback = mockFunc.mock.calls.length;
		expect(callback).toBe(1);
	})

})