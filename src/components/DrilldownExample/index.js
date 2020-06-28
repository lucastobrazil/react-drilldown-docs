import React, { Component, useState } from 'react';
import { Drilldown, DrilldownButton } from 'react-drilldown';
import { mapValues } from 'lodash/fp';
import './style.css';
import { sampleData } from './sampleData';

export default class StatefulExample extends Component {
    constructor() {
        super();
        this.state = {
            staggered: true,
            selected: 'foodType',
        };

        this.data = sampleData({ onSelect: this.onSelect });

        this.items = mapValues(item => {
            return {
                ...item,
                children: item.children.map(name => this.data[name].component),
            };
        }, this.data);
    }

    toggleStaggered = () => {
        const { staggered } = this.state;
        this.setState({ staggered: !staggered });
    };

    onSelect = name => this.setState({ selected: name });

    render() {
        const { selected, staggered } = this.state;
        const itemComponents = this.items[selected].children;
        const currentTitle = this.items[selected].title;
        const parent = this.items[selected].parent;
        return (
            <div>
                <div className="Example-container Example-custom-height">
                    <Drilldown
                        header={currentTitle}
                        footer={`${itemComponents.length} items`}
                        items={itemComponents}
                        itemHeight={81}
                        staggeredAnimation={staggered}
                        onBackClick={parent ? () => this.onSelect(parent) : null}
                    />
                </div>
                <p>
                    <label>
                        <input type="checkbox" checked={this.state.staggered} onChange={this.toggleStaggered} />
                        Staggered Animation
                    </label>
                </p>
            </div>
        );
    }
}

export function CustomHeightExample() {
    const genres = [
        () => <DrilldownButton onClick={() => setData({ page: 'types', data: types })}>Comedy</DrilldownButton>,
        () => <DrilldownButton onClick={() => setData({ page: 'types', data: types })}>Romance</DrilldownButton>,
    ];
    const types = [
        () => <DrilldownButton onClick={() => setData({ page: 'genres', data: genres })}>TV Shows</DrilldownButton>,
        () => <DrilldownButton onClick={() => setData({ page: 'genres', data: genres })}>Movies</DrilldownButton>,
        () => <DrilldownButton onClick={() => setData({ page: 'genres', data: genres })}>Books</DrilldownButton>,
    ];

    const genresState = { page: 'genres', data: genres };
    const typesState = { page: 'types', data: types };

    const [content, setData] = useState({ page: 'types', data: types });
    const setBackAction = ({ page }) => (page === 'genres' ? typesState : genresState);
    return (
        <div className="Example-container">
            <Drilldown
                header="Custom Height"
                items={content.data}
                onBackClick={() => setData(setBackAction(content))}
            />
        </div>
    );
}
