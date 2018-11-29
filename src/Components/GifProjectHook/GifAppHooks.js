import React, { useState, useEffect } from 'react'
import Logo from '../../assets/img/giphmeLogo.png'
import Form from '../Common/Form'
import FavNav from '../Common/FavNav';
import Gif from './Gif'

export default () => {
    const [text, setText] = useState("Gif App")
    const [search, setSearch] = useState("")
    const gifs = useGetGifs(search)
    const [favGifs, setFavGifs] = useState([])
    const [isFavNav, setIsFavNav] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        setSearch(text)
    }

    function onTextChange(e) {
        setText(e.target.value)
    }

    function addToFavorites(title, gif_url, still_url) {
        const isExist = favGifs.findIndex( a => a.gif_url === gif_url)
        if(isExist === -1) {
            setFavGifs([ ...favGifs, {title, gif_url, still_url}])
        }
        return;
    }
    
    function removeFromFavorites(gif_url) {
         setFavGifs(favGifs.filter(a => a.gif_url !== gif_url))
    }

    function onClickFavNav() {
        setIsFavNav(!isFavNav)
    }
    
    function renderGifs() {
        if(gifs === null) return <p>Loading...</p>
        else if(gifs.length === 0) return <p>There are no gifs here</p>
        return gifs.data.map( (a, i) => (
            <Gif
                key={a.images.downsized_large.url}
                height={"320px"}
                width={"350px"}
                addGif={() => addToFavorites(a.title,a.images.downsized_large.url,a.images.downsized_still.url)}
                removeGif={() => removeFromFavorites(a.images.downsized_large.url)}
                title={a.title}
                gif_url={a.images.downsized_large.url}
                still_url={a.images.downsized_still.url}
            />
        ))
    }

    function renderFavGifs() {
        if(favGifs.length === 0) return <p>There are no gifs here</p>
        return favGifs.map( a => (
            <Gif
                key={a.gif_url}
                isFav={true}
                addGif={() => addToFavorites(a.title, a.gif_url, a.still_url)}
                removeGif={() => removeFromFavorites(a.gif_url)}
                height={"160px"}
                width={"290px"}
                title={a.title}
                gif_url={a.gif_url}
                still_url={a.still_url}
        />
        ))
    }

    useEffect( () => {document.title = text}, [text])

    return (
        <div>
            <FavNav isFavNav={isFavNav}>
                {renderFavGifs()}
            </FavNav>

            <header className={"fav_text_container"}>
                <button onClick={() => onClickFavNav()} className={isFavNav ? "favs_text_on" : "favs_text_off"}>
                    <i className={"fas fa-star fav_icon"}/>
                </button>
            </header>

            <section>
                <header className="header_container">
                    <figure>
                        <img src={Logo} alt="Logo for this giphy app"/>
                    </figure>
                    <Form 
                        onSubmit={onSubmit}
                        onTextChange={onTextChange}
                        text={text}
                    />
                </header>
            </section>

            <main className="main">
                <article>
                    <section className={"horizantal_container"}>
                        {renderGifs()}
                    </section>
                </article>
            </main>
        </div>
    )
}

//  Custom hook
function useGetGifs(text="") {
    const [gifs, setGifs] = useState([])
    useEffect( () => {
        import("../../utils/API").then( api => {
            api.getGifs(text, data => setGifs(data))
        })
    })

    return gifs;
}