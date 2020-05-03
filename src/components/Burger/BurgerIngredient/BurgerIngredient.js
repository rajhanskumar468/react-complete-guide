import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css'

class BurgerIngredient extends Component {
    render() {
        let ingedient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingedient = <div className="BreadBottom"></div>
                break;
            case ('bread-top'):
                ingedient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
                case ('cheese'):
                    ingedient = <div className="Cheese" />
                    break;

                case ('meat'):
                        ingedient = <div className="Meat" />
                        break;
            default:
                ingedient = null;
        }
        return ingedient;
    }

}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredient;