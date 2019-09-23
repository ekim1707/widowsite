import React, { Component } from 'react';
import data from '../data';
import CardSet from './CardSet';
import Modal from './Modal';

class Overview extends Component {
    constructor() {
        super();
        this.state = {
            heroes: data,
            modalData: ''
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
        document.getElementById('overview-tanks').style.background = 'gold';
        const tanks = data.filter(hero => hero.class.includes('Tank'));
        this.setState({
            heroes: tanks
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
            heroes: damage
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
            heroes: support
        })
    }

    all() {
        const overviewButtons = document.querySelectorAll('.btn-large');
        overviewButtons.forEach((button) => {
            button.style.background = 'lightgray';
        })
        document.getElementById('overview-all').style.background = 'gold';
        this.setState({
            heroes: data
        })
    }

    componentDidMount() {

        const navs = document.querySelectorAll('.navs');
        navs.forEach((nav) => {
            nav.classList.remove('selected-target');
        });
        document.getElementById('overview').classList.add('selected-target');
        document.getElementById('overview-all').style.background = 'gold';

        const controlClick = (e) => {

            const el = e.target;

            if (el.id === 'overview-all') {
                this.all();
            } else if (el.id === 'overview-tanks') {
                this.tanksOnly();
            } else if (el.id === 'overview-damage') {
                this.damageOnly();
            } else if (el.id === 'overview-support') {
                this.supportOnly();
            } else if (el.id === 'DV.a') {
                this.selectHero('DV.a');
            } else if (el.id === 'Orisa') {
                this.selectHero('Orisa');
            } else if (el.id === 'Reinhardt') {
                this.selectHero('Reinhardt');
            } else if (el.id === 'Roadhog') {
                this.selectHero('Roadhog');
            } else if (el.id === 'Sigma') {
                this.selectHero('Sigma');
            } else if (el.id === 'Winston') {
                this.selectHero('Winston');
            } else if (el.id === 'Wrecking-Ball') {
                this.selectHero('Wrecking-Ball');
            } else if (el.id === 'Zarya') {
                this.selectHero('Zarya');
            } else if (el.id === 'Ashe') {
                this.selectHero('Ashe');
            } else if (el.id === 'Bastion') {
                this.selectHero('Bastion');
            } else if (el.id === 'Doomfist') {
                this.selectHero('Doomfist');
            } else if (el.id === 'Genji') {
                this.selectHero('Genji');
            } else if (el.id === 'Hanzo') {
                this.selectHero('Hanzo');
            } else if (el.id === 'Junkrat') {
                this.selectHero('Junkrat');
            } else if (el.id === 'McCree') {
                this.selectHero('McCree');
            } else if (el.id === 'Mei') {
                this.selectHero('Mei');
            } else if (el.id === 'Pharah') {
                this.selectHero('Pharah');
            } else if (el.id === 'Reaper') {
                this.selectHero('Reaper');
            } else if (el.id === 'Soldier: 76') {
                this.selectHero('Soldier: 76');
            } else if (el.id === 'Sombra') {
                this.selectHero('Sombra');
            } else if (el.id === 'Symmetra') {
                this.selectHero('Symmetra');
            } else if (el.id === 'Torbjörn') {
                this.selectHero('Torbjörn');
            } else if (el.id === 'Tracer') {
                this.selectHero('Tracer');
            } else if (el.id === 'Widowmaker') {
                this.selectHero('Widowmaker');
            } else if (el.id === 'Ana') {
                this.selectHero('Ana');
            } else if (el.id === 'Baptiste') {
                this.selectHero('Baptiste');
            } else if (el.id === 'Brigitte') {
                this.selectHero('Brigitte');
            } else if (el.id === 'Lúcio') {
                this.selectHero('Lúcio');
            } else if (el.id === 'Mercy') {
                this.selectHero('Mercy');
            } else if (el.id === 'Moira') {
                this.selectHero('Moira');
            } else if (el.id === 'Zenyatta') {
                this.selectHero('Zenyatta');
            }
            
        }

        window.addEventListener('click', controlClick);
    }

    selectHero(hero) {

        this.setState({
            modalData: hero
        })
    }

    render() {
        return(
            <div className="App">
                <div className="background"></div>
                <div className="toggle-heroes row">
                    <button className="btn-large" id="overview-all">All</button>
                    <button className="btn-large" id="overview-tanks">Tank</button>
                    <button className="btn-large" id="overview-damage">Damage</button>
                    <button className="btn-large" id="overview-support">Support</button>
                </div>
                <div className="body-heroes row">
                    <div className="col s6 overflow">
                        <CardSet data={this.state.heroes}  />
                        <Modal name={this.state.modalData} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview;