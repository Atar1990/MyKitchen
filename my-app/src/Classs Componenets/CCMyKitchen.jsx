import React, { useState } from "react";
import Recipies from "../Functional Comps/Recipies";

export default function MyKitchen() {

    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Burekas',
            img: './picturs/burekasChicken.png',
            calories: 876,
            isReady: false
        },
        {
            id: 2,
            name: 'Pasta',
            img: './picturs/pastaSussage.png',
            calories: 444,
            isReady: false
        },
        {
            id: 3,
            name: 'Carrot',
            img: './picturs/carrot.jpeg',
            calories: 100,
            isReady: false
        }
    ])

    function setReadyOnItem(id) {
        // runnig over the list 
        // copy item
        // change isReady if id match
        // save new item
        setItems(items.map(item => {
            const newItem = { ...item };
            if (newItem.id === id)
                item.isReady = !item.isReady;
            return item;
        }))
    }

    return (
        <>
            <div>Recipes made: {items.filter(item => !item.isReady).length}</div>
            <Recipies list={items.filter(item => !item.isReady)} onClick={(id) => { setReadyOnItem(id) }}></Recipies>

            <div>Recipes made: {items.filter(item => item.isReady).length}</div>
            <Recipies list={items.filter(item => item.isReady)} onClick={(id) => { setReadyOnItem(id) }}></Recipies>
        </>
    );
}
