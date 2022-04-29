import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import "./style.css"

const SingleProductReviewCarousel = (mainImage, frontImage, backImage) => {
    const data = [
        {
          image: mainImage.mainImage,

        },
        {
            image: mainImage.frontImage,
        },
        {
            image: mainImage.backImage,
        }
    ]
  return (
    <div className='single-product-review-carousel-container'>
        <div>
            <Carousel
                         data={data}
                        //  time={2000}
                        //  width="100%"
                        //  height="90vh"
                        //  border="2px solid green"
                        //  radius="10px"
                         automatic={false}
                         dots={true}
                         pauseIconColor="white"
                         pauseIconSize="40px"
                         slideBackgroundColor="white"
                         slideImageFit="cover"
                         thumbnails={true}
                         thumbnailWidth="100%"
                        //  style={{
                        //    textAlign: "center",
                        //    maxWidth: "100%",
                        //    height:"auto",
                        //    margin: "40px auto",
                        //    padding: "10px 0",
                        //    border: "2px solid blue"
                        //  }}
            />
        </div>
    </div>
  )
}

export default SingleProductReviewCarousel
