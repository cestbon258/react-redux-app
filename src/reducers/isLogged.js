const testData = {
  test: 123
}

const loggedReducer = (state = testData, action) => {

// const loggedReducer = (state = false, action) => {

    switch(action.type) {
        case 'SIGN_IN':
          console.log(234, state);
          return state;
        default:
          return state;
    }
};


export default loggedReducer;
  