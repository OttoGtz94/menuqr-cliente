import {
	GET_FOODS,
	GET_DRINKS,
	GET_PROMOS,
	GET_FOOD,
	GET_DRINK,
	ERROR,
} from '../types';

//eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_FOODS:
			return {
				...state,
				stComidas: action.payload,
				stError: false,
			};
		case GET_DRINKS:
			return {
				...state,
				stBebidas: action.payload,
				stError: false,
			};
		case GET_PROMOS:
			return {
				...state,
				stPromos: action.payload,
				stError: false,
			};
		case GET_FOOD:
			return {
				...state,
				stComida: state.stComidas.filter(
					comida => comida.id === action.payload,
				),
				stComidaSeleccionada: true,
			};
		case GET_DRINK:
			return {
				...state,
				stBebida: state.stBebidas.filter(
					bebida => bebida.id === action.payload,
				),
				stBebidaSeleccionada: true,
			};
		case ERROR:
			return {
				...state,
				stError: true,
			};
		default:
			break;
	}
};
