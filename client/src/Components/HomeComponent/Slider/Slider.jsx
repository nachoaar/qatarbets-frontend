import React, { useState } from 'react';
import { useEffect } from 'react';


export const Slider = () => {

  const images = ['publicidad1.jpg','publicidad2.jpg','publicidad3.jpg'];
  let autoPlay = true;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    if(autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)    
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }

  return (
    <div className="w-full h-full flex justify-between items-center gap-2">
      <div className="h-full w-full flex overflow-hidden rounded-lg bg-cover bg-center" style={{backgroundImage: `url(${require(`../../../media/${selectedImage}`)})`}}>

      </div>
    </div>
  )
}
