import { SEARCH_CLICK } from "./constants"

const initialState ={
   widthfull:false
}
const reducer=(state=initialState,action)=>{
switch(action.type){
    case SEARCH_CLICK : return{
        ...state,widthfull:!state.widthfull
    }
    default: return state;
}
}
export default reducer;