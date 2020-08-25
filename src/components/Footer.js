import React from 'react';
import '../componentscss/footer.css';
export const Footer = () => {
    return (
        <div>
            
            <footer id="about" class="row footer-design">
        <div class="col-md-12">

          <center>
            @Developed by BabaTechnoSoft <br/>
            <p>For more info: www.sundargautam.com.np</p></center>
       
            <div class="details">
              <h5>My Details</h5>
              <i class="fas fa-envelope-square"/> Email:sundargautam6@gmail.com <br/>
              <i class="fas fa-address-card"/>  Address: Damak-9,Jhapa <br/>
            </div>
       
          <div class="row">
            <ul class="social">
              <a
                href="https://www.facebook.com/sundar.gautam.1848"
                target="popup"
                ><li><i class="fab fa-facebook-f"/></li></a>
              <a href="https://twitter.com/sojo_raja" target="popup"
                ><li><i class="fab fa-twitter"/></li></a>
              <a href="https://www.instagram.com/sundargautam12" target="popup">
                <li><i class="fab fa-instagram"/></li></a>
              <a
                href="https://www.linkedin.com/in/sundar-gautam-1339a8191/"
                target="popup"
              >
                <li><i class="fab fa-linkedin-in"/></li></a>
            </ul>
          </div>
        </div>
      </footer>
        </div>
    );
}
