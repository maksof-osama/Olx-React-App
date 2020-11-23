import React from 'react';
import heart from '../images/heart.svg';
import firebase from './firebase';
import { Link } from 'react-router-dom'



class ITEMS extends React.Component {
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


                <div className=" container-fluid " id="card-align">
                    <p id="items">Fresh recommendations</p>
                    <div className="col-md-12 container-fluid ml-3 ">
                        <div className="row">

                            <ul className="ul-for-card">
                                {cards.map((cards, index) => {

                                    return <li key={index}>
                                        <Link to="/item-details">
                                            <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                                <div id="white-border">
                                                    <img className="card-img-top rounded mx-auto d-block" src={cards.image} alt="Card image cap" />
                                                </div>


                                                <div className="card-body" id="card-body">
                                                    <h5 className="card-title c-title">Rs {cards.price}</h5>
                                                    <p className="card-text c-text"  >{cards.details}</p>
                                                    <div>
                                                        <span className="float-left location">{cards.location}</span>
                                                        <span className="float-right date">{cards.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>



                                })}





                            </ul>


                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default ITEMS;