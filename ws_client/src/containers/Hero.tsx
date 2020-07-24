/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { FunctionComponent } from 'react';


const HeroContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: rgb(30, 170, 93);
  padding-top: 12vh;
`

const HeroContent = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
`

const Section = styled.section`
  text-align: center;
  color: white;
  width: 60%;
`

const HeroHeader = styled.h2`
  margin: 2rem 0;
  font-size: 2rem;
`

const HeroParagraph = styled.p`
  margin: 2rem 0;
  font-size: 1.3rem;
`

const Icon = styled.img`
  width: 15rem;
  margin: 1rem 0;
`

type HeroProps = {
  header: string,
  paragraph: string,
  img: string
}

const Hero: FunctionComponent<HeroProps> = ({ header, paragraph, img }) => {

  return (
    <HeroContainer>
      <HeroContent>
        <Section>
          <HeroHeader>{ header }</HeroHeader>
          <HeroParagraph>{paragraph}</HeroParagraph>
        </Section>
      
        <Icon src={ img } alt="hero_img"/>
      </HeroContent>
      
    </HeroContainer>    
  );
}

export default Hero;
