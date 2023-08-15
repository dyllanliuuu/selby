import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import NextImage from 'next/image';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>TRUSTED BY VARIOUS STORES WITH $100M+ IN SALES</CustomOverTitle>
        <Heading>
          Cross-sell your hottest products at other <br/> E-commerce stores
        </Heading>
        <Description>
        We help E-commerce stores largely boost sales by cross-selling their products on other stores with complementary products <br/> 
        (i.e. selling headsets at a keyboard store).
        </Description>
        <CustomButtonGroup>
          <Button onClick={() => window.open('https://calendly.com/dyllan-berkeley/multi-store-cross-selling-for-your-products')}>
            Start Selling <span>&rarr;</span>
          </Button>
          <Button transparent style={{ padding: 0, width: 150 }} onClick={() => (location.href = 'https://www.ycombinator.com/')}>
            <NextImage src={'/backed-by-yc/tan.svg'} layout={'fill'} />
          </Button>
          {/* <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink> */}
        </CustomButtonGroup>
      </Contents>
      <div style={{ flexDirection: 'column' }}>
        {/* <ImageContainer>
          <HeroIllustration />
        </ImageContainer> */}
        <ImageContainer>
          <NextImage src={'/selby_picture.jpg'} width={600} height={600} />
        </ImageContainer>
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
