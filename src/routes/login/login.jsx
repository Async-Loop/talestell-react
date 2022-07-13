import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../redux/feature/auth/authSlice';
import './login.styles.css';

const Login = () => {
	const [formData, setFormData] = useState({ username: '', password: '' });
	const { username, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) toast.error(message);
		if (isSuccess || user) navigate('/');
		dispatch(reset());
	}, [user, isLoading, isError, isSuccess, message]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = {
			username,
			password
		};

		dispatch(login(userData));
	};

	return (
		<>
			<section className="heading">
				<h1>LOGIN</h1>
			</section>
			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="username"
							name="username"
							value={username}
							placeholder="Username"
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							placeholder="Password"
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-block">
							SUBMIT
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default Login;
