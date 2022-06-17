import { useState, useEffect } from 'react';
import Card from '../components/card/card';
import Footer from '../components/footer/Footer';
import useDebounce from '../hooks/useDebounce';
import './SearchPage.styles.css';

const SearchPage = () => {
	const [result, setResult] = useState([]);
	const [search, setSearch] = useState(null);
	const [loading, setLoading] = useState(false);

	const debouncedSearch = useDebounce(search, 500);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && e.target.value.toLowerCase()) {
			setSearch(e.target.value.toLowerCase());
		}
	};

	useEffect(() => {
		async function fetchData() {
			setLoading(true);

			setResult([]);

			const data = await fetch(
				`http://openlibrary.org/search.json?q=${debouncedSearch}&limit=50`
			).then((res) => res.json());
			setResult(data);
			setLoading(false);
		}

		if (debouncedSearch) fetchData();
	}, [debouncedSearch]);

	const totalData = {
		total: result.numFound
	};

	const newDataObject = {};
	const cardsData = [];
	var author;

	for (let res in result.docs) {
		newDataObject.id = result.docs[res].key;
		newDataObject.title = result.docs[res].title;
		author = result.docs[res].author_name;
		newDataObject.authorName = author.slice(0, 1).shift();
		newDataObject.year = result.docs[res].first_publish_year;
		newDataObject.publisher = result.docs[res].publisher;
		newDataObject.cover_i = result.docs[res].cover_i;
		cardsData.push({ ...newDataObject });
	}

	console.table(cardsData);
	return (
		<>
			<header>
				<img src="assests/header-img.svg" alt="Inside pic of a lib" />
			</header>
			<h1>DISCOVER</h1>
			<p>{`Let's find you some new books`}</p>
			<section className="container section-one">
				<input
					type="text"
					className="search-bar"
					placeholder="Searching for books....."
					onKeyDown={handleKeyDown}
				/>
			</section>
			{loading ? (
				'Loading...'
			) : (
				<>
					<p style={{ margin: 0, textAlign: 'center' }}>Total: {totalData.total}</p>
					<Card cardsData={cardsData} />
				</>
			)}
			<Footer />
		</>
	);
};

export default SearchPage;
