const initialState = {
  test:0 
}


const counterReducer = (state = initialState.test, action) => {
    switch(action.type) {
      case 'INCREMENT':
          console.log(234, state);
        return state + action.payload;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
};

export default counterReducer;
  