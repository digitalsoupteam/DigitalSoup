import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Wrapper from '../../layout/wrapper/wrapper';
import {
  StyledAboutUs,
  Description,
  DescriptionText,
  Bio,
  StyledSwiper,
  BioLogo,
  BioTitle,
  BioText,
  BioPhoto,
  StyledPagination,
} from './styled';
import { Title, TitleSize } from '../../ui/title/title';
import { LogoSize } from '../../ui/logo/styled';
import Button from '../../ui/button/button';
import NikPhoto from '../../../assets/nik-photo-2.png';
// import AndrwPhoto from '../../../assets/andrew.PNG';
import KirillPhoto from '../../../assets/Kirill.jpg';
import AlexPhoto1 from '../../../assets/Alex1.png';
// import AlexPhoto2 from '../../../assets/Alex2.PNG';
// import AlexPhoto3 from '../../../assets/Alex3.JPG';
import LinaPhoto from '../../../assets/lina.jpg';
import BackgroundCircle from '../../../elements/background';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [refPhoto, inView] = useInView();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const swiperRef = useRef(null);

  const handlerPrev = () => {
    swiperRef.current.slidePrev();
    setActiveSlideIndex(
      activeSlideIndex + 1 > 1 ? activeSlideIndex - 1 : activeSlideIndex,
    );
  };

  const handlerNext = () => {
    swiperRef.current.slideNext();
    setActiveSlideIndex(
      activeSlideIndex + 1 <= 3 ? activeSlideIndex + 1 : activeSlideIndex,
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 1200;

      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop);
      }
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setIsVisible(true);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <Wrapper id="about">
      <StyledAboutUs>
        <Description>
          <Title size={TitleSize.MEDIUM} as={'h2'}>
            A few words about us
          </Title>
          <DescriptionText>
            The idea for this project emerged based on our already established
            marketing agency, founded in 2017. After working on the promotion of
            various crypto projects, we assembled a team of developers and
            decided to form a comprehensive web3 work cycle team.
          </DescriptionText>
          <DescriptionText>
            In addition to project development and promotion, we demonstrate
            exceptional proficiency in business logic.
          </DescriptionText>
        </Description>
        <StyledSwiper
          modules={[Navigation]}
          navigation
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          freeMode
          watchSlidesProgress
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide style={{ transform: 'translate3d(0, 0, 0)' }}>
            <Bio>
              <BioPhoto
                src={NikPhoto}
                width="202"
                height="202"
                alt="CEO Nikita Daszewski"
                ref={refPhoto}
                className={`animated-element ${isVisible ? 'visible' : ''}`}
              ></BioPhoto>
              <BioLogo size={LogoSize.SMALL} />
              <BioTitle as={'h3'}>
                CEO
                <br />
                Nikita Daszewski
              </BioTitle>
              <BioText>
                In SMM since 2015
                <br />
                In Development since 2021
              </BioText>
              <Button
                simple={true}
                link="https://t.me/dashewski"
                target="_blank"
              >
                Let's talk
              </Button>
            </Bio>
          </SwiperSlide>
          {/* <SwiperSlide>
            <Bio>
              <BioLogo size={LogoSize.SMALL} />
              <BioPhoto
                src={AndrwPhoto}
                width="202"
                height="202"
                alt="Andrew Lefter Head of smm"
                className={`animated-element ${isVisible ? 'visible' : ''}`}
              ></BioPhoto>
              <BioTitle as={'h3'}>
                Head of SMM <br />
                Andrew Lefter
              </BioTitle>
              <BioText>
                In SMM since 2014
                <br />
                In Crypto since 2017
              </BioText>
              <Button simple={true} link="https://t.me/Iefter" target="_blank">
                Let's talk
              </Button>
            </Bio>
          </SwiperSlide> */}
          <SwiperSlide>
            <Bio>
              <BioLogo size={LogoSize.SMALL} />
              <BioPhoto
                src={KirillPhoto}
                width="202"
                height="202"
                alt="Front-end teamlead Kirill Bashorin"
                className={`animated-element ${isVisible ? 'visible' : ''}`}
              ></BioPhoto>
              <BioTitle as={'h3'}>
                Front-end teamlead <br />
                Kirill Bashorin
              </BioTitle>
              <BioText>
                In development since 2017
                <br />
              </BioText>
              <Button
                simple={true}
                link="https://t.me/kirillbshrn"
                target="_blank"
              >
                Let's talk
              </Button>
            </Bio>
          </SwiperSlide>
          <SwiperSlide>
            <Bio>
              <BioLogo size={LogoSize.SMALL} />
              <BioPhoto
                src={AlexPhoto1}
                width="202"
                height="202"
                alt="Solidity teamlead Aleks Korolev"
                className={`animated-element ${isVisible ? 'visible' : ''}`}
              ></BioPhoto>
              <BioTitle as={'h3'}>
                Solidity teamlead <br />
                Aleks Korolev
              </BioTitle>
              <BioText>
                In development since 2016
                <br />
              </BioText>
              {/* <Button simple={true} link="https://t.me/Inveker" target="_blank">
                Let's talk
              </Button> */}
            </Bio>
          </SwiperSlide>
          <SwiperSlide>
            <Bio>
              <BioLogo size={LogoSize.SMALL} />
              <BioPhoto
                src={LinaPhoto}
                width="202"
                height="202"
                alt="Art director Eli Weinstein"
                className={`animated-element ${isVisible ? 'visible' : ''}`}
              ></BioPhoto>
              <BioTitle as={'h3'}>
                Art director <br />
                Eli Weinstein
              </BioTitle>
              <BioText>
                In Design since 2014
                <br />
              </BioText>
              <Button
                simple={true}
                link="https://t.me/image_open"
                target="_blank"
              >
                Let's talk
              </Button>
            </Bio>
          </SwiperSlide>
        </StyledSwiper>
        <StyledPagination
          max={4}
          currentCount={activeSlideIndex + 1}
          onPrevClick={handlerPrev}
          onNextClick={handlerNext}
        />
        <BackgroundCircle
          $top={{ mobile: '114px', desktop: '-342px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: 'auto', desktop: '25px' }}
          $right={{ mobile: '-8px', desktop: 'auto' }}
          $width={{ mobile: '218px', desktop: '290px' }}
          $height={{ mobile: '218px', desktop: '290px' }}
          $bgColor={(props) => props.theme.bgPinkColor}
          $blur="86px"
        />
        <BackgroundCircle
          $top={{ mobile: '244px', desktop: '-280px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: 'auto', desktop: '198px' }}
          $right={{ mobile: '-7px', desktop: 'auto' }}
          $width={{ mobile: '162px', desktop: '216px' }}
          $height={{ mobile: '162px', desktop: '216px' }}
          $bgColor={(props) => props.theme.bgBlueColor}
          $blur="86px"
        />
      </StyledAboutUs>
    </Wrapper>
  );
};

export default AboutUs;
