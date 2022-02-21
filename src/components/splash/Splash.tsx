import { useEffect, useState } from 'react';
import './Splash.css';

interface SplashProps { }

const Splash: React.FC<SplashProps> = () => {

  const[showSplash, changeSplash] = useState({
    showSplash: "splashContainer"
  });

  useEffect(() =>{
    setTimeout(() => {
      changeSplash({
        showSplash: "splashContainer fadeout"
      })
    }, 2000);
  })

  return (
    <div className={showSplash.showSplash}>
    </div>
  );
};

export default Splash;
