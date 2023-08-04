import './footer.css';
import React from 'react'
import img1 from '../../img/logo.png'
import img2 from '../../img/play-store.png'
import img3 from '../../img/app-store.png'

export default function footer() {
  return (
    

     <div className="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download the app</h3>
                    <p>Download app for android and ios mobile phone.</p>
                    <div class="app logo">
                        <img src={img2}/>
                        <img src={img3}/>
                    </div>

                </div>
                
            <div class="footer-col-2">
                <img src={img1}width="80"/>
                <p>Our propose is to sustainably Make the pleasure and Benifits of Mens accessories to the Many.</p>
            </div>
            <div class="footer-col-3">
                <h3>Useful links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affiliate</li>
                </ul>


            </div>
            <div class="footer-col-4">
                <h3>Follow us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>YouTube</li>
                </ul>


            </div>

        </div>

    </div>
</div>
   
  )
}








