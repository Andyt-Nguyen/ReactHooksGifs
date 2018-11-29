# ReactHooksGifs
This project was built because I wanted to try the new way of coding React applications. The classical way to code React applications is to create a class that contains all the logic and later renders the UI through functional components which should not contain any logic. The newest way to code React appliactions is using Hooks. The goal of hooks is to avoid using classes because it is too complicated on people as well as machines. Using React's hooks lets us the developers use more of React's features to ensure the machine can compile the code easier as well as make React developers code more readable.

This application was built twice. I have one folder that uses the classical way of writing components and another folder that is built using only functions(hooks). My final conclusion when comparing React Hooks and React Classes is that React Hooks is much better. The code is much more shorter (by at least 20 lines) and so much more cleaner. React hooks are the future!

## You can view the application here https://andyt-nguyen.github.io/ReactHooksGifs/
### Installing

Clone the repo
```
git clone [https/ssh]
```
Run Application in terminal/bash
```
npm start
or
yarn start
```


## Class Component Code

# GifAppClass.js (Class)

```javascript
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
```

### Gif.js (Class)

```javascript
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
```

# Hook Component Code 

### GifAppHooks.js (Functional)
```javascript
import React, { useState, useEffect } from 'react'
import Logo from '../../assets/img/giphmeLogo.png'
import Form from '../Common/Form'
import FavNav from '../Common/FavNav';
import Gif from './Gif'

export default () => {
    const [text, setText] = useState("")
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
```

### Gif.js (Functional)
```javascript
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
```

# Final Product for both applications

![](./images/giphapp.png)


## Built With

* [React 16.7A](https://reactjs.org/docs/hooks-intro.html) - Web Framework
* [Scss/SASS](https://sass-lang.com/) - Styles


## Authors

* **[Andrew Ty Nguyen](https://github.com/Andyt-Nguyen)**

