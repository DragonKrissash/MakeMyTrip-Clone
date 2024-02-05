import React from "react";
import "./Bottom4_Slider.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Bottom4_Slider(){
    const settings={
        dots:false  ,
        infinite: false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:3
    }

    return <div class="slickLists-4">
               <Slider {...settings}>
                    {cards_data.map((card,id)=>{
                        return <div id="card-bt4" >
                    <img class="card-img-4" src={image_urls[id]} alt="Hello"/> 
                    <div class="card-bt4-text">       
                    <p>{card.text1}</p>
                    <p>{card.text2}</p>
                    </div>
                    </div>
                    })}
                     </Slider>
            </div>
   
}

export default Bottom4_Slider;

const image_urls = [
    "https://promos.makemytrip.com/Growth/Images/B2C/xhdpi/ic_whatsnew_flight.png",
    "https://promos.makemytrip.com/images/CDN_upload/indiannessapphome2.png",
    "https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png",
    "https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png",
    "https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png",
    "https://tripmoneycmsimgak.mmtcdn.com/img/RIL_1_468ef5d7a7.png",
    "https://tripmoneycmsimgak.mmtcdn.com/img/abhi_1_223c8a2989.png",
    "https://tripmoneycmsimgak.mmtcdn.com/img/Acko_1_a95a85f8c1.png",
    "https://tripmoneycmsimgak.mmtcdn.com/img/AA_70x70_bb9ca3d36b.jpg"
]

const cards_data = [
    {"text1": "Book Flights with Voice Chat!", "text2": "Code: MMTMYRA will be auto-applied for EXTRA discounts!"},
    {"text1": "Finding Indian Food just got easier! Use newly launched filters to find Indian food during International travel"},
    {"text1": "Planning to book an international flight?", "text2": "Check Travel Guidelines"},
    {"text1": "We are now available in हिंदी!", "text2": "Change Language"},
    {"text1": "Complete your web check-in on MakeMyTrip in easy steps.", "text2": "Know More"},
    {"text1": "Travel light, leave your worries behind with Reliance General Insurance"},
    {"text1": "Karo Acchi Sehat Ka Iraada, Chuno Insurance Jo De Zyada"}
]