const initialState={
  booking:{}
 };

 export default function RootReducer(state=initialState,actions)
 {
    switch(actions.type)
    {
        case 'ADD_BOOKING':
        
            state.booking=actions.payload
      
            return ({booking:state.booking})
        
  
        default:
            return state

    }
 }