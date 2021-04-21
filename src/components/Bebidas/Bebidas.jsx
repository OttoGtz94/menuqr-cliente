import { useEffect, useContext } from 'react';
import MenuContext from '../../hooks/MenuContext';
import Error from '../Error';
import ImageBebida from '../../images/imageBebida.jpg';

const Bebidas = () => {
	const bebidaContext = useContext(MenuContext);
	const {
		stBebidas,
		stBebida,
		stBebidaSeleccionada,
		stError,
		fnGetDrinks,
		fnGetDrink,
	} = bebidaContext;

	useEffect(() => {
		fnGetDrinks();
		// eslint-disable-next-line
	}, []);
	return (
		<section className='seccionMenu'>
			<h2>Bebidas</h2>
			<div className='listaCarta'>
				{stError ? <Error /> : null}
				{stBebidas.map(bebida => (
					<div className='elementoCarta' key={bebida.id}>
						<p
							className='nombre'
							onClick={() => fnGetDrink(bebida.id)}>
							{bebida.name}
						</p>
						<p className='precio'>${bebida.price}</p>
					</div>
				))}
			</div>
			<div className='extra'>
				<img
					src={
						stBebidaSeleccionada
							? stBebida[0].image
							: ImageBebida
					}
					alt=''
				/>
				{stBebidaSeleccionada ? (
					<div className='sobreElemento'>
						<h2 className='nombreElemento'>
							{stBebida[0].name}
						</h2>
						<h3>Ingredientes</h3>
						<ul>
							{stBebida[0].ingredients
								.split(',')
								.map(ingrediente => (
									<li key={ingrediente}>
										-{ingrediente.trim()}
									</li>
								))}
						</ul>
						<h3>Descripcion</h3>
						<p className='descripcion'>
							{stBebida[0].description}
						</p>
						<span>
							{Number(stBebida[0].alcoholic) !== 1
								? 'Sin alcohol'
								: 'Con alcohol'}
						</span>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default Bebidas;
