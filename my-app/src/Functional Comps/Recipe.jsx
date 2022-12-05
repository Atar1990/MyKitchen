import React from "react";

export default function Recipe({ item, handleClick }) {
    return <div className="recipe" style={{ border: 'solid black 2px' }}>
        <img src={item.img} alt='lo tov' />
        <div className="title">{item.name}</div>
        <div className="calories">Calories: {item.calories}</div>
        <button onClick={() => handleClick()}>{!item.isReady ? 'prepare' : 'eat'}</button>
    </div>;
}
