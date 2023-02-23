
import contactdb from "../json/db.json"

function Contact(props) {
  return (
    <div id="contactBox" className='flexCenter'>
      <div id="contact" className='d-flex'>
        <div className="contactText col-sm-10 col-md-2 d-md-block">
          <span>Contact</span>
        </div>
        <div className="contactMid col-md-7 col-sm-10 flexCenter">
          <form action="" id="formArea" className='flexCenter'>
            <ul>
              <li><input type="text" name="coName" id="coName" placeholder='Name' required/></li>
              <li><input type="text" name="coEmail" id="coEmail" placeholder='Email'/></li>
              <li><input type="text" name="coNum" id="coNum" placeholder='Phone Number'/></li>
              <li><textarea name="comment" id="" cols="25" rows="10" placeholder='Comment'></textarea></li>
            </ul>      
          </form>
          <div className="submitBtn">
            <input type="submit" id="send" value="Submit"/>
          </div>
        </div>
        <div className="contactInfo col-md-3 d-sm-none d-md-block flexCenter flex-column border-start">
          <ul>
          {
            contactdb.contactJson.map( (item,index) => {
              return(
                <li key={'contact' + index}><a href={item.href}>{item.sns}</a></li>
              )
            })
          }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;