import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Bottom1_Slider.css";


function Bottom1_Slider(){

    const settings={
        dots:false  ,
        infinite: false,
        speed:500,
        slidesToShow:6,
        slidesToScroll:1
    }

    return <div class="container-bottom1slider">
            <p class="head">Unlock Lesser-Known Wonders of India</p>
            <div class="slickLists">
                <Slider {...settings}>
                    {imgs.map((img,id)=>{
                        return <div class="card" >
                        <img class="card-img" src={img.src} alt={texts[id].text}/>
                        <div class="blackOverlay"></div>
                    <div class="text-bottom1slider">              
                    <p>{texts[id].text}</p>
                    </div> 
                    </div>
                    })}
                    </Slider>
            </div>
    </div>
}
export default Bottom1_Slider;

const imgs=[
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/narkanda/mmt/destination/m_Narkanda_l_372_902.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/yercaud/mmt/destination/m_destination-yercaud-landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/dooars/mmt/destination/m_Dooars_l_457_685.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/saputara/mmt/destination/m_destination-saputara-landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/dhanaulti/mmt/destination/m_Destination_Dhanaulti_l_534_801.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/mandarmani/mmt/destination/m_destination-mandarmoni-landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/malvan/mmt/destination/m_Malvan_l_636_847.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/yelagiri/mmt/destination/m_destination_yelagiri_landscape_l_340_544.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/araku/mmt/destination/m_destination_Araku Valley_landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/sasan/mmt/destination/m_destination_sasan_gir_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/udupi/mmt/destination/m_destination-udupi-landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/panchmarhi/mmt/destination/m_Destination_Panchmarhi_l_464_696.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/dapoli/mmt/destination/m_Dapoli_l_703_937.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/vengurla/mmt/destination/m_destination_vengurla_landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/dandeli/mmt/destination/m_Destination_Dandeli_l_536_804.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/destination/mmt/destination/m_destination_vagamon_landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/tadoba/mmt/destination/m_Tadoba_l_587_880.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/guntur/mmt/destination/m_Guntur-landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/Bhandardara/mmt/destination/m_Bhandardara_l_568_852.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/shoghi/mmt/destination/m_Shoghi_l_667_1000.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/srisailam/mmt/destination/m_srisailam-landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/vellore/mmt/destination/m_destination-vellore-landscape_l_400_640.jpg" },
    { "src": "https://hblimg.mmtcdn.com//content/hubble/img/parwanoo/mmt/destination/m_Parwanoo_l_393_699.jpg" }
  ]

  const texts=[
    { "text": "Shimla's Best Kept Secret" },
    { "text": "Tamil Nadu's Charming Hill Town" },
    { "text": "Picturesque Gateway to Himalayas" },
    { "text": "Quaint Little Hill Station in Gujarat" },
    { "text": "A pleasant summer retreat and a snowy winter wonderland!" },
    { "text": "Seaside Resort Village in West Bengal" },
    { "text": "Hidden Gem along Maharashtra's Coast" },
    { "text": "Picture-Perfect Hill Station in Tamil Nadu" },
    { "text": "Hill Retreat in Andhra Pradesh" },
    { "text": "Nature Lover's Paradise in Gujarat" },
    { "text": "Spiritual Coastal Town in Karnataka" },
    { "text": "Queen of Satpura Pachmarhi" },
    { "text": "A Town with Beaches and Hills!" },
    { "text": "Known as the 'Goa of Malvan" },
    { "text": "A Green Getaway in Karnataka" },
    { "text": "Idyllic Hill Station in Kerala" },
    { "text": "Wildlife Hotspot in Maharashtra" },
    { "text": "Erstwhile Abode of Rulers in Andhra Pradesh" },
    { "text": "Hidden Gem in the Sahyadri Ranges" },
    { "text": "Striking Hill Resort near Shimla" },
    { "text": "A Spiritual Getaway in Andhra Pradesh" },
    { "text": "Ancient City in Tamil Nadu" },
    { "text": "Beautiful Apple & Peach Orchards" }
  ]