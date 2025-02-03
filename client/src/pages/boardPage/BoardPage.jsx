import SuperheroList from '../../components/SuperheroList';

export default function BoardPage({ superheroes }) {
	return (
		<div>
			<SuperheroList superheroes={superheroes} />
		</div>
	);
}
