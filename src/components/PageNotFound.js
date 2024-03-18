import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    
      <button  onClick={navigateToHome}>
        Return to HomePage
      </button>
    </div>
  )
}
