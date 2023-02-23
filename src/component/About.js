import About1 from "./About1";
import About2 from "./About2";

function About(props) {
  const propID = props.aboutid
  return (
    <div>
      {
        propID === "mobileAbout" ?
        <About1 /> : <About2 />
      }
    </div>
  );
}

export default About;