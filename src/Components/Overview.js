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
            console.log(newHero.length);
            if (newHero.length > 0) {
                return true
            } else {
                return false
            }
        });
        console.log(heroSearch);
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
        console.log(getCards);
        if (getCards.length === 0) {
            console.log('----++++---')
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

    componentDidMount() {
        document.getElementById('overview-all').style.background = 'gold';

        const controlClick = (e) => {

            const el = e.target;

            if (el.id === 'overview-all') {
                this.all();
            } else if (el.id === 'overview-tank') {
                this.tanksOnly();
            } else if (el.id === 'overview-damage') {
                this.damageOnly();
            } else if (el.id === 'overview-support') {
                this.supportOnly();
            } else if (el.id === 'flip-all') {
                this.flipCards('All');
            } else if (el.id === 'flip-tank') {
                this.flipCards('Tank');
            } else if (el.id === 'flip-damage') {
                this.flipCards('Damage');
            } else if (el.id === 'flip-support') {
                this.flipCards('Support');
            }
            
        }

        window.addEventListener('click', controlClick);
    }

    render() {
        return(
            <div className="App">
                <div className="background"></div>
                <div className="toggle-heroes row">
                    <button className="btn-large" id="overview-all">All</button>
                    <button className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-all"><i className="material-icons">undo</i></button>
                    <button className="btn-large" id="overview-tank">Tank</button>
                    <button className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-tank"><i className="material-icons">undo</i></button>
                    <button className="btn-large" id="overview-damage">Damage</button>
                    <button className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-damage"><i className="material-icons">undo</i></button>
                    <button className="btn-large" id="overview-support">Support</button>
                    <button className="btn-floating btn-large waves-effect waves-light hoverable gray" id="flip-support"><i className="material-icons">undo</i></button>
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