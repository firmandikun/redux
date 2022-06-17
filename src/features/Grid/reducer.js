import { ADD_TILE, DELETE_TILE } from "./constatns";


const initialState = [];
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TILE:
            
            const nextId = state.length + 1;
            const newTile = {id: nextId, color: action.color};
            return [...state, newTile];

        case DELETE_TILE:
            return state.filter(tile => tile.id !== action.id);
    
        default:
            return state
    }
}


export default reducer