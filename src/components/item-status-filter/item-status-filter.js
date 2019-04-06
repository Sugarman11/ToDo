import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    
    render() {
        return (
            <div className="btn-group item-status-filter-btn-group" 
                 role="group" 
                 aria-label="Basic example">
    
                <button className="btn btn-info item-status-filter-btn">
                    Все
                </button>
    
                <button className="btn btn-outline-secondary item-status-filter-btn">
                    Активные
                </button>
    
                <button className="btn btn-outline-secondary item-status-filter-btn">
                    Выполненные
                </button>
                
            </div>
        );
    };
};