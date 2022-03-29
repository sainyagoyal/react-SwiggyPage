import React, { useContext } from "react";
import {RESTRAUNT_DETAIL_FOOD_IMAGE} from '../../../../Images/image'
import './RestrauntDetails.css'
import IconTextSubtext from "../../../../molecule/IconTextSubtext/IconTextSubtext";
import IconText from "../../../../molecule/IconText/IconText";
import { RestrauntContext } from "../../../../context/restaurantDetailsContext";


function RestrauntDetails(){
    const restDetail = useContext(RestrauntContext);
    
    let ratingVal="";
    (restDetail.restrauntRating>4 ? ratingVal="100+ Ratings": ratingVal="too few ratings")
    return(
        <div className="black-box">
                    <div className="flex-container-row-black-box ">
                        <div className="black-box-child1"> 
                            <img src={RESTRAUNT_DETAIL_FOOD_IMAGE} alt="food-image" style={{ width: "100%", height:"165px"}}/>
                        </div>
                        <div className="black-box-child2">
                            <div className="black-box-heading">{restDetail.restrauntName}</div>
                            <div className="sub-heading-black-box">
                                <div>{restDetail.restrauntType}</div>
                            </div>
                        
                            <div className="rest-address">{restDetail.restrauntAddress}</div>
                            <div className="flex-container-row">
                                
                                <IconTextSubtext icon={"fa fa-star"} text={restDetail.restrauntRating} subText={ratingVal}/>
                                <IconTextSubtext text={restDetail.restrauntTime+" mins"} subText="Delivery Time"/>
                                <IconTextSubtext icon={"fa fa-inr"} text={restDetail.restrauntPrice} subText="Cost for two"/>
                               
                            </div>
                            
                        </div> 
                          
                        <div className="black-box-child3">
                            <div className="offer">OFFER</div>
                            <div className="offers-item">
                            {restDetail.restrauntOffers.map ((offer)=>{
                                return(
                                <IconText icon="fa fa-star" text={offer}/>
                                )
                            })}
                            </div>
                            
                        </div>
                    </div>
                    </div>    
    )
}
export default RestrauntDetails;