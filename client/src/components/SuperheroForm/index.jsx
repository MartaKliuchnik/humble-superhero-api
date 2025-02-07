/* eslint-disable react/prop-types */

export default function SuperheroForm({ state, submitAction, isPending }) {
	return (
		<form action={submitAction} className='mb-4'>
			<div className='row mb-3'>
				<div className='col-md-4'>
					<input
						type='text'
						className='form-control'
						placeholder='Superhero Name'
						name='name'
						disabled={isPending}
					/>
				</div>

				<div className='col-md-4'>
					<input
						type='text'
						className='form-control'
						placeholder='Superhero Power'
						name='superpower'
						disabled={isPending}
					/>
				</div>

				<div className='col-md-4'>
					<input
						type='number'
						className='form-control'
						placeholder='Humility Score'
						name='humilityScore'
						disabled={isPending}
					/>
				</div>
			</div>

			<div className='row justify-content-center'>
				{state.error && (
					<p className='mt-2 small' style={{ color: 'red' }}>
						{state.error}
					</p>
				)}
				<div className='col-md-4'>
					<button
						type='submit'
						className='btn btn-primary w-100'
						disabled={isPending}
					>
						{isPending ? 'Adding...' : 'Add Superhero'}
					</button>
				</div>
			</div>
		</form>
	);
}
