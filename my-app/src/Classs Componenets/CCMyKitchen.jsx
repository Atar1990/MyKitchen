import React from "react";
import Recipies from "../Functional Comps/Recipies";

export default class MyKitchen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
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
            ]
        };
    }
    // runnig over the list 
    // copy item
    // change isReady if id match
    // save new item
    setReadyOnItem(id) {
        this.setState(this.state.list.map(item => {
            const newItem = { ...item };
            if (newItem.id === id)
                item.isReady = !item.isReady;
            return item;
        }))
    }

    render() {
        return (
            <>
                <div>Recipes made: {this.state.list.filter(item => !item.isReady).length}</div>
                <Recipies list={this.state.list.filter(item => !item.isReady)} onClick={(id) => { this.setReadyOnItem(id) }}></Recipies>

                <div>Recipes made: {this.state.list.filter(item => item.isReady).length}</div>
                <Recipies list={this.state.list.filter(item => item.isReady)} onClick={(id) => { this.setReadyOnItem(id) }}></Recipies>
            </>
        );
    }
}
