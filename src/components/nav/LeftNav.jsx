import { useState } from 'react';
import './nav.styles.css';

const LeftNav = (open) => {
	console.log(open);

	const [close, setClose] = useState(open);

	const Close = () => {
		setClose(!close);
		document.getElementById('sidenav').style.width = '0';
	};
	return (
		<>
			<div id="sidenav" className="sidenav" open={open} close={close}>
				<a className="closebtn" onClick={Close}>
					<i className="fa-solid fa-xmark"></i>
				</a>
				<a className="nav--link" href="#">
					Features
				</a>
				<a className="nav--link" href="#">
					Blog
				</a>
				<a className="nav--link" href="#">
					About
				</a>
				<button className="sidenav-btn nav--link__login--button">Login</button>
				<button className="sidenav-btn nav--link__signup--button">Sign Up</button>
			</div>
		</>
	);
};

export default LeftNav;
