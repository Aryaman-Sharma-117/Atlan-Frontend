import React, { useContext } from 'react';
import favContext from './FavContext';

export default function DetailsFormat(props) {
    const favModels = useContext(favContext);

    const isFav = favModels.fav.some(item => item.name === props.model.name);

    function remove() {
        favModels.setFav(prevFavModels => prevFavModels.filter(e => e.name !== props.model.name));
    }

    function add() {
        favModels.setFav(prevItem => [...prevItem, props.model]);
    }

    return (
        <div className="details-container">
            <h2>{props.model.name}</h2>
            <img src={props.model.img} alt='' className='logocont' />
            <h6>It is of the type: {props.model.type}</h6>
            <p>{props.model.about}</p>
            <a href={props.model.link}>{props.model.link}</a>
            <div>
                {
                    isFav ? 
                    <button className="btn btn-danger" onClick={remove}>Remove from Favourites</button> : 
                    <button className="btn btn-success" onClick={add}>Add to Favourites</button>
                }
            </div>
        </div>
    );
}
