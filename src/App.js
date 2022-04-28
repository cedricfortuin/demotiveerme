import React, {useEffect} from 'react';

export default function Quote() {
    useEffect(() => {
        const quotes = require('../quotes.json');
        document.querySelector('#quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    });

    return (
        <div className="mt-24 space-y-16">
            <div>
                <h1 className="text-6xl font-bold">Demotiveer.me</h1>
            </div>
            <p id="quote" className="text-2xl">
                Yeet quote
            </p>
        </div>
    );
}
