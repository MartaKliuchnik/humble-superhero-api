import { useEffect, useState } from 'react';
import { getAllSuperheroes } from '../fetches/getAllSuperheroes';

export function useSuperheroes() {
	const [superheroes, setSuperheroes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchSuperheroes = async () => {
			try {
				const superheroesList = await getAllSuperheroes();
				setSuperheroes(superheroesList);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchSuperheroes();
	}, []);

	return { superheroes, setSuperheroes, loading, setLoading, error, setError };
}
