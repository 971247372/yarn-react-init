//require('./actions')

const initState=[{
  user:"dd"
}]
const initAction={
  type:"Done"
}
const reducers=(state = initState, action=initAction)=> {
  
  switch (action.type) {
      
      case '123':
              
          return state;
      default:
          return [{user:"aa"}];
  }
};
export default reducers;