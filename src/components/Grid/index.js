import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTile, deletTile } from "../../features/Grid/actons";
import AddTileButton from "../AddTileButton";
import Tile from "../Tile";
const colors = ["red", "blue", "pink", "yellow", "gray"];
export default function Grid() {
	let gridTiles = useSelector((state) => state.grid);
    let dispatch = useDispatch(); 	
	return (
		<div>
			<div style={{ maxWidth: 400, overflow: "hidden" }}>
				{gridTiles.map((tile, index) => {
					return <Tile {...tile} key={index} onDoubleClick={_ => dispatch(deletTile(tile.id))} />;
				})}
			</div>
			<br />
			<div>
				{colors.map((color) => {
					return <AddTileButton key={color} color={color} onClick={_ => dispatch(addTile(color))}   />
				})}
			</div>
		</div>
	);
}
