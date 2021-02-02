import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title, description, image, favicons }) =>
    <Helmet>
      <html lang="en" amp />
      <link rel="icon" href={favicons} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="design, development, web, anguyen0208, anh, nguyen, javascript"/>
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://anhnguyen.page" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image:type" content="/images/png" />
      <meta property="og:image" content={image} />
      <meta property="og:image" content="/images/og.png"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:locale" content="en_US" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet"/>
    </Helmet>

export default Head
