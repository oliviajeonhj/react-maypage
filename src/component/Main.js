import React from 'react';
import img1 from '../img/main/main1.png';
import img2 from '../img/main/main2.png';
import mainDB from "../json/db.json"
import 'animate.css';


function Main(props) {
  const propID = props.mainid

  return (
  <div class="boxSize flexCenter">
    {
      propID === "mobileMain" ? 
      <div id={props.mbid} className="d-flex flex-column justify-content-between d-md-none d-sm-block">
        <ul className='flexCenter flex-column'>
          {
            mainDB.mobileMain.map( (item,index)  => {
              const mblicls = item.mbli.join(" ")
              const mbdivcls = item.mbdiv.join(" ")
              return(
                <li key={'main' + index} className={mblicls}>
                  <a href="#none" className={mbdivcls}>{item.mbbtnTitle}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
       : <div className='d-none'></div>
    }
    <div id={props.mainid} >
      <div className="mainimg col-md-6 h-100 flexStart ms-auto">
        <div className="imgbox rel">
          <img src={img2} alt="캐릭터" id={props.oc} className='mainUp abs'/>
          <img src={img1} alt="캐릭터" className='mainDown abs'/>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Main;