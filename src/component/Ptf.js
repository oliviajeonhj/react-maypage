import React from 'react';
import ikamper from '../img/ptf/ikamper.png'
import yougomai from '../img/ptf/yougomai.png'
import figma from '../img/ptf/figma.png'
import guide from '../img/ptf/guide.png'
import notion from '../img/ptf/notion.png'
import mustad from '../img/ptf/mustad.png'
import ptfDB from "../json/db.json"

function Ptf(props) {
  return (
    <div id="portfolio" className=''>
      <div className="d-flex">
        <div className="pftBox Box1">
          <strong>Portfolio</strong>
        </div>
        <div className="pftBox Box2 mt-200">
          <div className="ptfImg">
            <img src={ikamper} alt="아이캠퍼" />
          </div>
          <div className="ptfText ye">
            <span>ikamper (고도몰)</span>
            <p>컨셉</p>
            <p>작업기간</p>
            <p>협업</p>
          </div>
        </div>
        <div className="pftBox Box3">
        {         
          ptfDB.ptfJson1.map((item, index) => {
            const ptfcls2 = item.ptfImgcls.join(" ")
            const ptfcls3 = item.pftTextboxcls.join(" ")
            return(
            <div>
              <div key={'ptf' + index} className={ptfcls2}>
                <img src={`${process.env.PUBLIC_URL}/img/ptf/${item.ptfImg}`} alt="아이캠퍼" />
              </div>
              <div className={ptfcls3}>
              <span>{item.title}</span>
              <p>{item.sub1}</p>
              <p>{item.sub2}</p>
              <p>{item.sub3}</p>
              </div>
            </div>
            )
          })            
        }
        </div>
      <div className="pftBox Box4">
      {         
        ptfDB.ptfJson2.map((item, index) => {
          const ptfcls2 = item.ptfImgcls.join(" ")
          const ptfcls3 = item.pftTextboxcls.join(" ")
          return(
          <div>
            <div key={'ptf' + index} className={ptfcls2}>
              <img src={`${process.env.PUBLIC_URL}/img/ptf/${item.ptfImg}`} alt="아이캠퍼" />
            </div>
            <div className={ptfcls3}>
            <span>{item.title}</span>
            <p>{item.sub1}</p>
            <p>{item.sub2}</p>
            <p>{item.sub3}</p>
            </div>
          </div>
          )
        })            
      }
      </div>
        <div className="pftBox Box5 mt-300">
          <div className="ptfImg">
            <img src={figma} alt="피그마" />
          </div>
          <div className="ptfText">
            <span>FIGMA</span>
            <p>컨셉설명</p>
            <p>...?</p>
          </div>
        </div>

        {/* <div className="pftBox Box3">
          <div className="ptfImg">
          <img src={mustad} alt="머스타드" />
          </div>
          <div className="ptfText gr">
            <span>BOOTSTRAP</span>
          </div>
          <div className="ptfImg">
          <img src={guide} alt="업무가이드" />
          </div>
          <div className="ptfText gr">
            <span>----</span>
          </div>
        </div>
        <div className="pftBox Box4">
          <div className="ptfImg fullColor">
          <img src={notion} alt="노션" />
          </div>
          <div className="ptfText ye">
            <span>기획 Notion</span>
          </div>
          <div className="ptfImg">
          <img src={yougomai} alt="유고마이" />
          </div>
          <div className="ptfText gr">
            <span>CMS</span>
          </div>
        </div>
        <div className="pftBox Box5 mt-300">
          <div className="ptfImg">
            <img src={figma} alt="피그마" />
          </div>
          <div className="ptfText">
            <span>FIGMA</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Ptf;