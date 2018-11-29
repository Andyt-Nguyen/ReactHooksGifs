import React, { useState } from 'react'

export default (props) => {
    let [isGif, setIsGif] = useState(true)

    return (
        <figure style={{width: props.width, height: props.height}} className={"gifContainer"}>
            <div className={"overlay_fav"}>
                {
                    props.isFav
                    ?<button className="fav_btn" type="button" onClick={props.removeGif}>
                        <i className={props.isFav ?  "fas fa-star remove_icon" : "fas fa-star fav_icon"}></i>
                        </button>
                    :<button className="fav_btn" type="button" onClick={props.addGif}>                            
                        <i className={props.isFav ?  "fas fa-star unfav_icon" : "fas fa-star fav_icon"}></i>
                    </button>
                }                
            </div>
            
            <button className={"gifBtn"} type="button" onClick={() => setIsGif(!isGif)}>
                <img className={"gifImage"} alt={props.title} src={ isGif ? props.gif_url : props.still_url} />
            </button>
        </figure>
    )
}