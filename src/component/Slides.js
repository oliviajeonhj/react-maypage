import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Skill from "./Skill";
import Keyword from "./Keyword"
import Ptf from "./Ptf"
import Main from "./Main"
import Contact from "./Contact"
import About from "./About";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Slides(props) {
  return(
    <Swiper
    modules={[Pagination]}
    pagination={{
      bulletActiveClass: 'activeBtn',
      bulletClass: 'btn',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span id="' + className + index + '"class="'+ className +'"></span>';}
        
    }}
    effect={"fade"}
    className="swiperPage"
  >
    <SwiperSlide>
      <Main mainid="mainBefore" oc="dnone"/>
      <Main mainid="main" />
    </SwiperSlide>
    <SwiperSlide><About /></SwiperSlide>
    <SwiperSlide><Skill /></SwiperSlide>
    <SwiperSlide><Ptf /></SwiperSlide>
    <SwiperSlide><Keyword /></SwiperSlide>
    <SwiperSlide><Contact /></SwiperSlide>

  </Swiper>
  )
}

export default Slides;