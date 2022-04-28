import React, {useEffect} from 'react';

export default function Quote() {
    useEffect(() => {
        const quotes = require('../quotes.json');
        setInterval(() => {
            document.querySelector('#quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
        }, 10000);
    });

    return (
        <div>
            <p id="quote" className="text-2xl">
                It's a beautiful day to leave me alone.
            </p>
        </div>
    );
}
