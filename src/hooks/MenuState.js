import { useReducer } from 'react';
import menuContext from './MenuContext';
import menuReducer from './MenuReducer';
import clienteAxios from '../config/axios';
import {
	GET_FOODS,
	GET_DRINKS,
	GET_PROMOS,
	GET_FOOD,
	GET_DRINK,
	ERROR,
} from '../types';

const MenuState = props => {
	const initialState = {
		stComidas: [],
		stBebidas: [],
		stPromos: [],
		stComida: [],
		stBebida: [],
		stError: false,
		stComidaSeleccionada: false,
		stBebidaSeleccionada: false,
	};

	const [state, dispatch] = useReducer(
		menuReducer,
		initialState,
	);

	const fnGetFoods = async () => {
		try {
			const resultado = await clienteAxios.get('/comidas');
			// console.log(resultado);
			dispatch({
				type: GET_FOODS,
				payload: resultado.data.comidas,
			});
		} catch (error) {
			dispatch({
				type: ERROR,
			});
		}
	};

	const fnGetFood = async id => {
		dispatch({
			type: GET_FOOD,
			payload: id,
		});
	};

	const fnGetDrinks = async () => {
		try {
			const resultado = await clienteAxios.get('/bebidas');
			// console.log(resultado.data.bebidas);
			dispatch({
				type: GET_DRINKS,
				payload: resultado.data.bebidas,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const fnGetDrink = async id => {
		dispatch({
			type: GET_DRINK,
			payload: id,
		});
	};

	const fnGetPromos = async () => {
		try {
			const resultado = await clienteAxios.get('/promos');
			// console.log(resultado.data.promos);
			dispatch({
				type: GET_PROMOS,
				payload: resultado.data.promos,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<menuContext.Provider
			value={{
				stComidas: state.stComidas,
				stBebidas: state.stBebidas,
				stPromos: state.stPromos,
				stComida: state.stComida,
				stBebida: state.stBebida,
				stComidaSeleccionada: state.stComidaSeleccionada,
				stBebidaSeleccionada: state.stBebidaSeleccionada,
				stError: state.stError,
				fnGetFoods,
				fnGetFood,
				fnGetDrinks,
				fnGetDrink,
				fnGetPromos,
			}}>
			{props.children}
		</menuContext.Provider>
	);
};

export default MenuState;
