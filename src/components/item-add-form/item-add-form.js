import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddedItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {

        return (
            <form className="item-add-form d-flex item-add-form-container"
                  onSubmit={ this.onSubmit }>
                <input type="text"
                    className="form-control item-add-form-input"
                    onChange={ this.onLabelChange }
                    value={ this.state.label }
                    placeholder="Добавить">
                </input>
                <button type="submit"
                        className="btn btn-outline-secondary item-add-form-btn">
                        Добавить
                </button>
            </form>
        );
    };
};