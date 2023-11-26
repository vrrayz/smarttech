"use client";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { StyleArrowLeft, StyleArrowRight } from "@/components/SidebarDropdown";
import { SCREENS } from "@/screens";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const carouselData = [
    { image: "/images/jumbo-1.jpg", title: "Virtual Reality" },
    { image: "/images/smart-home.jpg", title: "Smart Home" },
    { image: "/images/smart-home-1.jpg", title: "Smart Home" },
  ];
  const [carouselItems, setCarouselItems] = useState(carouselData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === carouselItems.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return carouselItems.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <main>
      <Jumbotron className="mb-5 xl:mb-8">
        <div className="jumbo-item">
          <h4>EVERY HOME WILL BECOME A SMART HOME</h4>
          <a href="" className="btn">
            Learn More <StyleArrowRight />
          </a>
        </div>
      </Jumbotron>
      <Section header={"IOT SOLUTIONS"}>
        <GridSection $items={3} className="mt-5 xl:my-8">
          <Card>
            <img
              src={"/images/smart-home.jpg"}
              alt={"home"}
              className="card-image"
            />
            <h4 className="card-heading">Smart Home</h4>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                perferendis, at cum minima mollitia sit blanditiis quasi nulla
                ab necessitatibus sequi ad ullam quae reiciendis quam minus
                ipsum nisi repudiandae?
              </p>
            </div>
            <div className="card-footer">
              <a href="#">
                Learn More <StyleArrowRight fontSize="small" />
              </a>
            </div>
          </Card>
          <Card>
            <img
              src={"/images/smart-home.jpg"}
              alt={"home"}
              className="card-image"
            />
            <h4 className="card-heading">Smart Home</h4>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                perferendis, at cum minima mollitia sit blanditiis quasi nulla
                ab necessitatibus sequi ad ullam quae reiciendis quam minus
                ipsum nisi repudiandae?
              </p>
            </div>
            <div className="card-footer">
              <a href="#">
                Learn More <StyleArrowRight fontSize="small" />
              </a>
            </div>
          </Card>
          <Card>
            <img
              src={"/images/smart-home.jpg"}
              alt={"home"}
              className="card-image"
            />
            <h4 className="card-heading">Smart Home</h4>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                perferendis, at cum minima mollitia sit blanditiis quasi nulla
                ab necessitatibus sequi ad ullam quae reiciendis quam minus
                ipsum nisi repudiandae?
              </p>
            </div>
            <div className="card-footer">
              <a href="#">
                Learn More <StyleArrowRight fontSize="small" />
              </a>
            </div>
          </Card>
        </GridSection>
      </Section>
      <Section header={"PRODUCTS"}>
        <CarouselContainer className="container mt-5 xl:my-8">
          <Carousel $itemsLength={carouselItems.length}>
            {carouselItems.map((item, i) => (
              <CarouselItem $currentIndex={currentIndex} key={i}>
                <Image src={item.image} alt="item" width={300} height={100} />
                <h4 className="item-caption">{item.title}</h4>
              </CarouselItem>
            ))}
          </Carousel>
          <CarouselButtonContainer>
            <CarouselPreviousButton onClick={() => handlePrevious()}>
              <StyleArrowLeft />
            </CarouselPreviousButton>
            <CarouselNextButton onClick={() => handleNext()}>
              <StyleArrowRight />
            </CarouselNextButton>
          </CarouselButtonContainer>
        </CarouselContainer>
      </Section>
    </main>
  );
}
const CarouselContainer = styled.div`
  position: relative;
`;
const Carousel = styled.div<{ $itemsLength: number }>`
  width: 100%;
  height: 350px;
  margin: auto;
  display: flex;
  overflow: hidden;
  ${SCREENS.lg} {
   height: 500px;
  }
`;
const CarouselButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 160px;
  ${SCREENS.lg} {
    top: 230px;
   }
`;
const CarouselButton = styled.button`
  width: 50px;
  height: 50px;
  color: #fff;
  background: #00000059;
  border-radius: 50%;
`;
const CarouselNextButton = styled(CarouselButton)`
  margin-right: 16px;
`;
const CarouselPreviousButton = styled(CarouselButton)`
  margin-left: 16px;
`;
const CarouselItem = styled.div<{ $currentIndex: number }>`
  min-width: 100%;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  transform: translate(-${(props) => props.$currentIndex * 100}%);
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item-caption {
    color: #fff;
    position: absolute;
    bottom: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-left: 16px;
  }
`;

const GridSection = styled.div<{ $items: number }>`
  display: grid;
  grid-template-rows: repeat(${(props) => props.$items}, 1fr);
  gap: 16px;
  ${SCREENS.md} {
    grid-template-columns: repeat(${(props) => props.$items}, 1fr);
    grid-template-rows: none;
  }
`;

const Jumbotron = styled.section`
  width: 100vw;
  overflow: hidden;
  height: 60vh;
  background: url("/images/jumbo-1.jpg");
  background-size: cover;
  background-position: center;
  .jumbo-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #000000b8;
    color: #fff;
    border-bottom: 1px solid black;
    transition: left 500ms;
    height: 100%;
  }
  .jumbo-item h4 {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
  }
  .jumbo-item a {
    margin: 8px auto;
    padding: 9px 20px;
    display: flex;
    justify-content: space-between;
  }
  .jumbo-item a ${StyleArrowRight} {
    margin-left: 8px;
  }
`;
