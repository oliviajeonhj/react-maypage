import React from 'react';
import img1 from '../img/main/main1.png';
import img2 from '../img/main/main2.png';
import 'animate.css';
import mainDB from "../json/db.json"

function Main(props) {

  return (

    <div id={props.mainid} className="d-flex">
      <div className="cate col-6">
        <ul id={props.oc} className="cateUl">

          {
            mainDB.mainJson.map( (item, index) => {
              const divcls = item.cateDiv.join(" ")
              return(
                <li className={item.cateList}>
                  <div className={divcls}>
                    <a href={item.href}>{item.buttonTitle}</a>
                  </div>
                </li>
              )
            } )
          }

        </ul>
      </div>
      <div className="mainimg col-6 flexStart">
        <div className="imgbox">
          <img src={img2} alt="캐릭터" id={props.oc} className='mainUp'/>
          <img src={img1} alt="캐릭터" className='mainDown'/>
        </div>
      </div>
    </div>
  );
}

export default Main;