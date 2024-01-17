import React, { useState } from "react";
import styled from "styled-components";
import { StyleArrowLeft, StyleArrowRight } from "./SidebarDropdown";
import { SCREENS } from "@/screens";
import Image from "next/image";
import { Caption } from "./Text";

interface Props {
  carouselItems: {
    image: string;
    title: string;
    description?: string;
    link?: string;
  }[];
  hasDetailedCaption?: boolean;
  useTabs?: boolean;
}

export const Carousel = ({
  carouselItems,
  hasDetailedCaption,
  useTabs,
}: Props) => {
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
    <>
      {useTabs && (
        <TabsContainer className="mt-5 xl:my-5 mb-3">
          {carouselItems.map((item, i) => (
          <Tab key={i} onClick={() => setCurrentIndex(i)} className={`${i === currentIndex && 'active'}`}>{item.title}</Tab>
          ))}
        </TabsContainer>
      )}
      <CarouselContainer className="container xl:mb-5">
        <MainCarousel $itemsLength={carouselItems.length}>
          {carouselItems.map((item, i) => (
            <CarouselItem
              $currentIndex={currentIndex}
              key={i}
              $hasDetailedCaption={hasDetailedCaption}
            >
              <Image src={item.image} alt="item" width={300} height={100} />
              {hasDetailedCaption ? (
                <DetailedCaption>
                  <Caption>{item.title}</Caption>
                  <p>
                    <span>{item.description}</span>
                    <a href={item.link}>Learn More</a>
                  </p>
                </DetailedCaption>
              ) : (
                <Caption>{item.title}</Caption>
              )}
            </CarouselItem>
          ))}
        </MainCarousel>
        <CarouselButtonContainer $hasDetailedCaption={false}>
          <CarouselPreviousButton onClick={() => handlePrevious()}>
            <StyleArrowLeft />
          </CarouselPreviousButton>
          <CarouselNextButton onClick={() => handleNext()}>
            <StyleArrowRight />
          </CarouselNextButton>
        </CarouselButtonContainer>
      </CarouselContainer>
    </>
  );
};
const TabsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 8px;
`;
const Tab = styled.div`
  padding: 8px 16px;
  background: #fff;
  font-weight: bold;
  &:hover, &.active {
    background: #0a18cb;
    color: #fff;
    cursor: pointer;
  }
`;
const DetailedCaption = styled.div`
  background: #fff;
  height: 40%;
  ${Caption} {
    color: #000;
    position: relative;
    bottom: 0px;
    padding-top: 8px;
    font-size: 1.1rem;
    letter-spacing: 0;
  }
  p {
    margin-left: 16px;
    color: #9fa5ae;
    font-weight: 300;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }
  p a {
    color: #0a18cb;
    font-weight: bold;
  }
  ${SCREENS.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 30%;
    ${Caption} {
      margin: auto;
      font-size: 1.6rem;
    }
    p {
      font-size: 16px;
    }
  }
`;
const CarouselContainer = styled.div`
  position: relative;
`;
const MainCarousel = styled.div<{ $itemsLength: number }>`
  width: 100%;
  max-width: 750px;
  height: 100%;
  margin: auto;
  display: flex;
  overflow: hidden;
  ${SCREENS.lg} {
    // height: 500px;
  }
`;
const CarouselButtonContainer = styled.div<{ $hasDetailedCaption?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: ${(props) => (props.$hasDetailedCaption ? "48" : "96")}px;
  ${SCREENS.lg} {
    top: ${(props) => (props.$hasDetailedCaption ? "96" : "192")}px;
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
const CarouselItem = styled.div<{
  $currentIndex: number;
  $hasDetailedCaption?: boolean;
}>`
  min-width: 100%;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  transform: translate(-${(props) => props.$currentIndex * 100}%);
  position: relative;
  img {
    width: 100%;
    height: 150px;
    // width: 100%;
    // height: ${(props) => (props.$hasDetailedCaption ? "60" : "100")}%;
    object-fit: cover;
    max-width: 750px;
  }
  ${SCREENS.md} {
    img {
      height:208px;
    }
  }
  ${SCREENS.lg} {
    img {

      // height: ${(props) => (props.$hasDetailedCaption ? "70" : "100")}%;
    }
  }
`;
