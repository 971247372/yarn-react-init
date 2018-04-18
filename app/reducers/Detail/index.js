
const initState=[{
    user:"dd"
  }]
  const initAction={
    type:"Done"
  }
  const reducers=(state = initState, action=initAction)=> {
    switch (action.type) {
        
        case 'detail':   
            console.log("detail收到")    
            return initState;
        default:
            return [{user:"aa"}];
    }
  };
  export default reducers;
  