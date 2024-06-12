import React from 'react';
import './Contact.css'; // Ensure you have the necessary CSS file

const Contact = () => {
  return (
   <div>
      <center>
        <div className="contact-container style1 shadow" data-aos="zoom-in">
          <div className="contact-info">
            <span>Sameer Pathak&nbsp; :&nbsp;&nbsp;&nbsp; <a href="tel:9822559360">9822559360</a></span>
            <span>Rajendra Pathak :&nbsp; <a href="tel:9423592264">9423592264</a></span>
            <span>Abhay Pathak&nbsp;&nbsp; :&nbsp; <a href="tel:7666117911">7666117911</a></span>
            <span>Gmail : <a href="mailto:pathaksameer79@gmail.com">pathaksameer79@gmail.com</a></span>
          </div>
        </div>
      </center>
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="address-container style1 shadow col-md-5" data-aos="zoom-in" data-aos-duration="2500">
            <span className="style2"><strong>Address</strong></span><br />
            <span>Rama Prem Nivas 34/a/46, New paccha peth, Solapur, Maharashtra 413006</span><br /><br />
            <span>B6/501, suryanjali residency, amroli cross road, Surat</span><br /><br />
            <span>Minara mension 3/57 Sant sena marg, Mumbai 400004</span>
          </div>

          <div className="map-container col-md-5">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=sameer%20and%20sons,solapur,maharashtra&t=k&z=19&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Google Map"
                ></iframe>
                <style>{`
                  .mapouter { position: relative; text-align: right; height: 100%; width: 100%; }
                  .gmap_canvas { overflow: hidden; background: none!important; height: 100%; width: 100%; }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
