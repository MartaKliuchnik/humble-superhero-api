import { Link } from 'react-router-dom';

export default function SuperheroList({ superheroes }) {
	return (
		<div className='container my-4 mt-5'>
			<h2 className='text-center mb-4'>Humble Superhero Leaderboard</h2>
			<div className='text-center'>
				<p className='mb-0'>
					Discover the top superheroes ranked by their humility scores. See who
					stands out not just in power, but in character.
				</p>

				<p className='mb-4'>
					Think your hero has what it takes? Add them to the leaderboard now!
				</p>
				<Link to='/add-superhero' className='btn btn-primary'>
					Add Your Superhero
				</Link>
			</div>

			<div className='row justify-content-center'>
				<div className='col-lg-8 col-md-10'>
					<div className='table-responsive'>
						<table className='table table-striped table-hover'>
							<thead className='thead-dark'>
								<tr>
									<th scope='col' className='text-center'>
										#
									</th>
									<th scope='col' className='text-center'>
										Superhero Name
									</th>
									<th scope='col' className='text-center'>
										Superpower
									</th>
									<th scope='col' className='text-center'>
										Humility Score
									</th>
								</tr>
							</thead>
							<tbody>
								{superheroes.map((hero, index) => (
									<tr key={hero.id}>
										<th scope='row' className='text-center'>
											{index + 1}
										</th>
										<td className='text-center'>{hero.name}</td>
										<td className='text-center'>{hero.superpower}</td>
										<td className='text-center'>{hero.humilityScore}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
