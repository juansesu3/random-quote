import React, { useState, useEffect } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

const QuoteCard = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [allQuotes, setAllQuotes] = useState([]);
    const [bgColor, setBgColor] = useState("#ffffff");
    const [isFading, setIsFading] = useState(false);

    const getRandomQuote = (quotesArray) => {
        setIsFading(true); // Inicia la animación de salida

        setTimeout(() => {
            const random = quotesArray[Math.floor(Math.random() * quotesArray.length)];
            setQuote(random.quote);
            setAuthor(random.author);
            setBgColor(random.color);
            document.body.style.backgroundColor = random.color;

            setIsFading(false); // Inicia la animación de entrada
        }, 600); // Espera a que termine el fade-out
    };

    const fetchQuotes = async () => {
        try {
            const res = await fetch("/quotes.json");
            const data = await res.json();
            setAllQuotes(data);
            getRandomQuote(data);
        } catch (error) {
            setQuote("Something went wrong!");
            setAuthor("Unknown");
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <>
            <div id="quote-box" className="quote-card">
                <div className={isFading ? "fade-out" : "fade-in"}>
                    <p style={{ color: bgColor }} id="text"><FaQuoteLeft style={{ paddingLeft: '1rem' }} /> {quote}</p>
                    <p style={{ color: bgColor }} id="author">- {author}</p>
                </div>

                <div className="quote-card__buttons">
                    <div className="quote-card__buttons--share">
                        <a
                            id="tweet-quote"
                            style={{ backgroundColor: bgColor }}
                            href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            id="tweet-quote"
                            style={{ backgroundColor: bgColor }}
                            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,inspiration&caption=${encodeURIComponent(author)}&content=${encodeURIComponent(quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Tumblr"
                        >
                            <FaTumblr />
                        </a>
                    </div>
                    <div className="quote-card__buttons--new">
                        <button
                            id="new-quote"
                            style={{ backgroundColor: bgColor }}
                            onClick={() => getRandomQuote(allQuotes)}
                            disabled={isFading} // Previene múltiples clics mientras está animando
                        >
                            New quote
                        </button>
                    </div>
                </div>


            </div>
            <div className='developer'>
                <a href='https://negiupp.com/' target='_blank' >by juan suarez</a>
            </div>
        </>
    );
};

export default QuoteCard;
