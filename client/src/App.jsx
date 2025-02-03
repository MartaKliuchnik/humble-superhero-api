import { useEffect, useState } from 'react';
import { getAllSuperheroes } from './fetches/getAllSuperheroes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import BoardPage from './pages/boardPage/BoardPage';

export default function App() {
	const [superheroes, setSuperheroes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchSuperheroes = async () => {
			try {
				const superheroesList = await getAllSuperheroes();
				setSuperheroes(superheroesList);
			} catch {
				setError('Failed to load superheroes data.');
			} finally {
				setLoading(false);
			}
		};
		fetchSuperheroes();
	}, [superheroes]);

	if (loading) {
		return <div className='text-center my-5'>Loading...</div>;
	}

	if (error) {
		return <div className='text-center my-5 text-danger'>{error}</div>;
	}

	return (
		<main>
			<Routes>
				<Route path='/' element={<BoardPage superheroes={superheroes} />} />
				{/* <Route
					path='/addSuperhero'
					element={<FormPage onAddSuperhero={onAddSuperhero} />}
				/> */}
			</Routes>
		</main>
	);
}
