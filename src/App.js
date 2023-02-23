import { useEffect, useState } from 'react';
import PCver from './component/PCver';
import Mobilever from './component/Mobilever';

function App() {
  const [resize, setResize] = useState(null);
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });
  
    const time = setTimeout(() => {
      console.log(window.innerWidth);
      setResize(window.innerWidth);
    }, 0.0001);
  
    return () => {
      window.removeEventListener("resize", () => {
        setResize(window.innerWidth);
      });
  
      clearTimeout(time);
    };
  }, []);

  return (
    <div className="App">
      {
        resize >= 768
        ? <PCver /> : <Mobilever/>
      }

    </div>
  );
}

export default App;
