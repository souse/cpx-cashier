
export const SEARCH_FOOD = 'SEARCH_FOOD';
export const ADD_FOOD = 'ADD_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';

export const searchFood = orderId => {
	return {
		type: 'SEARCH_FOOD',
		payload: {
			orderId
		}
	}
}

export const addFood = (orderId, food) => {
	return {
		type: 'ADD_FOOD',
		payload: {
			orderId,
			food
		}
	}
}

export const deleteFood = (orderId, food) => {
	return {
		type: 'DELETE_FOOD',
		payload: {
			orderId,
			food
		}		
	}
}
