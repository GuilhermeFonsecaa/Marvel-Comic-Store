import { useState, useEffect } from 'react'
import ComicCard from '../Components/ComicCard';

const comicURL = import.meta.env.VITE_API_LIST_COMICS;
const apiKey = import.meta.env.VITE_API_KEY;
const hash = import.meta.env.VITE_HASH

const Home = () => {
    const [comics, setComics] = useState([])

    const getComics = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
       
        setComics(data.data.results) 
       
    }

    useEffect(() => {
        const comicsURL = `${comicURL}ts=1&${apiKey}&${hash}`
        getComics(comicsURL);
    }, [])

    return (
        <div className='container'>
            <h2 className='title'>Histórias Em Quadrinhos:</h2>
            <div className='comics-container'>
                {comics.length === 0 && <p>Carregando...</p>}
                {comics.length > 0 && comics.map((comic => <ComicCard key={comic.id} comic={comic} />))}
            </div>
        </div>
    )

}

export default Home;