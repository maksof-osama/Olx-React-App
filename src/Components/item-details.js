import React from 'react';
import heart from '../images/heart.svg';
import App from '../App';
import { Link } from 'react-router-dom'
import NAVBARS from './navbar';
import CATEGORIES from './categories';
import FOOTERTOP from './footertop';
import FOOTER from './footer';
import FOOTERBOTTOM from './footerbottom';
import ITEMS from './items';
import DEAR from '../images/dear.webp';
import PHONE from '../images/phone.svg';




class ITEMDETAILS extends React.Component {
    render() {

        let cards = [
            { image: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200917133044-amazonfurniturelead.jpg', price: '80,000', details: 'Sofa for sale', location: 'Nazimabad', date: '02-12-2020' },
            { image: 'https://cache1.pakwheels.com/ad_pictures/4143/suzuki-mehran-vxr-euro-ii-2018-41439573.jpg', price: '300,000', details: 'Car for sale', location: 'Surjani Town', date: '02-12-2020' },
            { image: 'https://i.ytimg.com/vi/dFoE4H6a-4E/maxresdefault.jpg', price: '40,000', details: 'Bike for sale', location: 'Sadiqabad', date: '02-12-2020' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoh2xtIbARzQuUo5Nx_h03IxueA9bYajzyjA&usqp=CAU', price: '400,000', details: 'Car for sale', location: 'UP More', date: '02-12-2020' },
            { image: 'https://cdn.mos.cms.futurecdn.net/6xPpRXr2HPBaXYU9ZnSDTB.jpg', price: '40,000', details: 'laptop for sale', location: 'Nagan Chowrangi', date: '11-14-2020' },
            { image: 'https://apollo-singapore.akamaized.net/v1/files/t7z806xi2rar3-PK/image;s=850x0', price: '20,000', details: 'LED for sale', location: 'Serena Mobile Market', date: '02-12-2020' },
            { image: 'https://apollo-singapore.akamaized.net/v1/files/48l3l8hry1vw1-PK/image', price: '90,000', details: 'IPhone X for sale', location: 'Jamshed Town', date: '02-12-2020' },
            { image: 'https://www.brandsynario.com/wp-content/uploads/Left-Side-B-15-x-10.jpg', price: '20,000', details: 'Mobile for sale', location: 'Hyderi', date: '02-12-2020' },
            { image: 'https://apollo-singapore.akamaized.net/v1/files/wm2t94nrtaf91-PK/image', price: '8,000,000', details: 'House for sale', location: 'Tariq Road', date: '02-12-2020' },
            { image: 'https://nbook.in/wp-content/uploads/2015/01/olx-e1421133244602.jpg', price: '10,00,000', details: 'House for sale', location: 'M.A Jinnah Road', date: '02-12-2020' },

        ]


        return (
            <div>
                <NAVBARS />
                <CATEGORIES />
                <br />

                <div className="center">
                    <h3 id="h1"><b>ITEM DETAILS</b></h3>
                </div>


                <div className="col-md-11 container">
                    <div className="row margin">


                        <div className="col-md-8 image-container card-border margin">
                        <span id="card-featured">FEATURED</span>
                            <img className="img-fluid img-item-details" src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200917133044-amazonfurniturelead.jpg" alt="Card image cap" />
                        </div>

                        <div className="col-md-4">
                            <div className="row for-margin">

                                <div className="col-md-12 card-border" >

                                    <img className="card-heart" src={heart} alt="heart" />

                                    <h5 className="card-title card-price">Rs 80,000</h5>
                                    <p className="card-text card-details"  >Sofa Brand New Soft Kangara Brand</p>
                                    <div>
                                        <span className="float-left card-location">Nazimabad</span>
                                        <span className="float-right card-date">02-12-2020</span>
                                    </div>
                                </div>
                                <span>&nbsp;</span>
                                <div className="col-md-12 card-border">
                                    <h5 className="card-title Seller-Description">Seller Description</h5>

                                    <div className="row">
                                        <img src={DEAR} id="user-img" />
                                        <p className="seller-name">Osama Nasir</p>
                                        <br />
                                        <span className="Member-Since-November">Member Since July</span>

                                    </div>
                                    <br />
                                    <button type="button" className="btn btn-secondary  Chat-With-Seller" >Chat With Seller</button>
                                    <br />  <br />
                                    <div className="row text-center">
                                    <img src={PHONE} id="phone" />
                                    <p id="phone-number">034* *** ****</p>
                                    </div>
                                    <br />
                                </div>
                                <br />

                            </div>

                        </div>
 <span>&nbsp;</span>
                        <div className="col-md-12 card-border des" >
                            <h5 className="card-title card-description">Description</h5>
                            <p>comfortable brand new skin colour sofa (kangaro brand) U.K Imported Quality 3 piece available</p>
                            <br /><br />
                             </div>

                    </div>
                </div>






                <br /><br />
                <br /><br />
                <FOOTERTOP />
                <FOOTER />
                <FOOTERBOTTOM />
            </div>
        )
    }
}

export default ITEMDETAILS;