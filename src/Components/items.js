import React from 'react';
import heart from '../images/heart.svg';
import firebase from './firebase';
import {InputGroup, Button} from 'react-bootstrap'


class ITEMS extends React.Component {
    render() {

        // var a=document.getElementById("a")
        // var b=document.getElementById("b")
        // var c=document.getElementById("c")
        // var d=document.getElementById("d")
        
        // function adding(){
        // firebase.database().ref("Database/"+a.value).set({
        //     Id: a.value,
        //     Name: b.value,
        //     Mail: c.value,
        //     Remarks: d.value
        // })
        // a.value=""
        // b.value=""
        // c.value=""
        // d.value=""
        // }



        return (
            <div>
                {/* <input type="text" id="a"/>
                <input type="text" id="b"/>
                <input type="text" id="c"/>
                <input type="text" id="d"/> */}
                {/* <button onClick={adding()}>clivvk</button> */}
                
                <div className=" container-fluid " id="card-align">
                    <p id="items">Fresh recommendations</p>
                    <div className="col-md-12 container-fluid ml-3 ">
                        <div className="row">

                            <ul className="ul-for-card">

                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top rounded mx-auto d-block" src="https://upload.wikimedia.org/wikipedia/commons/2/25/2018_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282018-11-02%29_01.jpg" alt="Car" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 600,000</h5>
                                            <p className="card-text c-text"  >Honda Jade Hybrid AT Push Start Japanese Car</p>
                                            <div>
                                                <span className="float-left location">LANDHI KARACHI</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>



                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://img.clasf.pk/2019/06/22/Multimedia-projector-price-in-pakistan-used-dlp-projector-20190622141148.2187140015.jpg" alt="Projector Image" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 12,000</h5>
                                            <p className="card-text c-text">Imported Japanese projecter Available Whole Sale shop LG, NEC, Toshiba</p>
                                            <div>
                                                <span className="float-left location">SANGHAR PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/167855550.jpg?k=61d0c48ca90b56127735678b19ca4bd2f85e77c9fa7a7032ba328a63e6a23a36&o=" alt="House" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 4600,000</h5>
                                            <p className="card-text c-text">Bahria Town Rawalpindi, Rawalpindi, Punjab</p>
                                            <div>
                                                <span className="float-left location">Bahria Town Karrachi</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://content.valuecityfurniture.com/images/product/roxie_gray_accent-chair_2008335_753044.jpg" alt="Chair" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 1,000</h5>
                                            <p className="card-text c-text">Sofa for Sale 4 set</p>
                                            <div>
                                                <span className="float-left location">Lahore</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                        <div id="white-border">
                                            <img className="card-img-top" src="https://img.dunyanews.tv/news/2019/October/10-09-19/news_big_images/513228_28918192.jpg" alt="Bike" />
                                        </div>


                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 90,000</h5>
                                            <p className="card-text c-text">Motor Bike Zero Meter</p>
                                            <div>
                                                <span className="float-left location">Sialkot</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                                <li >

<div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
   <div id="white-border">
    <img className="card-img-top" src="https://image.made-in-china.com/2f0j00cGjUlEWzawqp/Modern-New-Design-Bedroom-Sets-Wardrobe-Dressing-Table-Home-Furniture-Chest-Drawer-Bed-Classic-Bed.jpg" alt="Furniture" />
    </div>
  
  
    <div className="card-body" id="card-body">
        <h5 className="card-title c-title">Rs 80,000</h5>
        <p className="card-text c-text">Wooden Furniture</p>
        <div>
            <span className="float-left location">Nazimabad Karachi</span>
            <span className="float-right date">DATE</span>
        </div>
    </div>
</div>

</li>



                             <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                       <div id="white-border">
                                        <img className="card-img-top" src="https://static.toiimg.com/thumb/msid-77328879,width-640,resizemode-4/77328879.jpg" alt="Laptop" />
                                        </div>
                                      
                                      
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 50,000</h5>
                                            <p className="card-text c-text">Laptop i5 4th Gen</p>
                                            <div>
                                                <span className="float-left location">Bahadurabad Karachi</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                                <li >

<div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
   <div id="white-border">
    <img className="card-img-top" src="https://ae01.alicdn.com/kf/HTB16mV9aInrK1RkHFrdq6xCoFXaP.jpg" alt="Computer" />
    </div>
  
  
    <div className="card-body" id="card-body">
        <h5 className="card-title c-title">Rs 80,000</h5>
        <p className="card-text c-text">Gaming Computer For Sale</p>
        <div>
            <span className="float-left location">Multan</span>
            <span className="float-right date">DATE</span>
        </div>
    </div>
</div>

</li>




<li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                       <div id="white-border">
                                        <img className="card-img-top" src="https://ae01.alicdn.com/kf/HTB16mV9aInrK1RkHFrdq6xCoFXaP.jpg" alt="Mobile" />
                                        </div>
                                      
                                      
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 40,000</h5>
                                            <p className="card-text c-text">Mobile For Sale</p>
                                            <div>
                                                <span className="float-left location">PUNJAB</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>




                                <li >

                                    <div className="card cccc" style={{ width: '18rem', }}>  <span id="featured">FEATURED</span><img className="heart" src={heart} alt="heart" />
                                       <div id="white-border">
                                        <img className="card-img-top" src="https://m.justgola.com/media/a/00/08/35532_og_1.jpeg" alt="Bag" />
                                        </div>
                                      
                                      
                                        <div className="card-body" id="card-body">
                                            <h5 className="card-title c-title">Rs 2,000</h5>
                                            <p className="card-text c-text">Bag For Sale</p>
                                            <div>
                                                <span className="float-left location">Surjani Town</span>
                                                <span className="float-right date">DATE</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                            </ul>


                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default ITEMS;