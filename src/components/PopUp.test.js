import React from 'react';
import { shallow } from 'enzyme';
import PopUp from './PopUp';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The PopUp component', () => {
	const mockFunc = jest.fn();
	  const props={
		  isOpen:false,
		  errorMessage:'errorMessage',
		  toggle:mockFunc
	  }
	const PopUpComponent = shallow(<PopUp {...props}/>);

	it('should render without error', () => {
		expect(PopUpComponent.length).toBe(1);
	})

	it('function should be called when the button is clicked', () => {
		const button = PopUpComponent.find('.togBtn').at(0);
		button.simulate('click');
		let callback = mockFunc.mock.calls.length;
		expect(callback).toBe(1);
	})
	it('should render same error message passed form props', () => {
		const modalBody = PopUpComponent.find('.modalBody').at(0);
		expect(modalBody.dive().text()).toEqual(props.errorMessage);
	})

})