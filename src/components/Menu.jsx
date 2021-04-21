// import Promos from './Promos/Promos';
import Comidas from './Comidas/Comidas';
import Bebidas from './Bebidas/Bebidas';
const Menu = () => {
	return (
		<div className='menu'>
			<h1>Cofarob</h1>
			<p className='instruccion'>
				Selecciona un platillo para verlo
			</p>
			<Comidas />
			<Bebidas />
			{/* <Promos /> */}
		</div>
	);
};

export default Menu;
