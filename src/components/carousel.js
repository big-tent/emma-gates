import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"

const width = "100%",
  height = "80vh"

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: ${width};
`
const Children = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  height: ${height};
`
const Arrow = styled.div`
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  user-select: none;
`
const Dots = styled.div`
  margin: 0 auto;
  text-align: center;
  width: ${width};
  z-index: 100;
`

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>{children}</Children>
    <Arrow onClick={handleClick} data-position={position - 1}>
      {"<"}
    </Arrow>
    <Arrow right onClick={handleClick} data-position={position + 1}>
      {">"}
    </Arrow>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
)
const Carousel = makeCarousel(CarouselUI)

export default () => (
  <StaticQuery
    query={graphql`
      query CarouselQuery {
        allContentfulImage {
          edges {
            node {
              image {
                fluid {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              caption
            }
          }
        }
      }
    `}
    render={data => (
      <Carousel defaultWait={100000}>
        {data.allContentfulImage.edges.map(edge => (
          <Slide right key={edge}>
            <Img
              imgStyle={{
                objectFit: "contain"
              }}
              fluid={edge.node.image.fluid}
              alt={edge.node.caption}
            />
          </Slide>
        ))}
      </Carousel>
    )}
  />
)
