import { SHOW_MENU } from "./constants"

const initialState ={
   show:false
}
const reducer=(state=initialState,action)=>{
switch(action.type){
    case SHOW_MENU : return{
        ...state,show:!state.show
    }
    default: return state;
}
}
export default reducer;