import React, { Component } from 'react'
import Logo from '../../assets/img/giphmeLogo.png'
import Form from '../Common/Form'
import Gif from './Gif'
import FavNav from '../Common/FavNav';

export default class GifAppClass extends Component {
    constructor() {
        super()
        this.state = {
            gifs: null,
            text: '',
            favorites: [],
            isFavNav: false,
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
        this.onClickFavNav = this.onClickFavNav.bind(this)
    }

    renderFavs() {
        if(this.state.favorites.length === 0) return <p>You have no favorites</p>
        return this.state.favorites.map((a,i) => (
            <Gif
                key={a.gif_url}
                isFav={true}
                addToFavorites={() => this.addToFavorites(a.title, a.gif_url, a.still_url)}
                removeFromFav={() => this.removeFromFavorites(a.gif_url)}
                width="290px"
                height="160px"
                title={a.title}
                gif_url={a.gif_url}
                still_url={a.still_url}
            />
        ))
    }

    onClickFavNav(e) {
        this.setState({isFavNav:!this.state.isFavNav})
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({gifs:null})
        this.getGifs(this.state.text)
    }

    onTextChange(e) {
        this.setState({text: e.target.value})
    }

    getGifs(query="") {
        import("../../utils/API").then( gifApi => {
            gifApi.getGifs(query, gifs => this.setState({gifs}))
        })
    }

    addToFavorites(title, gif_url, still_url) {
        let { favorites } = this.state
        if(favorites.findIndex(a => a.gif_url === gif_url) > -1) return;
        else {
            favorites.push()
            this.setState({favorites:[...favorites, {title, gif_url, still_url}]})
        }
    }

    removeFromFavorites(gif_url) {
        let { favorites } = this.state
        const newFavs = favorites.filter( a => a.gif_url !== gif_url)
        this.setState({newFavs})
    }

    renderGifs() {
        const { gifs } = this.state
        if(gifs === null) return <p>Loading...</p>
        else if(gifs.length === 0) return <p>There are no gifs here</p>
        return gifs.data.map( (a, i) => (
            <Gif
                key={a.images.downsized_large.url}
                height={"320px"}
                width={"350px"}
                addToFavorites={() => this.addToFavorites(a.title,a.images.downsized_large.url,a.images.downsized_still.url)}
                removeFromFav={() => this.removeFromFavorites(a.images.downsized_large.url)}
                title={a.title}
                gif_url={a.images.downsized_large.url}
                still_url={a.images.downsized_still.url}
            />
        ))
    }

    componentDidMount() {
        this.getGifs()
        document.title = this.state.text
    }

    componentDidUpdate() {
        document.title = this.state.text
    }

    render() {
        return (
            <div>
                <FavNav isFavNav={this.state.isFavNav}>
                    {this.renderFavs()}
                </FavNav>

                <header className={"fav_text_container"}>
                    <button onClick={this.onClickFavNav} className={this.state.isFavNav ? "favs_text_on" : "favs_text_off" }>
                        <i className={"fas fa-star fav_icon"}></i>
                    </button>
                </header>

                <section>
                    <header className="header_container">
                        <figure>
                            <img src={Logo} alt="Logo for this giphy app"/>
                        </figure>

                        <Form 
                            onSubmit={this.onSubmit}
                            onTextChange={this.onTextChange}
                            text={this.state.text}
                        />
                    </header>
                </section>
                
                <main className="main">
                    <article>
                        <section className={"horizantal_container"}>
                        {this.renderGifs()}
                        </section>
                    </article>
                </main>
            </div>
        )
    }
}
