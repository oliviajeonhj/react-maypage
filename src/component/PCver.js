import Slides from './Slides';


function PCver(props) {

  return (
    <div id="pcVer">
      <Slides nm={[ 
        {
          cls : "text-white ",
          title : "Home"
        },
        {
          cls : "cateYellow cateBtn1 animate__bounceInDown",
          title : "About"
        },
        {
          cls : "cateGreen cateBtn2 animate__bounceInDown",
          title : "Skills"
        },
        {
          cls : "cateYellow cateBtn3 animate__bounceInDown",
          title : "Portfolio"
        },
        {
          cls : "cateGreen cateBtn4 animate__bounceInDown",
          title : "Keyword"
        },
        {
          cls : "cateYellow cateBtn5 animate__animated animate__bounceInDown",
          title : "Contact"
        }
      ]}  />

    </div>
  );
}

export default PCver;