import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import Skill from "./Skill";
import Keyword from "./Keyword"
import Ptf from "./Ptf"
import Main from "./Main"
import Contact from "./Contact"
import About from "./About";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';


function Slides(props) {

  const clnmli = "";
  
  return(
    <Swiper

      modules={[Pagination, EffectFade]}

      onSlideChange = { (swiper) =>{
        if(swiper.activeIndex > 0){
          document.body.classList = "";
          document.body.classList += "clickBtn";
        }else{
          document.body.classList = "";
        }
      } }
   
      pagination={{
        el : '.cateUl',
        bulletActiveClass: 'activeBtn',
        bulletClass: 'btn',
        clickable: true,
        renderBullet: function (index, className) {
          
          // return '<span id="' + className + index + '"class="'+ className +'"></span>';
    
          return '<li class="cateli'+( index )+'   '+ className +'"><div class="'+props.nm[index].cls+'">'+props.nm[index].title+'</div></li>';
        }     
      }}
    effect={"fade"}

    className="swiperPage"
  >
    <SwiperSlide>
      {/* <Main mainid="mainBefore" oc="dnone"/> */}
      <Main mainid="main" />
    </SwiperSlide>
    <SwiperSlide><About /></SwiperSlide>
    <SwiperSlide><Skill /></SwiperSlide>
    <SwiperSlide><Ptf /></SwiperSlide>
    <SwiperSlide><Keyword /></SwiperSlide>
    <SwiperSlide><Contact /></SwiperSlide>
    <div className="cate col-6 position-fixed left-0 top-0 bottom-0 d-flex justify-content-center flex-column zup">
      <ul className="cateUl"></ul>
    </div>
    
  </Swiper>
  )
}

export default Slides;