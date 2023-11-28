"use client";
import { Card } from "@/components/Card";
import { Carousel } from "@/components/Carousel";
import { Section } from "@/components/Section";
import { StyleArrowLeft, StyleArrowRight } from "@/components/SidebarDropdown";
import { Caption } from "@/components/Text";
import { SCREENS } from "@/screens";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  const productsCarouselData = [
    { image: "/images/jumbo-1.jpg", title: "Virtual Reality" },
    { image: "/images/smart-home.jpg", title: "Smart Home" },
    { image: "/images/smart-home-1.jpg", title: "Smart Home" },
  ];
  const technologyCarouselData = [
    { image: "/images/jumbo-1.jpg", title: "Tech one", description: "We build our system and connection with bank level encryption and security from smart devices, edge gateway, cloud services to applications.", link: "/technology" },
    { image: "/images/jumbo-1.jpg", title: "Tech two", description: "We build our system and connection with bank level encryption and security from smart devices, edge gateway, cloud services to applications.", link: "/technology" },
    { image: "/images/jumbo-1.jpg", title: "Tech three", description: "We build our system and connection with bank level encryption and security from smart devices, edge gateway, cloud services to applications.", link: "/technology" },
    { image: "/images/jumbo-1.jpg", title: "Tech fourx", description: "We build our system and connection with bank level encryption and security from smart devices, edge gateway, cloud services to applications.", link: "/technology" },
  ];
  const productsData = [
    { image: "/images/product_1.webp", title: "Product One" },
    { image: "/images/product_2.webp", title: "Product Two" },
    { image: "/images/product_3.webp", title: "Product Three" },
  ];

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
        <Carousel carouselItems={productsCarouselData} />
        <GridSection $items={3} className="xl:mb-8">
          {productsData.map((product, i) => (
            <ProductDisplayContainer key={i}>
              <Image src={product.image} alt={product.title} width={300} height={300} />
              <Caption>{product.title}</Caption>
            </ProductDisplayContainer>
          ))}
        </GridSection>
      </Section>
      <Section header={"TECHNOLOGY"}>
        <Carousel carouselItems={technologyCarouselData} hasDetailedCaption={true} useTabs={true} />
      </Section>
    </main>
  );
}
const ProductDisplayContainer = styled.div`
  position: relative;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
