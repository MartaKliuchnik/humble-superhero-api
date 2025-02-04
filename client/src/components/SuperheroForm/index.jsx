/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createSuperhero } from '../../fetches/createSuperhero';
import { getAllSuperheroes } from '../../fetches/getAllSuperheroes';

export default function SuperheroForm({
	setSuperheroes,
	setLoading,
	setError,
}) {
	const [name, setName] = useState('');
	const [superpower, setSuperpower] = useState('');
	const [humilityScore, setHumilityScore] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name || !superpower || !humilityScore) {
			setError('All fields are required and cannot be empty.');
			return;
		}

		if (humilityScore < 1 || humilityScore > 10) {
			setError('Humility Score must be between 1 and 10.');
			return;
		}

		setError('');
		setIsSubmitting(true);

		const newSuperhero = {
			name,
			superpower,
			humilityScore: Number(humilityScore),
		};

		setIsSubmitting(true);
		setLoading(true);
		setError(null);

		try {
			const superhero = await createSuperhero(newSuperhero);
			if (superhero) {
				const updatedHeroes = await getAllSuperheroes();
				setSuperheroes(updatedHeroes);
			}

			setName('');
			setSuperpower('');
			setHumilityScore('');
		} catch {
			setError('Failed to add new superhero.');
		} finally {
			setIsSubmitting(false);
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='mb-4'>
			<div className='row mb-3'>
				<div className='col-md-4'>
					<input
						type='text'
						className='form-control'
						placeholder='Superhero Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						disabled={isSubmitting}
					/>
				</div>

				<div className='col-md-4'>
					<input
						type='text'
						className='form-control'
						placeholder='Superhero Power'
						value={superpower}
						onChange={(e) => setSuperpower(e.target.value)}
						disabled={isSubmitting}
					/>
				</div>

				<div className='col-md-4'>
					<input
						type='number'
						className='form-control'
						placeholder='Humility Score'
						value={humilityScore}
						onChange={(e) => setHumilityScore(e.target.value)}
						disabled={isSubmitting}
					/>
				</div>
			</div>

			<div className='row justify-content-center'>
				<div className='col-md-4'>
					<button
						type='submit'
						className='btn btn-primary w-100'
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Adding...' : 'Add Superhero'}
					</button>
				</div>
			</div>
		</form>
	);
}
