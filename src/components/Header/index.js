import React from 'react';
import './Header.css';
import favIcon from './favicon.svg';

export default function Header() {
    return (
        <header className="Header">
            <div className="Header-inner">
                <h1>
                    <img src={favIcon} alt="React Drilldown logo" style={{ width: 32, height: 32, marginLeft: -40 }} />{' '}
                    React-Drilldown
                </h1>
                <h2>An iOS-style data-driven Drilldown Menu for React.</h2>
            </div>
        </header>
    );
}

export function SubHeader() {
    return (
        <div className="Header-subheader">
            <div className="Header-inner">
                <a href="https://github.com/lucastobrazil/react-drilldown">Code and Docs on GitHub</a>
                <iframe
                    src="https://ghbtns.com/github-btn.html?user=lucastobrazil&repo=react-drilldown&type=star&count=true&size=large"
                    frameBorder="0"
                    scrolling="0"
                    width="160px"
                    height="30px"
                    title="Star Me!"
                />
            </div>
        </div>
    );
}
