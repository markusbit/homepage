import React from "react";

const Quote = ({ quote }) => {
    return (
        <div className="quote">
            <blockquote style={{padding: '0 100px', margin: '0 auto' }}>
                „{quote.text}“
                - {quote.author ? quote.author : 'Unknown'}
            </blockquote>
        </div>
    );
}

export default Quote; 