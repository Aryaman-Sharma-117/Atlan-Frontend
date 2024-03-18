import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import favContext from './FavContext';

export default function Favourites() {
  const favModels = useContext(favContext);

  function remove(item) {
    favModels.setFav(prevFavModels => prevFavModels.filter(e => e.name !== item.name));
  }

  const navigate = useNavigate();
  const navigateToPage = (item) => {
    navigate(`/explore/${item.name}`)
  }

  return (
    <div className="favourites-container">
      <h1>Your Favourites</h1>
      <div className="favourites-list">
        {favModels.fav.length !== 0 ?
          favModels.fav.map((item) =>
            <div key={item.name} className="favourite-item">
              <div onClick={() => navigateToPage(item)} className="item-details">
                <img src={item.img} alt={item.name} className='logocont' />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.type}</p>
                </div>
              </div>
              <button className="remove-button" onClick={() => remove(item)}>Remove from Favourites</button>
            </div>
          ) : 
          <div className="empty-message">
            <h3>Is empty</h3>
            <h4>Go and explore to add to Favourites</h4>
          </div>
        }
      </div>
    </div>
  )
}

