import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ZenQuote = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await axios.get('https://zenquotes.io/api/random');
                setQuote(response.data[0].q + " - " + response.data[0].a);
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        fetchQuote();
    }, []);

    return (
        <div>
            <p>{quote}</p>
        </div>
    );
};

export default ZenQuote;