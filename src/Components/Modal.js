import React, { Component } from 'react';
import data from '../data';

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            class: '',
            quote: '',
            primaryOne: '',
            primaryTwo: '',
            abilityOne: '',
            abilityTwo: '',
            ultimate: '',
            labelOne: '',
            labelTwo: '',
            labelThree: '',
            labelFour: '',
            labelFive: '',
            description: '',
            iframe: '',
            backgroundImage: ''
        }
    }

    componentWillUnmount() {
        console.log('history');
    }

    componentDidMount() {
        const controlClick = (e) => {
            const el = e.target;

        }

        window.addEventListener('click', controlClick);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.name !== prevProps.name) {

            const newData = data.filter(hero => hero.name.includes(this.props.name));

            if (newData[0].modalData[0].abilityOne === '') {
                document.getElementById('col-hide').style.display = "none";
            } else {
                document.getElementById('col-hide').style.display = "flex";
            }
    
            this.setState({
                class: newData[0].class,
                quote: newData[0].modalData[0].quote,
                primaryOne: newData[0].modalData[0].primaryOne,
                primaryTwo: newData[0].modalData[0].primaryTwo,
                abilityOne: newData[0].modalData[0].abilityOne,
                abilityTwo: newData[0].modalData[0].abilityTwo,
                abilityThree: newData[0].modalData[0].abilityThree,
                ultimate: newData[0].modalData[0].ultimate,
                labelOne: newData[0].modalData[0].labelOne,
                labelTwo: newData[0].modalData[0].labelTwo,
                labelThree: newData[0].modalData[0].labelThree,
                labelFour: newData[0].modalData[0].labelFour,
                labelFive: newData[0].modalData[0].labelFive,
                labelSix: newData[0].modalData[0].labelSix,
                description: newData[0].modalData[0].description,
                iframe: newData[0].modalData[0].iframe,
                backgroundImage: newData[0].modalData[0].backgroundImage
            })
        }
    }

    render() {
        return(
            <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <div className="modal-row-header">
                        <div className="modal-col-left">
                            <div className="modal-title-text-background">
                                <div className="modal-title">{this.props.name}</div>
                                <div>{this.state.class}</div>
                                <div>{this.state.quote}</div>
                            </div>
                        </div>
                        <div className="modal-row-right">
                            <div className="ability-col hoverable">
                                {this.state.labelOne}
                                <img className="ability-icons" src={this.state.primaryOne} id="primary-one"/>
                            </div>
                            <div className="ability-col hoverable">
                                {this.state.labelTwo}
                                <img className="ability-icons" src={this.state.primaryTwo} id="primary-two"/>
                            </div>
                            <div className="ability-col hoverable" id="col-hide">
                                {this.state.labelThree}
                                <img className="ability-icons" src={this.state.abilityOne} id="ability-one"/>
                            </div>
                            <div className="ability-col hoverable">
                                {this.state.labelFour}
                                <img className="ability-icons" src={this.state.abilityTwo} id="ability-two"/>
                            </div>
                            <div className="ability-col hoverable">
                                {this.state.labelFive}
                                <img className="ability-icons" src={this.state.ultimate} id="ability-three"/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-row-body">
                        <div className="modal-body-left">
                            <div className="modal-description-background">
                                {this.state.description}
                            </div>
                        </div>
                        <div className="modal-iframe-right">
                            <iframe width="100%" height="100%" src={this.state.iframe} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                <img className="modal-background-image" src={this.state.backgroundImage} />
                </div>
                <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Done</a>
                </div>
            </div>
        )
    }
}

export default Modal;