import React from 'react';
import { Carousel } from 'antd';

type Image = {
   src: string;
   alt: string;
};

type AppProps = {
   images: Image[];
};

const ScrollView: React.FC<AppProps> = ({ images }) => (
   <Carousel autoplay speed={2250} autoplaySpeed={5000} >
      {images.map((image, index) => (
         <div key={index} className="flex justify-center items-center h-96 overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
         </div>
      ))}
   </Carousel>
);

export default ScrollView;