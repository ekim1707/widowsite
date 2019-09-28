import React, { Component } from 'react';
import Card from './Card';
import Modal from './Modal';

class CardSet extends Component {
    constructor() {
        super();
        this.state = {
            chosenCards: [],
            modalData: ''
        }
    }

    selectHero(hero) {
        this.setState({
            modalData: hero
        })
    }

    render() {
        const cardList = this.props.data.map((card, i) => {
            return (
                <div key={i}>
                    <Card data={card} />
                    <button onClick={() => {this.selectHero(card.name[0])}} data-target="modal1" className="btn hoverable modal-trigger">game info</button>
                </div>
            )
        })

        return(
            <div className="body-heroes row">
                {cardList}
                <Modal name={this.state.modalData} />
            </div>
        )
    }
}

export default CardSet;