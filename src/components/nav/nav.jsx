import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Burger from './Burger';
import Modal from 'react-modal';
import Login from '../login/login';
import { logout } from '../../redux/feature/user';

import './nav.styles.css';

Modal.setAppElement('#root');

const Nav = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	if (user) {
		return (
			<div>
				{user.username}
				<button onClick={() => dispatch(logout())}>Logout</button>
			</div>
		);
	}
	return (
		<>
			<header>
				<div className="container-fluid row">
					<a className="brand" href="/">
						<h1>TalesTell</h1>
					</a>
					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<a className="nav--link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav--link" href="#">
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a className="nav--link" href="#">
									About
								</a>
							</li>
						</ul>
						<ul className="nav-list">
							<li className="nav-item">
								<button
									id="login"
									className="nav--link__login--button"
									onClick={openModal}>
									LOGIN
								</button>
								<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
									<button className="closeModal" onClick={closeModal}>
										X
									</button>
									<Login />
									<p>
										{`Don't have an account?`}
										<a className="link_signup" href="">
											SIGNUP
										</a>
									</p>
								</Modal>
							</li>
						</ul>
					</nav>
					<Burger />
				</div>
			</header>
		</>
	);
};

export default Nav;
