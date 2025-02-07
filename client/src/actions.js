import { createSuperhero } from './fetches/createSuperhero';
import { getAllSuperheroes } from './fetches/getAllSuperheroes';

export async function addSuperhero(prevState, formData) {
	const name = formData.get('name');
	const superpower = formData.get('superpower');
	const humilityScore = formData.get('humilityScore');

	if (!name || !superpower || !humilityScore) {
		return {
			...prevState,
			error: 'All fields are required and cannot be empty.',
		};
	}

	if (humilityScore < 1 || humilityScore > 10) {
		return {
			...prevState,
			error: 'Humility Score must be between 1 and 10.',
		};
	}

	const newSuperhero = {
		name,
		superpower,
		humilityScore: Number(humilityScore),
	};

	try {
		const superhero = await createSuperhero(newSuperhero);
		if (superhero) {
			const responce = await getAllSuperheroes();
			return { data: responce, error: null };
		}
	} catch {
		return { ...prevState, error: 'Failed to add new superhero.' };
	}
}
