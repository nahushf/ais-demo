import * as React from 'react';
import './filters.scss';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

export class Filters extends React.PureComponent<{}> {

    handleChange = () => { };

    renderFilter = (title, children, className = '') => <div className={`filter ${className || ''}`}>
        <div className="title">{title}</div>
        <div className="filter-group-wrapper">
            {children}
        </div>
    </div>

    renderFilterGroup = (label, children) =>
        <div className="filter-group">
            <label>{label}</label>
            {children}
        </div>

    render() {
        return (
            <div className="filters" >
                {this.renderFilter(
                    'Store Geographic',
                    <React.Fragment>
                        {this.renderFilterGroup('Store', <Select
                            onChange={this.handleChange}
                            options={options}
                        />)}
                        {this.renderFilterGroup('Store Location', <Select
                            onChange={this.handleChange}
                            options={options}
                        />)}
                    </React.Fragment>
                )}
                {this.renderFilter(
                    'Brand & Category',
                    <React.Fragment>
                        {this.renderFilterGroup('Brand', <Select
                            onChange={this.handleChange}
                            options={options}
                        />)}
                        {this.renderFilterGroup('Category', <Select
                            onChange={this.handleChange}
                            options={options}
                        />)}
                    </React.Fragment>
                )}
                {this.renderFilter(
                    'Customer Geographic',
                    <React.Fragment>
                        {this.renderFilterGroup('State', <Select
                            onChange={this.handleChange}
                            options={options}
                        />)}
                        {this.renderFilterGroup('District', <Select
                            onChange={this.handleChange}
                            options={options}
                        />)}
                        {this.renderFilterGroup('Sub District', <Select
                            onChange={this.handleChange}
                            options={options}
                        />)}
                    </React.Fragment>
                )}
                {this.renderFilter(
                    'Panel Selection',
                    <React.Fragment>
                        {this.renderFilterGroup(
                            'Continuous Panel',
                            <input type="radio" />
                        )}
                        {this.renderFilterGroup(
                            'All Panel',
                            <input type="radio" />
                        )}
                    </React.Fragment>,
                    'panel-selection'
                )}
            </div>
        );
    }
}