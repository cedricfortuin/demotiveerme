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
        <div className="w-5/6 mx-auto md:w-screen">
            <p id="quote" className="text-2xl"></p>
        </div>
    );
}
