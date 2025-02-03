export const getAllSuperheroes = async () => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_SERVER_URL}/api/v1/superheroes`,
			{
				method: 'GET',
			}
		);

		if (!response.ok) {
			throw new Error('Failed to fetch superheroes');
		}

		const superheroes = await response.json();
		return superheroes;
	} catch (error) {
		console.error(error);
		return [];
	}
};
