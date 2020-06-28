import React from 'react';
import './Concept.css';
import controllerImage from './controller.svg';
export default function Concept() {
    const classes = [
        'RddItem-animateOutToRight',
        'RddItem-animateOutToLeft',
        'RddItem-animateInFromLeft',
        'RddItem-animateInFromRight',
    ];
    return (
        <section className="Concept">
            <div className="Concept-inner">
                <h1>The Concept</h1>
                <p>
                    The <code>react-drilldown</code> is actually quite simple. It displays a list of items (passed in as
                    an array) and when it recevies a new list of items, it applies a CSS class to the old + new items.
                    You can add which ever styles (and css animations) to these classes.
                </p>
                <h2>CSS Classes</h2>
                <p>The four CSS classes you're able to style are:</p>
                <ul>
                    {classes.map(item => (
                        <li key={item}>
                            <code>{item}</code>
                        </li>
                    ))}
                </ul>
                <p>If you want to use the basic slide in / out as shown in these docs, get them here.</p>
                <h2>Controller</h2>
                <p>
                    How you organise the data to be displayed in <code>react-drilldown</code> is entirely up to you. The
                    'controller' could be returning a bunch of <code>&lt;Link&gt;</code> components from{' '}
                    <code>react-router</code>, a simple list of strings* or your own React components.
                </p>
                <img style={{ display: 'block', margin: '0 auto' }} src={controllerImage} alt="Visualisation of controller" />
            </div>
        </section>
    );
}
