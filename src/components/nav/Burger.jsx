import { useState } from 'react';
import LeftNav from './LeftNav';
import './nav.styles.css';

const Burger = () => {
	const [open, setOpen] = useState(false);

	const Hamburger = () => {
		setOpen(!open);
		document.getElementById('sidenav').style.width = '300px';
	};

	console.log(open);
	return (
		<>
			<div className="hamburger" open={open} onClick={Hamburger}>
				<i className="fa-solid fa-bars"></i>
			</div>
			<LeftNav open={open} />
		</>
	);
};

export default Burger;
