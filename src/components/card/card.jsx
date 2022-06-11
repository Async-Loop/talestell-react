//import { useState } from 'react';
import './card.styles.css';
const Card = (cardsData) => {
	// const [visible, setVisible] = useState(
	// 	getComputedStyle(document.documentElement).getPropertyValue('--visibility-state')
	// );

	console.log(cardsData.cardsData);
	// const { id, title, isbn } = data.cardData;
	// console.log({ id, title, isbn });

	for (let ld in cardsData.cardsData) {
		let ID = cardsData.cardsData[ld].id;
		let TITLE = cardsData.cardsData[ld].title;

		console.log(ID);
		console.log(TITLE);
	}
	return (
		<>
			<section className="container row">
				{/* <div className="data__result"> */}
				<table className="container">
					{cardsData.cardsData
						.slice(0, 20)
						.map(({ id, title, authorName, year, cover_i }) => (
							<>
								<tr>
									<td>
										{/* <a href="" className="data__item"> */}
										<img
											key={id}
											src={`https://covers.openlibrary.org/b/id/ ${cover_i}-S.jpg`}
											alt={title}
											height={150}
											width={100}
										/>

										{/* </a> */}
									</td>
									<td>
										<p>{title}</p>
									</td>
									<td>
										<p>{authorName}</p>
									</td>
									<td>
										<p>{year}</p>
									</td>
									<td>
										<select name="|" id="|">
											<option>Select</option>
											<option>Want to Read</option>
											<option>Currently reading</option>
											<option>Hold</option>
											<option>Drop</option>
											<option>Completed</option>
										</select>
									</td>
									<td>
										<button className="btn">ADD TO BOOKSHELF</button>
									</td>
								</tr>
							</>
						))}
				</table>
				{/* </div> */}
			</section>
		</>
	);
};

export default Card;
