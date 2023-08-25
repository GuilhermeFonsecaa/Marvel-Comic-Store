import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import ComicCard from '../Components/ComicCard';

import './Search.css'

const searchURL = import.meta.env.VITE_API_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const hash = import.meta.env.VITE_HASH


const Search = () => {

    const [searchParams] = useSearchParams();
    const [comics, setComics] = useState([]);
    const query = searchParams.get("q");

    const getSearchComics = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(comics)
        setComics(data.data.results);
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}${query}&ts=1&${apiKey}&${hash}`;
        getSearchComics(searchWithQueryURL);
    }, [query]);

    return (
        <div className='container'>
            <h2 className='title'>
                Resultados para: <span className='query-text'>{query}</span>
            </h2>

            <div className='comic-container'>
                {comics.length > 0 && comics.map((comic) => <ComicCard key={comic.id} comic={comic} showLink={true} />)}
            </div>

        </div>
    )

}

export default Search;