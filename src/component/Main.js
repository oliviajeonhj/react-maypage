import React from 'react';
import img1 from '../img/main/main1.png';
import img2 from '../img/main/main2.png';
import 'animate.css';
import mainDB from "../json/db.json"

function Main(props) {

  return (

    <div id={props.mainid} className="d-flex ">
     
      <div className="mainimg col-6 flexStart ms-auto">
        <div className="imgbox">
          <img src={img2} alt="캐릭터" id={props.oc} className='mainUp'/>
          <img src={img1} alt="캐릭터" className='mainDown'/>
        </div>
      </div>
    </div>
  );
}

export default Main;