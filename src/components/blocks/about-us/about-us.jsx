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
import { teamMembers } from './about-us.constants';
import { Title, TitleSize } from '../../ui/title/title';
import { LogoSize } from '../../ui/logo/styled';
import Button from '../../ui/button/button';
import BackgroundCircle from '../../../elements/background';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [refPhoto, inView] = useInView();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex + 1);
  };

  const swiperRef = useRef(null);

  const handlerPrev = () => {
    swiperRef.current.slidePrev();
  };

  const handlerNext = () => {
    swiperRef.current.slideNext();
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
            A few years ago I got the idea to make a studio for crypto-projects
            development on the basis of my website development agency. I myself
            was interested in cryptocurrency and was learning a little about
            smart contracts.
          </DescriptionText>
          <DescriptionText>
            A little later we received an order from my old clients, then they
            ordered not only a website, but also gave the task to create an
            NFT-collection with interaction logic. Then we took on the project,
            and I started building our team.
          </DescriptionText>
          <DescriptionText>
            At the moment, DigitalSoup employs 8 people and 3 managers in their
            areas, who are always ready to discuss your project with you!
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
          {teamMembers &&
            teamMembers.length &&
            teamMembers.map((item, index) => (
              <SwiperSlide style={{ transform: 'translate3d(0, 0, 0)' }}>
                <Bio>
                  <BioPhoto
                    src={item.photo}
                    width="202"
                    height="202"
                    alt={item.memberName}
                    ref={index === 0 ? refPhoto : null}
                    className={`animated-element ${isVisible ? 'visible' : ''}`}
                  />
                  <BioLogo size={LogoSize.SMALL} />
                  <BioTitle as={'h3'}>{item.memberName}</BioTitle>
                  <BioText>{item.description}</BioText>
                  {item.contact ? (
                    <Button simple={true} link={item.contact} target="_blank">
                      Let's talk
                    </Button>
                  ) : null}
                </Bio>
              </SwiperSlide>
            ))}
        </StyledSwiper>
        <StyledPagination
          max={teamMembers.length}
          currentCount={activeSlideIndex}
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
