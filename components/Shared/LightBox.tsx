import get from 'lodash.get';
import React from 'react';
import * as FeatherIcon from 'react-feather';
import Slider from 'react-slick';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styled from 'styled-components';

export type mediaType = {
  id: number;
  type: 'primary' | 'gallery';
  value: string;
};

const ImageBlock = styled.div`
  & {
    z-index: 501;
    width: 45%;
  }
  & .slick-slider {
    height: 100vh;
    padding: 5vh 0;
  }

  & .slick-slider .react-transform-component {
    /* height: 75vh; */
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
  }
  & .slick-slider ul.slick-dots.slick-thumb li {
    width: 90px;
    height: 90px;
    max-width: 100px;
  }
  & .slick-slider ul.slick-dots.slick-thumb li a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .slick-slider ul.slick-dots.slick-thumb li a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .slick-list {
    padding: 0px !important;
  }
  & .slick-slider ul.slick-dots.slick-thumb {
    position: relative !important;
    bottom: 0 !important;
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  & .slick-prev,
  & .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 50px;
    height: 110px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    z-index: 100;
  }
  & .slick-prev:hover,
  & .slick-next:hover {
    color: #000000;
    background: #ffffff;
    transition: all 0.4s linear;
  }
  & .slick-prev {
    left: 5px !important;
  }
  & .slick-next {
    right: 5px !important;
  }
  & li.slick-active {
    border-bottom: 2px solid #ffffff;
  }
  & li {
    border-bottom: 2px solid #ffffff00;
    padding: 5px;
  }
  @media only screen and (max-width: 600px) {
    & .slick-prev {
      left: 5px !important;
    }
    & .slick-next {
      right: 5px !important;
    }
    & .slick-slider {
      height: 100vh;
      padding: 5vh 2vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    & .slick-prev,
    & .slick-next {
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 40%;
      display: block;
      width: 30px;
      height: 70px;
      padding: 0;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      cursor: pointer;
      color: transparent;
      border: none;
      outline: none;
      background: transparent;
      color: #ffffff;
      z-index: 100;
    }
  }
  @media only screen and (max-width: 986px) {
    & {
      width: 100%;
      position: relative;
      height: auto;
    }
    & .slick-slider {
      height: 100vh;
      padding: 5vh 2vh;
    }

    & .slick-slider .react-transform-component {
      height: 75vh;
    }
    & .slick-slider ul.slick-dots.slick-thumb li {
      width: auto;
      height: 15vh;
      max-width: 100px;
    }
    & .slick-slider ul.slick-dots.slick-thumb img {
      height: 100%;
    }
    & .slick-slider ul.slick-dots.slick-thumb {
      position: relative !important;
      bottom: 0 !important;
      display: block;
      width: 100%;
      padding: 10px 0;
      margin: 0;
      list-style: none;
      text-align: center;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 700px) {
    & .slick-slider .react-transform-component {
      height: 65vh;
      cursor: -moz-zoom-in;
      cursor: -webkit-zoom-in;
      cursor: zoom-in;
    }
  }
  @media only screen and (min-height: 800px) and (max-height: 830px) {
    & .slick-slider .react-transform-component {
      height: 55vh;
    }
  }
`;
const Modelbg = styled.div`
  & {
    height: 100vh;
    width: 100%;
    position: absolute;
    background: rgb(173, 165, 165);
    background: radial-gradient(
      circle,
      rgba(173, 165, 165, 1) 0%,
      rgba(105, 105, 114, 1) 14%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 500;
    filter: blur(0px) brightness(30%);
  }
`;

const Thumbnail = styled.div`
  & .mainImage {
    height: 75vh;
    width: 50%;
    width: auto;
  }
  & {
    height: 100%;
  }
  & .tools {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .toolButton {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  @media only screen and (max-width: 600px) {
    width: auto;
  }
  @media only screen and (min-width: 375px) and (max-width: 700px) {
    & .mainImage {
      height: 65vh;
      width: auto;
    }
  }
  @media only screen and (min-height: 800px) and (max-height: 830px) {
    & .mainImage {
      height: 55vh;
      width: auto;
    }
  }
`;
type Props = {
  fabrics?: any;
  style?: any;
  openModal?: any;
  openShareModal?: any;
  selectedFabric?: any;
  addToWishlist?: any;
  removeFromWishlist?: any;
  setShowBottomMenu?: any;
  setBottomMenuType?: any;
  pageType?: 'STYLE' | 'PAIR_PERFECT';
  setpageType?: any;
  setactiveStyleTab?: any;
  activeStyleTab?: any;
  setInfoPopupType?: any;
  onclose?: any;
  name: string;
  data: { value: string; name: string}[];
  initalImage: { value: string; name: string};
};
function SampleNextArrow(props: { className: string; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <FeatherIcon.ChevronRight
      size={20}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

// tslint:disable-next-line: no-any
function SamplePrevArrow(props: { className: string; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <FeatherIcon.ChevronLeft
      size={20}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
export default function LightBox(props: Props) {
  const { onclose, data, name, initalImage } = props;
  const [activeImage, setactiveImage] = React.useState(initalImage.value);
  const idx: number = data.findIndex((i) => i.value === activeImage);
  
  const imageArray = data;
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
            <img src={imageArray[i].value} alt={name} />
        </a>
      );
    },
    nextArrow: <SampleNextArrow className="CNextArrow" style="any" onClick="any" />,
    prevArrow: <SamplePrevArrow className="CPrevArrow" style="any" onClick="any" />,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: idx
  };

  // useLockBodyScroll();
  return (
    <div className=" fixed w-full  h-screen top-0 " style={{ zIndex: 1000 }}>
      <Modelbg />
      <div className="flex items-center fixed " style={{ right: '10px', top: '10px', zIndex: 502 }}>
        <a
          onClick={onclose}
          className="flex items-center text-gray-100 cursor-pointer hover:text-white  rounded-full justify-center md:h-10 md:w-10  h-7 w-7"
        >
          {/* <span className="icons8-cancel text-2xl" /> */}
          <FeatherIcon.XCircle size={24} color="white" />
        </a>
      </div>
      <div className="flex justify-start flex-col items-center h-full w-full">
        <ImageBlock className=" flex justify-start items-start flex-col ">
          <div className="container mx-auto flex flex-col">
            <Slider {...settings}>
              {data &&
                data.length > 0 &&
                data.map((item: { value: string; name: string}, index: number) => (
                  <Thumbnail
                    className="pb-0 md:pb-2 "
                    key={index}
                    onClick={() => setactiveImage(get(item, 'value'))}
                  >
                    {}
                    <div className="flex justify-center items-center">
                      <TransformWrapper
                        //@ts-ignore
                        defaultScale={1}
                        defaultPositionX={200}
                        defaultPositionY={100}
                      >
                        {({ zoomIn, zoomOut, resetTransform }: any) => (
                          <React.Fragment>
                            <div className="tools">
                              <button
                                className="toolButton text-black hover:text-hoveredText"
                                onClick={zoomIn}
                              >
                                <FeatherIcon.Plus size="18" strokeWidth="1px" />
                              </button>
                              <button
                                className="toolButton text-black hover:text-hoveredText"
                                onClick={zoomOut}
                              >
                                {/* <i className=" icons8-minutext-2xl" /> */}
                                <FeatherIcon.Minus size="18" strokeWidth="1px" />
                              </button>
                              <button
                                className="toolButton text-black hover:text-hoveredText"
                                onClick={resetTransform}
                              >
                                <FeatherIcon.Minimize size="18" strokeWidth="1px" />
                              </button>
                            </div>
                            <TransformComponent>
                              
                                <img src={item.value} alt={name} className="mainImage" />
                              
                            </TransformComponent>
                          </React.Fragment>
                        )}
                      </TransformWrapper>
                    </div>
                  </Thumbnail>
                ))}
            </Slider>
          </div>
        </ImageBlock>
      </div>
    </div>
  );
}

// function useLockBodyScroll() {
//     React.useLayoutEffect(() => {
//         // Get original body overflow
//         const originalStyle = window.getComputedStyle(document.body).overflow;
//         // Prevent scrolling on mount
//         document.body.style.overflow = "hidden";
//         // Re-enable scrolling when component unmounts
//         return () => (document.body.style.overflow = originalStyle);
//     }, []); // Empty array ensures effect is only run on mount and unmount
// }
