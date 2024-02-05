import React from "react";
import "./TopMenu.css"
function TopMenu(){
return <div class="TopMenu-Maincontainer">
          <div class="TopMenu-container">        
                <div class="TopMenubar">
                    <img  src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" alt="" id="logo"/> 
                    <div class="TopMenu-textGrid">
                        <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062755/MakeMyTrip%20Project%20Icons/ListYourProperty_qlh7xw.png"></img>
                        <div class="TopMenu-text">
                        <p style={{fontSize:"14px"}}>List Your Property</p>
                        <p style={{fontSize:"10px", color:'#c2c2c2'}}>Start earning today!</p>
                        </div>
                    </div>
                    <div class="TopMenu-textGrid">
                        <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062757/MakeMyTrip%20Project%20Icons/mybiz_b7ibre.png"></img>
                        <div class="TopMenu-text">
                        <p style={{fontSize:"16px"}}>Introducing myBiz</p>
                        <p style={{fontSize:"10px", color:'#c2c2c2'}}>Business Travel Solution</p>
                        </div>
                    </div>
                    <div class="TopMenu-textGrid">
                        <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062751/MakeMyTrip%20Project%20Icons/trip_buuxdo.png"></img>
                        <div class="TopMenu-text">
                        <p style={{fontSize:"14px"}}>My Trips</p>
                        <p style={{fontSize:"10px", color:'#c2c2c2'}}>Manage your bookings</p>
                        </div>
                    </div>
                    <div class="TopMenu-textGrid TopMenu-textBlue">
                        <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062757/MakeMyTrip%20Project%20Icons/myTRip_rjkx9g.png"></img>
                        <div class="TopMenu-text" >
                        <p style={{fontSize:"14px", paddingTop:'4px'}}>Login or Create Account</p>
                        </div>
                    </div>
                    <div class="TopMenu-textGrid"  style={{backgroundColor:'rgba(255, 255, 255, 0.15)',paddingBottom:'10px',paddingRight:'6px',borderRadius:'4px'}}>
                        <img style={{height:"15px",width:'20px',paddingLeft:'20px',paddingTop:'10px'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"></img>
                        <div class="TopMenu-text">
                        <p style={{fontSize:"14px",paddingTop:'4px'}}>IN | ENG | INR</p>
                        </div>
                    </div>
                </div>
                <div>
            
                </div>

            <div class="TopMenuMainBar">

                    <div class='TopMenuMainBar-IconBar'>
                        <div class="TMMB-IconBar-Content" style={{paddingLeft:'30px'}}>
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062753/MakeMyTrip%20Project%20Icons/Flight_vj5yel.png"></img>
                            <p>Flights</p>
                        </div>
                        <div class="TMMB-IconBar-Content">
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062756/MakeMyTrip%20Project%20Icons/hotel_qrcau8.png"></img>
                            <p>Hotels</p>
                        </div>
                        <div class="TMMB-IconBar-Content">
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062755/MakeMyTrip%20Project%20Icons/HomeStays_qfxuul.png"></img>
                            <p>Homestays</p>
                            <p>& Villas</p>
                        </div>
                        <div class="TMMB-IconBar-Content">
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062754/MakeMyTrip%20Project%20Icons/Holiday_pm3cwb.png"></img>
                            <p>Holiday</p>
                            <p>Packages</p>
                        </div>
                        <div class="TMMB-IconBar-Content">
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062758/MakeMyTrip%20Project%20Icons/train_mgqj1j.png"></img>
                            <p>Trains</p>
                        </div>
                        <div class="TMMB-IconBar-Content">
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062751/MakeMyTrip%20Project%20Icons/Bus_lfmwrl.png"></img>
                            <p>Buses</p>
                        </div>
                        <div class="TMMB-IconBar-Content">
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062752/MakeMyTrip%20Project%20Icons/Cab_pnhu2f.png"></img>
                            <p>Cabs</p>
                        </div>
                        <div class="TMMB-IconBar-Content">
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062753/MakeMyTrip%20Project%20Icons/forexcard_vwhkg7.png"></img>
                            <p>Forex Card</p>
                            <p>& Currency</p>
                        </div>
                        <div class="TMMB-IconBar-Content" style={{paddingRight:'30px'}}>
                            <img src="https://res.cloudinary.com/dhbr8q2ba/image/upload/v1707062759/MakeMyTrip%20Project%20Icons/travelinsurance_ymsdf7.png"></img>
                            <p>Travel</p>
                            <p>Insurance</p>
                        </div>

                    </div>


                    <div class="TopMenuMainBar-Trip">
                        <div class="circle"></div><p>One Way</p>
                        <div class="circle"></div><p>Round Trip</p>
                        <div class="circle"></div><p>Multi City</p>
                        <p style={{paddingLeft:"590px"}} >Book International and Domestic Flights</p>
                    </div>
                    <div class="TopMenuMainBar-Location">
                        <div class="TopMenuMainBar-LocationTextBox">
                            <p style={{fontSize:'18px'}}>From</p>
                            <p style={{fontSize:'35px', color:'black'}}>Delhi</p>
                            <p style={{fontSize:'18px'}}>DEL, Delhi Airport India</p>
                        </div>
                        <div class="TopMenuMainBar-LocationTextBox to" >
                            <p style={{fontSize:'18px'}}>To</p>
                            <p style={{fontSize:'35px', color:'black'}}>Bengaluru</p>
                            <p style={{fontSize:'18px'}}>BLR, Bengaluru International Airport India</p>
                        </div>
                        <div class="TopMenuMainBar-LocationTextBox to" >
                            <p style={{fontSize:'18px'}}>Departure</p>
                            <p style={{fontSize:'35px', color:'black'}}>5 <b style={{fontSize:'30px'}}>Feb'24</b> </p>
                            <p style={{fontSize:'18px'}}>Monday</p>
                        </div>
                        <div class="TopMenuMainBar-LocationTextBox to" style={{width:'120px',lineHeight:'16px'}}>
                            <p style={{fontSize:'18px',paddingTop:'8px'}}>Return</p>
                            <p style={{fontSize:'14px', color:'#9b9b9b',paddingTop:'18px',paddingBottom:'16px'}}>Tap to add a return date for bigger discounts</p>
                        </div>
                        <div class="TopMenuMainBar-LocationTextBox to traveller" >
                            <p style={{fontSize:'18px'}}>Travellers & Class</p>
                            <p style={{fontSize:'35px', color:'black'}}>1 <b style={{fontSize:'25px'}}>Traveller</b> </p>
                            <p style={{fontSize:'15px'}}>Economy/Premium</p>
                        </div>

                    </div>
                    <div class="TopMenuMainBar-Fares">
                        <div style={{width:'70px',lineHeight:'15px',marginLeft:'30px',color:'#4a4a4a'}}>
                            <p>Select A Fare Type:</p>
                        </div>
                        <div class="Fares-select" style={{borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}} >
                            <div class="circle" style={{marginLeft:'0'}}></div><div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Regular</p><p>Fares</p></div>
                        </div>
                        <div class="Fares-select">
                            <div class="circle" style={{marginLeft:'0'}}></div><div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Armed Forces</p><p>Fares</p></div>
                        </div>
                        <div class="Fares-select">
                            <div class="circle" style={{marginLeft:'0'}}></div><div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Student</p><p>Fares</p></div>
                        </div>
                        <div class="Fares-select">
                            <div class="circle" style={{marginLeft:'0'}}></div><div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Senior Citizen</p><p>Fares</p></div>
                        </div>
                        <div class="Fares-select">
                            <div class="circle" style={{marginLeft:'0'}}></div><div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Doctors & Nurses</p><p>Fares</p></div>
                        </div>
                        <div class="Fares-select" style={{borderTopRightRadius:'5px',borderBottomRightRadius:'5px'}}>
                            <div class="circle" style={{marginLeft:'0'}}></div><div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Double Seat</p><p>Fares</p></div>
                        </div>
                        <div style={{lineHeight:'15px',marginLeft:'150px',color:'#4a4a4a'}}>
                            <p>Trending Searches:</p>
                        </div>
                        <div class="Fares-select" style={{borderRadius:'5px',marginLeft:'10px'}}>
                            <div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Bengaluru to London</p></div>
                        </div>
                        <div class="Fares-select" style={{borderRadius:'5px',marginLeft:'10px'}}>
                            <div style={{display:'flex',flexDirection:'column',lineHeight:'15px'}}><p>Dubai to Delhi</p></div>
                        </div>

                    </div>
                    <div class='TopMenuMainBar-Search'>
                        <div class='SearchStyle'><p style={{fontSize:'30px'}}>SEARCH</p></div>
                        <p style={{color:'white',paddingTop:'20px',fontSize:'14px'}}>Explore More</p>
                    </div>
            </div>


          </div>
          <div class="ExploreMore">
                <div class="ExploreMore-content">
                    <img src="https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png"></img>
                    <div class="ExploreMoreText">
                        <p style={{color:'#4A4A4A',fontSize:'17px'}}>Where2Go</p>
                    </div>
                </div>
                <div class="ExploreMore-content">
                    <img src="https://promos.makemytrip.com/appfest/2x/trip-money-1.png"></img>
                    <div class="ExploreMoreText">
                        <p style={{color:'#4A4A4A',fontSize:'17px'}}>Insurance</p>
                        <p>For International Trips</p>
                    </div>
                </div>
                <div class="ExploreMore-content">
                    <img src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png"></img>
                    <div class="ExploreMoreText">
                        <p style={{color:'black',fontSize:'17px'}}>Explore International Flights</p>
                        <p>Cheapest Flights to Paris, Bali, Tokyo & more</p>
                    </div>
                </div>
                <div class="ExploreMore-content">
                    <img src="https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png"></img>
                    <div class="ExploreMoreText">
                        <p style={{color:'black',fontSize:'17px'}}>MICE</p>
                        <p>Offsites, Events & Meetings</p>
                    </div>
                </div>
                <div class="ExploreMore-content" style={{border:'none'}}>
                    <img src="https://promos.makemytrip.com/appfest/2x/gift%20card%201.png"></img>
                    <div class="ExploreMoreText" >
                        <p style={{color:'black',fontSize:'17px'}}>Gift Cards</p>
                    </div>
                </div>
          </div>
       </div>
}
export default TopMenu;