import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            flipClass: ''
        }
    }

    flip = (e) => {
        let newFlip = this.state.flipClass === '' ? 'flip' : '';
        this.setState({
            flipClass: newFlip
        })
    }

    render() {
        const occupations = this.props.data.occupation.map((occupation, i) => {
            return <li key={i}>{occupation}</li>
        });
        return (
            <div className="card-holder">
                <div onClick={this.flip} className={`card small ${this.state.flipClass}`} id={this.props.data.class}>
                    <div className="card-back hoverable">
                        <div className="card-image" id={this.props.data.name[0]}>
                            <img className="hero-image" src={this.props.data.image[0]} alt="card" id={this.props.data.name[0]} />
                        </div>
                        <div className="card-content">
                            <p className="larger-font">{this.props.data.name[0]}</p>
                            <p className="smaller-font">{this.props.data.class}</p>
                        </div>
                    </div>
                    <div className="card-front hoverable">
                        <div className="card-front-image-div">
                            <img src={this.props.data.image[1]} className="card-front-background-image" alt="" />
                        </div>
                        <ul className="card-front-information">
                            <span className="card-front-title-name">{this.props.data.name[0].toUpperCase()}</span>
                            <li className="selected-font-toggle">REAL NAME:</li>
                            <li>{this.props.data.name[1]}</li>
                            <li className="selected-font-toggle">AGE:</li>
                            <li>{this.props.data.age}</li>
                            <li className="selected-font-toggle">HEIGHT:</li>
                            <li>{this.props.data.height}</li>
                            <li className="selected-font-toggle">NATIONALITY:</li>
                            <li>{this.props.data.nationality}</li>
                            <li className="selected-font-toggle">OCCUPATION(S):</li>
                            {occupations}
                            <li className="selected-font-toggle">VOICE:</li>
                            <li>{this.props.data.voice}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card;