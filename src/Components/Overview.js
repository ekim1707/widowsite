import React, { Component } from 'react';
import data from '../data';
import CardSet from './CardSet';

class Overview extends Component {
    constructor() {
        super();
        this.state = {
            heroes: data,
            modalData: '',
            search: ''
        }
        this.tanksOnly = this.tanksOnly.bind(this);
        this.damageOnly = this.damageOnly.bind(this);
        this.supportOnly = this.supportOnly.bind(this);
    }

    tanksOnly() {
        const overviewButtons = document.querySelectorAll('.btn-large');
        overviewButtons.forEach((button) => {
            button.style.background = 'lightgray';
        })
        document.getElementById('overview-tank').style.background = 'gold';
        const tanks = data.filter(hero => hero.class.includes('Tank'));
        this.setState({
            heroes: tanks,
            search: ''
        })
    }

    damageOnly() {
        const overviewButtons = document.querySelectorAll('.btn-large');
        overviewButtons.forEach((button) => {
            button.style.background = 'lightgray';
        })
        document.getElementById('overview-damage').style.background = 'gold';
        const damage = data.filter(hero => hero.class.includes('Damage'));
        this.setState({
            heroes: damage,
            search: ''
        })
    }

    supportOnly() {
        const overviewButtons = document.querySelectorAll('.btn-large');
        overviewButtons.forEach((button) => {
            button.style.background = 'lightgray';
        })
        document.getElementById('overview-support').style.background = 'gold';
        const support = data.filter(hero => hero.class.includes('Support'));
        this.setState({
            heroes: support,
            search: ''
        })
    }

    all() {
        const overviewButtons = document.querySelectorAll('.btn-large');
        overviewButtons.forEach((button) => {
            button.style.background = 'lightgray';
        })
        document.getElementById('overview-all').style.background = 'gold';
        this.setState({
            heroes: data,
            search: ''
        })
    }

    changeSearch = (e) => {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach((card) => {
            card.classList.remove('flip');
        })
        const overviewButtons = document.querySelectorAll('.btn-large');
        overviewButtons.forEach((button) => {
            button.style.background = 'lightgray';
        })
        if (e.target.value === '') {
            document.getElementById('overview-all').style.background = 'gold';
        }
        const heroSearch = data.filter(function (data) {
            const newHero = data.name.filter(name => name.toLowerCase().includes(e.target.value.toLowerCase()));
            if (newHero.length > 0) {
                return true
            } else {
                return false
            }
        });
        this.setState({
            heroes: heroSearch,
            search: e.target.value
        })
    }

    flipCards(type) {
        let getCards;
        if (type === 'All') {
            getCards = [].slice.call(document.querySelectorAll('.card'));
        } else {
            getCards = [].slice.call(document.querySelectorAll(`#${type}`));
        }
        if (getCards.length === 0) {
            document.getElementById(`flip-${type.toLowerCase()}`).classList.add('body-shake');
            setTimeout(() => {document.getElementById(`flip-${type.toLowerCase()}`).classList.remove('body-shake')}, 1000);
        } else {
            const newCards = getCards.filter(card => !card.classList.contains('flip'));
            if (newCards.length > 0) {
                newCards.forEach(card => card.classList.add('flip'));
            } else {
                getCards.forEach(card => card.classList.remove('flip'));
            }
        }
    }

    render() {
        return(
            <div className="App">
                <div className="background"></div>
                <div className="toggle-heroes row">
                    <button onClick={() => this.all()} className="btn-large" id="overview-all">All</button>
                    <button onClick={() => this.flipCards('All')} className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-all"><i className="material-icons">undo</i></button>
                    <button onClick={() => this.tanksOnly()} className="btn-large" id="overview-tank">Tank</button>
                    <button onClick={() => this.flipCards('Tank')} className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-tank"><i className="material-icons">undo</i></button>
                    <button onClick={() => this.damageOnly()} className="btn-large" id="overview-damage">Damage</button>
                    <button onClick={() => this.flipCards('Damage')} className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-damage"><i className="material-icons">undo</i></button>
                    <button onClick={() => this.supportOnly()} className="btn-large" id="overview-support">Support</button>
                    <button onClick={() => this.flipCards('Support')} className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-support"><i className="material-icons">undo</i></button>
                    <div className="input-field absolute">
                        <input onChange={this.changeSearch} value={this.state.search} type="text" id="overview-search" placeholder="search by name" />
                    </div>
                </div>
                <CardSet data={this.state.heroes} />
            </div>
        )
    }
}

export default Overview;