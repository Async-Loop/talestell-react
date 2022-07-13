import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../redux/feature/auth/authSlice';
import './signup.styles.css';
const Signup = () => {
	const [formData, setFormData] = useState({
		username: '',
		password1: '',
		password2: ''
	});

	const { username, password1, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) toast.error(message);
		if (isSuccess || user) navigate('/');
		dispatch(reset());
	}, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password1 !== password2) {
			toast.error('Password do not match');
		} else {
			const userData = {
				username,
				password1
			};
			dispatch(register(userData));
		}
	};
	return (
		<>
			<section className="heading">
				<h1>SiGNUP</h1>
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
							id="password1"
							name="password1"
							value={password1}
							placeholder="Password"
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password2"
							name="password2"
							value={password2}
							placeholder="Cofirm Password"
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

export default Signup;
