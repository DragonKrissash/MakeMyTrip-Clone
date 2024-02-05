import React from "react";
import './Top2_Slider.css';
import Slider from "react-slick";
function  Top2_Slider() {

    const settings={
        dots:false  ,
        infinite: false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:3
    }

    return <div class="mainTop2-container">
                            <div class="Top2-navbar">
                                        <p id="offer">Offers</p>
                                        <p id="blue-offer">All Offers</p>
                                        <p style={{paddingLeft:'40px'}}>Bank Offers</p>
                                        <p>Flights</p>
                                        <p>Hotels</p>
                                        <p>Holidays</p>
                                        <p>Trains</p>
                                        <p style={{paddingRight:'0px'}} >Cabs</p>
                                        <p id="viewAll">VIEW ALL</p>
                            </div>
                      <Slider {...settings}>
                        {combined_data.map((card,id)=>{
                            return <div class="slicksContainer-t2">
                      <div class="slick_slider_top2">
                        <div class="top2_slide">
                        <div id="card-t2" >
                                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <img id="card-img-t2" src={card.image_url1}/>
                                    </div>
                                    <div class="card-t2-text">       
                                    <p style={{paddingTop:'0px'}}>{card.category1}</p>
                                    <p style={{fontSize:'20px'}}>{card.title1}</p>
                                    <p style={{borderBottom:'2px solid orange', width:"30px"}}></p>
                                    <p>{card.description1}</p>
                                    </div>

                            <div class="top2-footer">
                            <p style={{paddingLeft:"20px"}}>T&C's Apply</p>
                            <p style={{color:'#008cff', fontWeight:'500',paddingLeft:"220px",fontSize:"16px"}}>BOOK NOW</p>
                            </div>

                                    </div>
                                                
                        </div>
                        
                        


                        </div>

                        <div class="slick_slider_top2">
                        <div class="top2_slide">
                        <div id="card-t2" >
                                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                    <img id="card-img-t2" src={card.image_url2}/>
                                    </div>
                                    <div class="card-t2-text">       
                                    <p style={{paddingTop:'0px'}}>{card.category2}</p>
                                    <p style={{fontSize:'20px'}}>{card.title2}</p>
                                    <p style={{borderBottom:'2px solid orange', width:"30px"}}></p>
                                    <p>{card.description2}</p>
                                    </div>

                            <div class="top2-footer">
                            <p style={{paddingLeft:"20px"}}>T&C's Apply</p>
                            <p style={{color:'#008cff', fontWeight:'500',paddingLeft:"220px",fontSize:"16px"}}>BOOK NOW</p>
                            </div>

                                    </div>
                                                
                        </div>
                        
                        


                        </div>
                      </div>              
                       
                        })}
                      </Slider>

                    
    </div>
}
export default Top2_Slider;

const combined_data = [
    {
        'category1': 'DOM FLIGHTS',
        'title1': '#MySpiritualIndia Special:',
        'description1': 'Get FLAT 10% OFF* on hotels at India’s divine wonders.',
        'image_url1': 'https://promos.makemytrip.com/notification/xhdpi//Spritual-India-Hotels-DT.jpg?im=Resize=(134,134)',
        'offer_ends_in1': 'N/A',
        'url1': 'https://www.makemytrip.com/promos/spiritual-india-hotels-040224.html?detail_image=no',
        'category2': 'DOM FLIGHTS',
        'title2': 'LIVE NOW: Sale by Air India',
        'description2': 'with flight fares starting @ ₹1,799*.',
        'image_url2': 'https://promos.makemytrip.com/notification/xhdpi//116X116-airindia-express-12345.jpg?im=Resize=(134,134)',
        'offer_ends_in2': 'N/A',
        'url2': 'https://www.makemytrip.com/promos/air-india-offer-310323.html?detail_image=no'
    },
    {
        'category1': 'DOM HOTELS',
        'title1': 'WE GOT UNIQUE HOMESTAYS FOR YOU:',
        'description1': 'Stand a chance to stay at a celeb-owned homestay this V-Day & explore more unique stays.',
        'image_url1': 'https://promos.makemytrip.com/images//Desktop-HS-VD-310124.jpg?im=Resize=(134,134)',
        'offer_ends_in1': 'N/A',
        'url1': 'https://www.makemytrip.com/promos/vday-homestays-offers-030224.html?detail_image=no',
        'category2': 'INTL FLIGHTS',
        'title2': 'Grab Up to 12% OFF* on Flights',
        'description2': '& get set for memorable trips within India & abroad!',
        'image_url2': 'https://promos.makemytrip.com/notification/xhdpi//116X116-kotak-flights-27012024.jpg?im=Resize=(134,134)',
        'offer_ends_in2': 'Offer ends in 09h:53m',
        'url2': 'https://www.makemytrip.com/promos/kotak-dc-flight-offer-280124.html?detail_image=no'
    },
    {
        'category1': 'INTL HOTELS',
        'title1': 'Grab Up to 30% OFF*',
        'description1': 'on domestic & international hotels + holiday packages.',
        'image_url1': 'https://promos.makemytrip.com/notification/xhdpi//116X116-kotak-offers-27012024.jpg?im=Resize=(134,134)',
        'offer_ends_in1': 'Offer ends in 09h:53m',
        'url1': 'https://www.makemytrip.com/promos/kotak-cc-stays-offer-280124.html?detail_image=no',
        'category2': 'DOM HOTELS',
        'title2': 'Grab Up to 40% OFF* on Unique Homestays',
        'description2': 'and book a romantic stay with your partner for Valentine’s Day.',
        'image_url2': 'https://promos.makemytrip.com/images//Desktop-HS-VD-2-310124.jpg?im=Resize=(134,134)',
        'offer_ends_in2': "T&C's Apply",
        'url2': 'https://www.makemytrip.com/promos/vday-homestays-offers-030224.html?detail_image=no'
    },
    {
        'category1': 'INTL FLIGHTS',
        'title1': 'Grab Up to 15% OFF* on Domestic & Int’l Hotels',
        'description1': '& enjoy a memorable stay!',
        'image_url1': 'https://promos.makemytrip.com/notification/xhdpi//116X116-kotak-hotels-27012024.jpg?im=Resize=(134,134)',
        'offer_ends_in1': 'Offer ends in 09h:53m',
        'url1': 'https://www.makemytrip.com/promos/kotak-dc-stays-offer-280124.html?detail_image=no',
        'category2': 'DOM FLIGHTS',
        'title2': '#MySpiritualIndia:',
        'description2': 'Get FLAT 10% OFF* on flights to/from India’s divine gems.',
        'image_url2': 'https://promos.makemytrip.com/images//DT-DF-SpritualIndia-250124.jpg?im=Resize=(134,134)',
        'offer_ends_in2': 'N/A',
        'url2': 'https://www.makemytrip.com/promos/spiritual-india-flights-260124.html?detail_image=no'
    }
]