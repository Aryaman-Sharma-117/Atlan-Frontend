import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import favContext from './FavContext';

export default function ExploreTable(props) {
  const favModels = useContext(favContext);

  const initialToggleStates = props.model.map(item =>
    favModels.fav.some(favItem => favItem.name === item.name)
  );
  const [toggleStates, setToggleStates] = useState(initialToggleStates);

  useEffect(() => {
    const newToggleStates = props.model.map(item =>
      favModels.fav.some(favItem => favItem.name === item.name)
    );
    setToggleStates(newToggleStates);
  }, [favModels.fav, props.model]);

  const handleToggle = (item, index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !toggleStates[index];
    setToggleStates(newToggleStates);

    if (!toggleStates[index]) {
      favModels.setFav(prevItem => [...prevItem, item]);
    } else {
      favModels.setFav(prevFavModels => prevFavModels.filter(e => e.name !== item.name));
    }
  };

  const navigate = useNavigate();
  const navigateToPage = (item) => {
    navigate(`/explore/${item.name}`);
  };

  return (
    <div>
      {props.model.map((item, index) => (
        <div key={item.name} className="explore-item">
          <div onClick={() => navigateToPage(item)} className="item-details">
            <img src={item.img} alt={item.name} className='logocont' />
            <h3>{item.name}</h3>
            <p>{item.type}</p>
          </div>
          <div className="toggle-favorite">
            Add to favourites:{' '}
            <label className="switch">
              <input
                type="checkbox"
                key={item.name}
                checked={toggleStates[index]}
                onChange={() => handleToggle(item, index)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
