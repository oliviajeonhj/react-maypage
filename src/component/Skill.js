
function Skill(props) {
  return (
  <div id="skills" className="">
    <div className="bgText flexCenter">
      <span>SKILLS</span>
    </div>
    <div className="skillArea">
      <div className="firstLine flexEven">
        <div className="skillbox d-flex">
          <div>
            <span>80%</span>
            <div className="textBox">
              <strong>HTML / CSS</strong>
            </div>
          </div>
          <div>
            <span>80%</span>
            <div className="textBox">
              <strong>Bootstrap</strong>
            </div>
          </div>
          <div>
            <span>70%</span>
            <div className="textBox">
              <strong>jQuery</strong>
            </div>
          </div>
          <div>
            <span>90%</span>
            <div className="textBox">
              <strong>Figma</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="secondLine flexEven">
        <div className="skillbox d-flex">
          <div>
            <span>60%</span>
            <div className="textBox">
              <strong>Javescript</strong>
            </div>
          </div>
          <div>
            <span>60%</span>
            <div className="textBox">
              <strong>React</strong>
            </div>
          </div>
          <div>
            <span>80%</span>
            <div className="textBox">
              <strong>Photoshop</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
}

export default Skill;