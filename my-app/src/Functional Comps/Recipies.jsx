import React from "react";
import Recipe from "./Recipe";

export default function Recipies(props) {

    return <div className="recipes">
        {props.list.map(item => {
            return (
                <Recipe key={item.id} item={item} handleClick={() => props.onClick(item.id)}></Recipe>
            )
        })}
    </div>
}
