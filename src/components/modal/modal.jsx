import ReactDOM from 'react-dom';
import Login from '../login/login';
import Signup from '../signup/signup';

const Modal = ({ open, onClose }) => {
	if (!open) return null;

	return ReactDOM.createPortal(
		<>
			<button onClick={onClose}>Close</button>
			<Login />
			<Signup />
		</>
	);
};

export default Modal;
