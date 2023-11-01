import React from "react";
import "./../css/footer.css";
import Facebook from "./../assets/footer icons/facebook (Freepik).png";
import Instagram from "./../assets/footer icons/instagram(Freepik).png";
import Email from "./../assets/footer icons/email (Uniconlabs).png";

function Footer (){
    return(
        <div class="footer">
            <a  href="https://web.facebook.com/campaign/landing.php?campaign_id=1653399747&extra_1=s%7Cc%7C318269478237%7Ce%7Cfacebook%27%7C&placement&creative=318269478237&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653399747%26adgroupid%3D68955935732%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1028682%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMI6MXd78HG-QIVianVCh0kHAx8EAAYASAAEgI5k_D_BwE&_rdc=1&_rdr">
            <img id="social" class="left" src={Facebook} alt="facebookacebook" height="70px" /> 
            </a>

            <a  href="https://www.instagram.com/">
            <img id="social" class="left" src={Instagram} alt="Instatinstagram" height="70px" />
            </a>

            <img id="social" class="left" src={Email} alt="email icon goes here" height="70" />

            <p class="left contactus"> Papito@gmail.com</p>
            <p class="left contactus"> Tel : 066 236 6656 </p>
        </div>
    )
}
export default Footer