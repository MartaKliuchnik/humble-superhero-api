import { useState } from 'react';

export default function SuperheroForm({ onAddSuperhero }) {
	const [name, setName] = useState('');
	const [superpower, setSuperpower] = useState('');
	const [humilityScore, setHumilityScore] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !superpower || !humilityScore) return;
		onAddSuperhero({
			name,
			superpower,
			humilityScore: Number(humilityScore),
		});
		setName('');
		setSuperpower('');
		setHumilityScore('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Superpower'
				value={superpower}
				onChange={(e) => setSuperpower(e.target.value)}
			/>
			<input
				type='number'
				placeholder='Humility Score'
				value={humilityScore}
				onChange={(e) => setHumilityScore(e.target.value)}
			/>
			<button type='submit'>Add Superhero</button>
		</form>
	);
}
