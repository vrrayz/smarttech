"use client";
import { Card } from "@/components/Card";
import { Carousel } from "@/components/Carousel";
import { Section } from "@/components/Section";
import { StyleArrowLeft, StyleArrowRight } from "@/components/SidebarDropdown";
import { Caption } from "@/components/Text";
import {
  iotSolutions,
  productsCarouselData,
  productsData,
  technologyCarouselData,
} from "@/data/home";
import { SCREENS } from "@/screens";
import { CloudDownload, DocumentScanner, People } from "@mui/icons-material";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
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
          {iotSolutions.map((solution, i) => (
            <Card key={i}>
              <Image
                src={solution.image}
                alt={solution.title}
                className="card-image"
                width={200}
                height={200}
              />
              <h4 className="card-heading">{solution.title}</h4>
              <div className="card-body">
                <p>
                  {solution.description}
                </p>
              </div>
              <div className="card-footer">
                <a href="#">
                  Learn More <StyleArrowRight fontSize="small" />
                </a>
              </div>
            </Card>
          ))}
        </GridSection>
      </Section>
      <Section header={"PRODUCTS"}>
        <Carousel carouselItems={productsCarouselData} />
        <GridSection $items={3} className="xl:mb-8">
          {productsData.map((product, i) => (
            <ProductDisplayContainer key={i}>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
              />
              <Caption>{product.title}</Caption>
            </ProductDisplayContainer>
          ))}
        </GridSection>
      </Section>
      <Section header={"TECHNOLOGY"}>
        <Carousel
          carouselItems={technologyCarouselData}
          hasDetailedCaption={true}
          useTabs={true}
        />
      </Section>
      <Section header={""}>
        <Banner className="mt-4">
          <div className="mt-4">
            <h4>Smart life in your control</h4>
            <p>Your smart home all set within a few steps</p>
            <div className="flex gap-2 justify-center lg:justify-start lg:mt-8 lg:mb-16">
              <Image
                src={"/images/qr_1.jpg"}
                width={108}
                height={108}
                alt="QR"
              />
              <Image
                src={"/images/qr_2.jpg"}
                width={108}
                height={108}
                alt="QR"
              />
            </div>
          </div>
          <Image
            src={"/images/banner_1.webp"}
            width={338}
            height={154}
            alt="banner"
            className="banner-image"
          />
        </Banner>
      </Section>
      <Section header={""}>
        <GridSection $items={3}>
          <ExtraLinkPanel $background="/images/banner_bg.jpg">
            <div className="panel-overlay">
              <CloudDownload fontSize="large" />
              <span>Download Center</span>
            </div>
          </ExtraLinkPanel>
          <ExtraLinkPanel $background="/images/banner_bg.jpg">
            <div className="panel-overlay">
              <DocumentScanner fontSize="large" />
              <span>About Us</span>
            </div>
          </ExtraLinkPanel>
          <ExtraLinkPanel $background="/images/banner_bg.jpg">
            <div className="panel-overlay">
              <People fontSize="large" />
              <span>Partnership</span>
            </div>
          </ExtraLinkPanel>
        </GridSection>
      </Section>
    </main>
  );
}
const ExtraLinkPanel = styled.div<{ $background: string }>`
  background: url(${(props) => props.$background});
  background-position: center;
  background-size: cover;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  svg {
    margin: 0 auto;
  }
  .panel-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 256px;
    color: #fff;
    background: #0000005c;
  }
`;
const Banner = styled.div`
  background: url("/images/banner_bg.jpg");
  background-position: center;
  background-size: cover;
  padding: 16px;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  h4 {
    font-size: 22px;
    font-weight: bold;
    margin: 8px 0px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    margin: 4px 0px;
  }
  .banner-image {
    width: 100%;
    height: auto;
  }
  ${SCREENS.lg} {
    flex-direction: row;
    text-align: left;
    padding-right: 0px;

    .banner-image {
      flex: 0 70%;
      height: fit-content;
    }
    h4 {
      font-size: 30px;
      margin: 16px 0px;
    }
    p {
      margin: 16px 0px;
    }
  }
`;
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
