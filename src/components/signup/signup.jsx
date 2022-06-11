import { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input';

import { loginStart } from '../../redux/user/user.action';

const SignUp = () => {
	const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
	const { username, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();
		loginStart(username, password);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		e.preventDefault();
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div>
			<form action="POST" onSubmit={handleSubmit}>
				<FormInput
					name="username"
					type="text"
					handleChange={handleChange}
					value={username}
					label="username"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<button type="submit">LOGIN</button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	loginStart: (username, password) => dispatch(loginStart({ username, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
