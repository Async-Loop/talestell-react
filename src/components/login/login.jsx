import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/feature/user';
import './login.styles.css';

const Login = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={(values) => {
					dispatch(login(values));
				}}>
				{({ isSubmitting }) => (
					<Form className="login_info">
						<Field
							className="account_details"
							type="text"
							name="username"
							placeholder="username"
							required
						/>
						<Field
							className="account_details"
							type="password"
							name="password"
							placeholder="password"
							required
						/>
						<button className="login_btn" type="submit" disabled={isSubmitting}>
							LOGIN
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;
