/* eslint-disable react/prop-types */
import { useActionState, useEffect, useState } from 'react';
import SuperheroForm from '../../components/SuperheroForm';
import SuperheroList from '../../components/SuperheroList';
import { addSuperhero } from '../../actions';
import { getAllSuperheroes } from '../../fetches/getAllSuperheroes';

export default function FormPage() {
	const [state, submitAction, isPending] = useActionState(addSuperhero, {
		data: null,
		error: null,
	});

	const [superheroes, setSuperheroes] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getAllSuperheroes();
			setSuperheroes(data);
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (state.data) {
			setSuperheroes(state.data);
		}
	}, [state.data]);

	return (
		<div className='container my-5 text-center'>
			{/* Superhero Form */}
			<div className='mb-5'>
				<SuperheroForm
					state={state}
					submitAction={submitAction}
					isPending={isPending}
				/>
			</div>

			{/* Superhero List */}
			<h3 className='mb-4 text-muted'>Superhero List</h3>

			{isPending ? (
				<p className='my-4'>Loading list with superheroes...</p>
			) : (
				<div className='table-responsive'>
					<SuperheroList state={{ data: superheroes }} />
				</div>
			)}
		</div>
	);
}
