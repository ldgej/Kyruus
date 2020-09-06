import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopUp = (props) => {
	const { isOpen, errorMessage,toggle } = props;
	return (
		<div>
			<Modal isOpen={isOpen} toggle={toggle}>
				<ModalHeader toggle={toggle}>Error</ModalHeader>
				<ModalBody className='modalBody'>
				{errorMessage}
                </ModalBody>
				<ModalFooter>
					<Button color="primary" className='togBtn'onClick={toggle}>Got It</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default PopUp;