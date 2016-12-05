import { SEARCH_FOOD, ADD_FOOD, DELETE_FOOD } from '../actions/orderDetail';

const initialState = {
	orderId: '-',
	foods: [],
	foodClass: 0,
	totalMoney: 0.00,
	discountMoney: 0.00,
	realMoney: 0.00
}

const orderDetail = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_FOOD:
			return searchFood(action.payload.orderId);
		case ADD_FOOD:
			let object = cloneDeep(state);
			let food = action.payload.food;

			return addFood(object, food);
		case DELETE_FOOD:
			let obj = cloneDeep(state);
			let fd = action.payload.food;

			return deleteFood(obj, fd);
		default:
			return state;	
	}
}

const deleteFood = (object, food) => {
	let foods = object.foods;

	for (let i = 0; i< foods.length; i++) {
		let fd = foods[i];

		if (fd.id === food.id) {
			//如果删除的food 数量 - 当前food数量
			// 0：删除， > 0 减去数量
			let ls = fd.quantity - food.quantity;
			if(ls > 0) {
				foods[i].quantity = ls;
			}else {//移除
				foods = foods.splice(0, i).concat(foods.splice(1, foods.length));		
			}
			return false;
		}
	}
	object.foods = foods;
	
	return obj;
}

const addFood = (object, food) => {
	let foods = object.foods;
	let flag = true;

	for (let i = 0; i< foods.length; i++) {
		let fd = foods[i];

		if (fd.id === food.id) {
			foods[i].quantity = fd.quantity;
			flag = false;
			break;
		}
	}
	if (flag) foods.unshift(food);
	object.foods = foods;

	return object;
}

const searchFood = id => {
	//根据id查询当前桌子的点了多少菜
	return {}
}

export default orderDetail;