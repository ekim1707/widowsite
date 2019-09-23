import React, { Component } from 'react';
import Card from './Card';

class CardSet extends Component {
    constructor() {
        super();
        this.state = {
            chosenCards: []
        }
    }

    render() {
        const cardList = this.props.data.map((card, i) => {
            return <Card data={card} key={i} />
        })

        return(
            <div>
                {cardList}
            </div>
        )
    }
}

export default CardSet;