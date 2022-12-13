export const initialState = null;

export const reducer = (state, action) => {
    if(action.type == '')
    {
        return state;
        //return action.payload;
    }
    return action.payload;
    //return state;
}