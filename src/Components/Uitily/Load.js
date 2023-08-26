
import React from 'react';
import land from '../../images/loader.gif'

export const Load = () => {
  
        function loader(){
            document.querySelector('.loader-container').classList.add('fade-out');
          }
          
          function fadeOut(){
            setInterval(loader, 1000);
          }

  
    window.onload = fadeOut;
  return (
    <div className="loader-container">
    <img src={land} alt=''/>
    </div>
  )
}

export default Load;





