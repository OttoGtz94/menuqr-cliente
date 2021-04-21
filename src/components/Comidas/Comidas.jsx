import { useEffect, useContext } from 'react';
import MenuContext from '../../hooks/MenuContext';
import Error from '../Error';
import ImageComida from '../../images/imageComida.jpg';

const Comidas = () => {
	const comidaContext = useContext(MenuContext);
	const {
		stComidas,
		stComida,
		stComidaSeleccionada,
		stError,
		fnGetFoods,
		fnGetFood,
	} = comidaContext;

	useEffect(() => {
		fnGetFoods();
		// eslint-disable-next-line
	}, []);
	return (
		<section className='seccionMenu'>
			<h2>Comidas</h2>
			<div className='listaCarta'>
				{stError ? <Error /> : null}
				{stComidas.map(comida => (
					<div className='elementoCarta' key={comida.id}>
						<p
							className='nombre'
							onClick={() => fnGetFood(comida.id)}>
							{comida.name}
						</p>
						<p className='precio'>${comida.price}</p>
					</div>
				))}
			</div>
			<div className='extra'>
				<img
					src={
						stComidaSeleccionada
							? stComida[0].image
							: ImageComida
					}
					alt=''
				/>
				{stComidaSeleccionada ? (
					<div className='sobreElemento'>
						<h2 className='nombreElemento'>
							{stComida[0].name}
						</h2>
						<h3>Ingredientes</h3>
						<ul>
							{stComida[0].ingredients
								.split(',')
								.map(ingrediente => (
									<li key={ingrediente}>
										-{ingrediente.trim()}
									</li>
								))}
						</ul>
						<h3>Descripción</h3>
						<p className='descripcion'>
							{stComida[0].description}
						</p>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default Comidas;
