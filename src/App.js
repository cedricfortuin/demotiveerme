import React, {useEffect} from 'react';

export default function Quote() {
    useEffect(() => {
        const quotes = require('../quotes.json');
        document.querySelector('#quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
        setInterval(() => {
            document.querySelector('#quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
        }, 7500);
    });

    return (
        <div>
            <p id="quote" className="text-2xl"></p>
        </div>
    );
}
