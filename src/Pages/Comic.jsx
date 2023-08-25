import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CartProvider, useCart } from '../Context/CartContext'
import currency from 'currency.js';
import ComicCard from "../Components/ComicCard";
import './Comic.css'

const comicsURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const hash = import.meta.env.VITE_HASH


const Comic = () => {
    const { id } = useParams()
    const [comic, setComic] = useState(null)
    const { addToCart } = useCart()
    const exchangeRate = 5.0;
    const convertToBRL = (priceUSD) => currency(priceUSD).multiply(exchangeRate).format();

    const getComic = async (url) => {
        const res = await fetch(url)
        const data = await res.json();
        console.log(data.data.results[0])
        setComic(data.data.results[0]);
    }

    useEffect(() => {
        const comicURL = `${comicsURL}${id}?ts=1&${apiKey}&${hash}`
        console.log(comicURL)
        getComic(comicURL)
    }, [])

    return (
        <CartProvider>
            <div className='comic-page'>
                {comic && (
                    <>
                        <ComicCard comic={comic} showLink={false} />

                        <div className='comic-details'>
                            <h2>Criadores:</h2>
                            {comic.creators && comic.creators.items.length > 0 ? (
                                <ul>
                                    {comic.creators.items.map((creator) => (
                                        <li key={creator.name}>{creator.name} - {creator.role}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Criadores não disponíveis</p>
                            )}

                            <h2>Preço:</h2>
                            {comic.prices && comic.prices.length > 0 ? (
                                <div className='comic-price'>
                                    ${comic.prices[0].price}
                                    <span>ou</span>
                                    R{convertToBRL(comic.prices[0].price)}
                                </div>
                            ) : (
                                <p>Preço não disponível</p>
                            )}
                            <button className='comic-button' onClick={() => addToCart(comic)}>Adicionar ao Carrinho</button>
                        </div>
                    </>
                )}
            </div>
        </CartProvider>
    );

};

export default Comic;