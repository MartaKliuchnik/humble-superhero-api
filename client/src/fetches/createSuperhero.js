export const createSuperhero = async ({ name, superpower, humilityScore }) => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_SERVER_URL}/api/v1/superheroes`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, superpower, humilityScore }),
			}
		);
		if (!response.ok) {
			throw new Error(`Failed to create superhero`);
		}

		return await response.json();
	} catch (error) {
		console.error(error);
		return [];
	}
};
