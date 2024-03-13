import React from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'
//import ProductStore from '../../store/ProductStore';

const DetailsImage = () => {
    
    //let {Details}= ProductStore();

    let images = [
        {
          original: 'https://www.apple.com/newsroom/images/tile-images/Apple_new-iphone-se_04152020.jpg.landing-big_2x.jpg' ,
          thumbnail: 'https://www.apple.com/newsroom/images/tile-images/Apple_new-iphone-se_04152020.jpg.landing-big_2x.jpg',
        },
        {
          original: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg',
          thumbnail: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg',
        },
        {
          original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDEEEgYiv8NjWRPXfVPCCQnRR-KcoJPNAQ8grFf8DyA&s',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDEEEgYiv8NjWRPXfVPCCQnRR-KcoJPNAQ8grFf8DyA&s',
        },
        {
            original: 'https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?resize=625%2C417&p=1',
            thumbnail: 'https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?resize=625%2C417&p=1',
          },
          {
            original: 'https://www.zdnet.com/a/img/resize/b309c0b17aed66661891b83514d214eb341b9774/2022/03/14/462c9ae5-d26f-4274-8f7b-b138e5c4eac7/iphone-se-2022-2.jpg?auto=webp&precrop=4032,2265,x0,y356&width=1280',
            thumbnail: 'https://www.zdnet.com/a/img/resize/b309c0b17aed66661891b83514d214eb341b9774/2022/03/14/462c9ae5-d26f-4274-8f7b-b138e5c4eac7/iphone-se-2022-2.jpg?auto=webp&precrop=4032,2265,x0,y356&width=1280',
          },
      ];
    return (
        <div>
            <ImageGallery autoPlay={true} items={images}/>
        </div>
    );
};

export default DetailsImage;