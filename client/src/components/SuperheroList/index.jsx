/* eslint-disable react/prop-types */
export default function SuperheroList({ state }) {
	if (state.data === null) {
		return <p className='my-4'>Loading list with superheroes...</p>;
	}

	return (
		<div className='container my-4'>
			<div>
				{state.data?.length === 0 ? (
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
								{state.data?.map((hero, index) => (
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
