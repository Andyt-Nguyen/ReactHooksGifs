import React from 'react'

export default ({isFavNav,children}) => (
    <nav className={isFavNav ? "favorites_nav_show" :"favorites_nav_hide"}>
        {children}
    </nav>
)