import { ADD_TILE, DELETE_TILE } from "./constatns";


export function addTile(color) {
    return {
        type: ADD_TILE,
        created_at: Date.now(),
        color
    }
}


export function deletTile(id) {
    return {
        type : DELETE_TILE,
        id
    }
}