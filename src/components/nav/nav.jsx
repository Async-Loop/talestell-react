import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Burger from './Burger';
import { logout, reset } from '../../redux/feature/auth/authSlice';

import '../../pages/HomePage.styles.css';

const Nav = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};
	return (
		<>
			<header>
				<nav className="nav">
					<Link className="brand" to="/">
						<h1>TalesTell</h1>
					</Link>
					<ul className="nav_links">
						<li>
							<a className="link" href="#">
								Features
							</a>
						</li>
						<li>
							<a className="link" href="#">
								Blog
							</a>
						</li>
						<li>
							<a className="link" href="#">
								About
							</a>
						</li>
					</ul>
					<ul className="button">
						{user ? (
							<li>
								{user.username}
								<button
									style={{
										background: 'white',
										color: `var(--primary-color)`,
										fontWeight: '600',
										border: 'none',
										borderRadius: '5px'
									}}
									onClick={onLogout}>
									LOGOUT
								</button>
							</li>
						) : (
							<>
								<li>
									<Link id="login" className="button-login" to="/login">
										LOGIN
									</Link>
								</li>
								<li>
									<Link id="login" className="button-signup" to="/signup">
										SIGNUP
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
				<Burger />
			</header>
		</>
	);
};

export default Nav;
