const initialState = {
    isReady: false, 
    items: null,
  };
  
  export default (state = initialState, action) => {
      if(action.type === "SET_BOOK"){
          return {
              ...state,
              items: action.payload,
              isReady: true
          };
      }
      if(action.type === "SET_IS_READY"){
          return{
              ...state,
              isReady: action.payload
          }
      }
      return state;
  };