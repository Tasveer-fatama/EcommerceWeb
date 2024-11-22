import React from 'react'
import Helmet from "react-helmet"

const metaData = ({title}) => {
  return (
    <Helmet>
      {title}
    </Helmet>
  )
}

export default metaData
