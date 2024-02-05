import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Bottom2_Slider.css";


function Bottom2_Slider(){

    const settings={
        dots:false  ,
        infinite: false,
        speed:500,
        slidesToShow:6,
        slidesToScroll:1
    }

    return <div class="container-bottom2slider">
            <p class="head">Handpicked Collections for You</p>
            <div class="slickLists">
                <Slider {...settings}>
                    {imgs.map((img,id)=>{
                        return <div class="card" >
                        <div class="background-shadow2"></div>
                        <div class="background-shadow1"></div>
                        
                        <img class="card-img" src={img} alt={texts[id]}/>
                    <div class="text-bottom2slider">  
                    <p id="top">{top[id]}</p>            
                    <p>{texts[id]}</p>
                    </div> 
                    </div>
                    })}
                    </Slider>
            </div>
    </div>
}
export default Bottom2_Slider;

const top=[
    "Top 8",
    "Top 8",
    "Top 9",
    "Top 11",
    "Top 11",
    "Top 11",
    "Top 11",
    "Top 11",
    "Top 11",
    "Top 11"
]

const imgs= [
    "https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/Australia/mmt/destination/m_Australia_destination_6_l_361_641.jpg",
    "https://hblimg.mmtcdn.com//content/hubble/img/amritsar/mmt/destination/m_Amritsar_activity_heritage_l_684_1026.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/collections/m_pilgrimage44_p_540_417.jpg",
    "https://hblimg.mmtcdn.com//content/hubble/img/alleppey/mmt/destination/m_destination-alleppey-landscape_l_400_640.jpg"
]

  const texts = [
    "Stays in & Around Delhi for a Weekend Getaway",
    "Stays in & Around Mumbai for a Weekend Getaway",
    "Stays in & Around Bangalore for a Weekend Getaway",
    "Beach Destinations",
    "Weekend Getaways",
    "Hill Stations",
    "Adventure Destinations",
    "Heritage Destinations",
    "Pilgrimage Destinations",
    "Relaxation Destinations"
]