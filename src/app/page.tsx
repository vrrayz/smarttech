"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [carouselData, setCarouselData] = useState([
    "Legend 1",
    "Legend 2",
    "Legend 3",
  ]);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCarouselPosition((prev) => {
          // console.log("The previous here ", prev);
          return prev > -200 ? prev - 100 : 0;
        }),
      5000
    );
    return (() => clearInterval(interval))
  }, []);
  useEffect(() => {
    // setCarouselData((prev) => {
    //   let firstCarouselData = prev[0];
    //   let copy = [...prev];
    //   copy.splice(0, 1);
    //   copy.push(firstCarouselData);
    //   return copy;
    // });
  }, [carouselPosition]);
  return (
    <main>
      <Carousel $left={carouselPosition}>
        {carouselData.map((item, i) => (
          <div className="carousel-item" key={i}>
            <h4>{item}</h4>
            <p className="legend">{item}</p>
          </div>
        ))}
      </Carousel>
    </main>
  );
}

const Carousel = styled.section<{ $left: number }>`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  .carousel-item {
    position: relative;
    left: ${(props) => props.$left}vw;
    width: 100vw;
    height: 60vh;
    background-color: #aaa;
    border-bottom: 1px solid black;
    transition: left 500ms;
  }
`;
