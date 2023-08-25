import { Link } from 'react-router-dom'
import '../Pages/Comic.css'

const ComicCard = ({ comic, showLink = true }) => {

    const imageUrl = comic.thumbnail ? `${comic.thumbnail.path}.${comic.thumbnail.extension}` : '';

    return (
        <div className="comic-container">
            <div className='comic-card'>
                <img src={imageUrl} alt={comic.title} />
                <h2>{comic.title}</h2>
                    {showLink && <Link to={`comic/${comic.id}`}>Detalhes</Link>}
            </div>
        </div>
    );
};

export default ComicCard;