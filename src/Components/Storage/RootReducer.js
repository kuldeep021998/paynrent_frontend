const initialState={
  booking:{},
  userDetails:{}
 };

 export default function RootReducer(state=initialState,actions)
 {
    switch(actions.type)
    {
        case 'ADD_BOOKING':
        
            state.booking=actions.payload
      
            return ({booking:state.booking, userDetails:state.userDetails})
        
        case 'ADD_USER':

            state.userDetails[actions.payload[0]] = actions.payload[1]

            return ({booking:state.booking, userDetails:state.userDetails})
        

        default:
            return state

    }
 }