/* eslint-disable react/prop-types */
export default function SuperheroList({ superheroes, loading, error }) {
	if (loading) {
		return <div className='mt-5 text-center'>Loading...</div>;
	}

	if (error) {
		return <div className='mt-5 text-center'>{error}</div>;
	}

	return (
		<div className='container my-4'>
			<div>
				{superheroes?.length === 0 ? (
					<p>List of Superheroes is empty. Add your first superhero.</p>
				) : (
					<div style={{ maxHeight: '400px', overflowY: 'auto' }}>
						<table className='table' style={{ width: '100%' }}>
							<thead>
								<tr>
									<th>#</th>
									<th>Superhero Name</th>
									<th>Superpower</th>
									<th>Humility Score</th>
								</tr>
							</thead>
							<tbody>
								{superheroes?.map((hero, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{hero.name}</td>
										<td>{hero.superpower}</td>
										<td>{hero.humilityScore}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}
