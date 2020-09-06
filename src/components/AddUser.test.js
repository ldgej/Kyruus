import React from 'react';
import { shallow } from 'enzyme';
import { AddUser } from './AddUser';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The AddUser component', () => {

	const AddUserComponent = shallow(<AddUser />);

	it('should render without error', () => {
		expect(AddUserComponent.length).toBe(1);
	})
})