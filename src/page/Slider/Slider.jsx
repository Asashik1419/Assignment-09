import React from 'react';
import child from '../../assets/child-6943902_1920.jpg'
import toy from '../../assets/toy-1.jpg'
import toy3 from '../../assets/toy-3.jpg'

const Slider = () => {
    return (
        <div className="carousel h-100 rounded-xl ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={toy}
      className="w-full"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={child}
      className="w-full"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={toy3}
      className="w-full"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    );
};

export default Slider;