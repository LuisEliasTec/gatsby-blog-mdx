import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'
//...GatsbyImageSharpFixed

const About = () => {
  const data = useStaticQuery(query)

  return <Wrapper>
    <Title title="about me" />
    <Image fixed={data.file.childImageSharp.fixed} className="img" />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <SocialLinks styleClass="banner-icons" />
  </Wrapper>
}

const query = graphql`
  {
    file(relativePath: {eq: "banner-about.jpeg"}) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
