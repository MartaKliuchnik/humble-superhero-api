/* eslint-disable react/prop-types */
import SuperheroForm from '../../components/SuperheroForm';
import SuperheroList from '../../components/SuperheroList';

export default function FormPage({
	superheroes,
	setSuperheroes,
	loading,
	setLoading,
	error,
	setError,
}) {
	return (
		<div className='container my-5 text-center'>
			{/* Superhero Form */}
			<div className='mb-5'>
				<SuperheroForm
					setSuperheroes={setSuperheroes}
					setLoading={setLoading}
					setError={setError}
				/>
			</div>

			{/* Superhero List */}
			<h3 className='mb-4 text-muted'>Superhero List</h3>

			<div className='table-responsive'>
				<SuperheroList
					superheroes={superheroes}
					loading={loading}
					error={error}
				/>
			</div>
		</div>
	);
}
