import { StarRateOutlined } from '@material-ui/icons'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import React from 'react'

{/* <StarRateOutlined/>
                    <StarRateOutlined />
                    <StarRateOutlined/>
                    <StarRateOutlined/>
                    <StarRateOutlined/> */}

const Rating = ({ value, text, color }) => {
  return (
    <div className='star-group'>
      <span>
      
          
          {
            value >= 1
              ? <StarRateOutlined/>
              : value >= 0.5
              ? <StarHalfIcon />
              : <StarRateOutlined/>
          }
      
      </span>
      <span>
      {
            value >= 2
              ? <StarRateOutlined/>
              : value >= 1.5
              ? <StarHalfIcon />
              : <StarRateOutlined/>
          }
       
      </span>
      <span>
       {
            value >= 3
              ? <StarRateOutlined/>
              : value >= 2.5
              ? <StarHalfIcon />
              : <StarRateOutlined/>
          }
      
      </span>
      <span>
       {
            value >= 4
              ? <StarRateOutlined/>
              : value >= 3.5
              ? <StarHalfIcon />
              : <StarRateOutlined/>
          }
      
      </span>
      <span>
       {
            value >= 5
              ? <StarRateOutlined/>
              : value >= 4.5
              ? <StarHalfIcon />
              : <StarRateOutlined/>
          }
      
      </span>
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

export default Rating
