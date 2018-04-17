

const logices=(store)=>{
	store.dispatch({ type: 'INCREMENT' });
	// 1
	store.dispatch({ type: 'INCREMENT' });
	// 2
	store.dispatch({ type: 'DECREMENT' });
}
export default logices;