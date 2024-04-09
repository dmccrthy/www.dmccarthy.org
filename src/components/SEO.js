import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../img/favicon.png"

const DefaultHead = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
            
            <meta name="description" content="Dan McCarthy - Student and Developer"/>
            <meta name="keywords" content="Dan McCarthy, dmccarthy, McCarthy, Development, Porfolio, Daniel McCarthy, dmccarthy.org" />
            <meta name="url" content="https://www.dmccarthy.org" />
            <link rel="canonical" href="https://www.dmccarthy.org" />
            <link id="icon" rel="icon" href={favicon} />

            {/* Font Import */}
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" /> */}
        </Helmet>
    )
}

export default DefaultHead