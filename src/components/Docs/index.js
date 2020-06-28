import React from 'react';

const ChildTest = React.forwardRef((props, ref) => {
    return (
        <a ref={ref} style={{ position: 'absolute', top: props.index * 30 + 'px' }}>
            child
        </a>
    );
});

class HeightTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };
        this.childElem = React.createRef();
    }

    componentDidMount() {
        // Measure the height of one child
        this.setState({ height: this.childElem.current.offsetHeight });
    }

    render() {
        const { items } = this.props;
        const PADDING = 20;
        return (
            <div
                style={{
                    position: 'relative',
                    padding: PADDING,
                    border: '1px solid red',
                    height: 2 * PADDING + this.state.height * items.length + 'px',
                    maxHeight: 200,
                    overflow: 'scroll',
                }}
            >
                {items.map(item => {
                    return <ChildTest ref={this.childElem} index={item} key={item} />;
                })}
            </div>
        );
    }
}

export default function Docs() {
    const goo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <div>
            <h1>Docs!</h1>
            <HeightTest items={goo} />
            <pre />
            <h2>Props</h2>
            <ul>
                <li>items</li>
                <li>header</li>
                <li>footer</li>
                <li>staggeredAnimation</li>
                <li>onBackClick</li>
            </ul>
        </div>
    );
}
