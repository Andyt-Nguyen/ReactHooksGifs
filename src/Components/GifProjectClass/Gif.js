import React, { Component } from 'react'

export default class Gif extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            gif_url: props.gif_url,
            still_url: props.still_url,
            isStill: true,
            favorites: props.favorites,
            isFav: (props.isFav === undefined || props.isFav === false ? false : true)
        }

        this.changeGifSrc = this.changeGifSrc.bind(this)
        this.removeGif = this.removeGif.bind(this)
        this.addGif = this.addGif.bind(this)

    }

    changeGifSrc() {
        this.setState({isStill:!this.state.isStill})
    }

    removeGif() {
        this.setState({isFav:false}, this.props.removeFromFav)
    }

    addGif() {
        this.setState({isFav:true}, this.props.addToFavorites)
    }

    shouldComponentUpdate(props, state) {
        if(props.favorites.length !== state.favorites.length) {
            return true
        } 
    }

    render() {
        return (
            <figure style={{width: this.props.width, height: this.props.height}} className={"gifContainer"}>
                <div className={"overlay_fav"}>
                    {
                        this.state.isFav
                        ?<button className="fav_btn" type="button" onClick={this.removeGif}>
                            <i className={this.state.isFav ?  "fas fa-star remove_icon" : "fas fa-star fav_icon"}></i>
                         </button>
                        :<button className="fav_btn" type="button" onClick={this.addGif}>                            
                            <i className={this.state.isFav ?  "fas fa-star unfav_icon" : "fas fa-star fav_icon"}></i>
                        </button>
                    }
                    

                    
                </div>
                <button className={"gifBtn"} type="button" onClick={this.changeGifSrc}>
                    <img className={"gifImage"} alt={this.state.title} src={ this.state.isStill ? this.state.gif_url : this.state.still_url} />
                </button>
            </figure>
        )
    }
}