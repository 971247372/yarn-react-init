

const logices=(store)=>{
	store.dispatch({ type: '123' });
	// 1
	store.dispatch({ type: '456' });
	// 2
	store.dispatch({ type: '789' });
}
export default logices;