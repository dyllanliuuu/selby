import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const TEAM_LOGOS = [
  'logo-amazon.svg',
  'logo-mckinsey.svg',
  'logo-netflix.svg',
  'logo-bair.svg',
];

export default function Teams() {
  return (
    <TeamsWrapper>
      <Title>Built by expert teams from</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        // breakpoints={{
        //   320: { slidesPerView: 2 },
        //   768: { slidesPerView: 4 },
        //   1025: { slidesPerView: 6 },
        // }}
        className="swiper-wrapper"
      >
        {TEAM_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/teams/' + logo} alt={normalizePartnerLogoName(logo)} width={128} height={128} />
          </SwiperSlide>
        ))}
      </Swiper>
    </TeamsWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const TeamsWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
