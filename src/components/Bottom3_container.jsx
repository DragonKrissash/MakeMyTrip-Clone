import React from "react";
import "./Bottom3_container.css";
import mobilepng from "./mobile_my.png";
function Bottom3_container(){
    return <div class="bottom3_container">
            <div class="DownloadNow">
                <div class="DownloadAppNow">
                    <img src={mobilepng} alt="Download Now"/>
                    <div class="DownloadAppNow-Text">
                    <h3>Download App Now!</h3>
                    <p>Use code <b>WELCOMEMMT</b>  and get <b>FLAT 12%</b> OFF* on your first domestic flight booking</p>
                    </div>
                </div>
                <div class="downloadNowSearchbar">
                    <div class="flag"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"></img><p> +91  - </p></div>
                    <input class="inputAreatext" type="text" placeholder="Enter Mobile Number"></input>
                    <button class="inputAreabutton" type="submit">GET APP LINK</button>
                </div>
            </div>
            <div class="AppLinkContainer">
            <div class="PlayAppStore">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png" alt="Get it on google"></img>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Get it on google"></img>
            </div>
            <div class="QR">
                <img id="qr" src="https://b2024479.smushcdn.com/2024479/wp-content/uploads/2020/05/HelloTech-qr-code-1024x1024.jpg" alt="" />
            </div>
            </div>
    </div>
}
export default Bottom3_container;