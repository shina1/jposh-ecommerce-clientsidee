import React from 'react'
import styledComponents from 'styled-components'
import Divider from '../Divider/index.js'
import Slidder from '../SlidderComponent/index.js'

const Box = styledComponents.div`
    margin:100px auto;
    height: auto;
`

const Testimonial = () => {
  return (
    <Box>
        <Divider section={'REVIEWS'}/>
      <Slidder/>
    </Box>
  )
}

export default Testimonial
