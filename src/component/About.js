import React from 'react';
import aboutImg from '../img/about/about3.png'
import ref1 from '../img/about/ref1.png'

function About(props) {
  return (
    <div id="about">
      <div className="aboutText flexCenter">
        <span>Better Together</span>
      </div>
      <div className='about1 flexCenter'>
        <div className="profileBox">
          <strong>전향진<span>_Profile</span></strong>
          <p>2018 Oct - 2022 Apr</p>
          <p>CLUBMED Seychelles Planning Mananger</p>
          <p>CLUBMED Japan Assistant Reception Manager</p>
          <p>CLUBMED Thailand Guest Relations</p>
          <p>2015 Aug - 2018 Sep</p>
          <p>La Cure Gourmande  Store Manager</p>
          <p>2010 Oct - 2012 Jan</p>
          <p>Lloyds International College AUS </p>
          <p>Business Management 1년 6개월 과정 수료</p>
        </div>
      </div>
      <div className='about2 flexCenter'>
        <div className="refText">
          <strong>추천서</strong>
        </div>
        <div className="referenceBox">
          <a href="#none">
            <img src={ref1} alt="추천서1" className="ref1 col-5 offset-1" />
            <img src={ref1} alt="추천서2" className="ref2 col-5" />
          </a>
        </div>
      </div>
      <div className="aboutImg flexEnd">
        <img src={aboutImg} alt="전향진사진" />
      </div>
    </div>
  );
}

export default About;