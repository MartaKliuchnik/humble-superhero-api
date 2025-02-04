import 'bootstrap/dist/css/bootstrap.min.css';
import FormPage from './pages/FormPage/FormPage';
import { useSuperheroes } from './hooks/useSuperheroes';

export default function App() {
	const { superheroes, setSuperheroes, loading, setLoading, error, setError } =
		useSuperheroes();

	return (
		<main>
			<FormPage
				superheroes={superheroes}
				setSuperheroes={setSuperheroes}
				loading={loading}
				error={error}
				setLoading={setLoading}
				setError={setError}
			/>
		</main>
	);
}
