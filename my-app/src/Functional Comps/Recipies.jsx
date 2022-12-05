import React from "react";
import Recipe from "./Recipe";

export default function Recipies(props) {

    const handleClick = (itemId) => {
        props.onClick(itemId)
    }

    return <div className="recipes">
        {props.list.map(item => {
            return (
                <Recipe key={item.id} item={item} handleClick={() => handleClick(item.id)}></Recipe>
            )
        })}
    </div>
}
