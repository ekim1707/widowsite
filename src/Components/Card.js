import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        var instances = window.M.Modal.init(elems);
    }

    render() {
        return (
            <div className="col s2">
                <a className="waves-effect waves-light card hoverable small modal-trigger" href="#modal1">
                    <div className="card-image" id={this.props.data.name}>
                        <img className="hero-image" src={this.props.data.image} alt="card" id={this.props.data.name} />
                    </div>
                    <div className="card-content">
                        <p>{this.props.data.name}</p>
                        <p>{this.props.data.class}</p>
                    </div>
                </a>
            </div>
        )
    }

}

export default Card;