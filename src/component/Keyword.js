import keywordDB from "../json/db.json"

function Keyword(props) {
  return (
    <div id="keyword">
      <div className="mockupBox d-flex">
        {
          keywordDB.keywordJson.map( (item, index) => {
            return(
              <div className={item.keyCls}>
                <span className={item.spancls}>{item.keyword}</span>
                <div className={item.piccls}></div>
              </div>
            )

          })
        }

      </div>
      <div className="keywordText flexCenter">
        <span>KEYWORD</span>
      </div>
    </div>
  );
}

export default Keyword;