"use client";
import { Card } from "@/components/Card";
import { Carousel } from "@/components/Carousel";
import { Section } from "@/components/Section";
import { StyleArrowLeft, StyleArrowRight } from "@/components/SidebarDropdown";
import { Caption } from "@/components/Text";
import {
  iotSolutions,
  newsData,
  productsCarouselData,
  productsData,
  technologyCarouselData,
} from "@/data/home";
import { products } from "@/data/products";
import { SCREENS } from "@/screens";
import { CloudDownload, DocumentScanner, People } from "@mui/icons-material";
import Image from "next/image";
import { useMemo } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Jumbotron } from "@/components/Jumbotron";
import { GridSection } from "@/components/GridSection";

export default function Home() {
  const smartLighting = useMemo(
    () =>
      products.smart_home_automation_lighting.items.filter(
        (value, index) => index > 2
      ),
    []
  );
  const cameras = useMemo(
    () =>
      products.camera_list_and_specifications.items.filter(
        (value, index) => index <= 2
      ),
    []
  );
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
      <Section header={"SMART HOME AUTOMATION LIGHTING"}>
        <GridSection $items={3} className="mt-5 xl:my-8">
          {smartLighting.map((solution, i) => (
            <CustomCard key={i}>
              <Image
                src={solution.image}
                alt={solution.title}
                className="card-image contain"
                width={200}
                height={200}
              />
              <h4 className="card-heading">{solution.title}</h4>
              <div className="card-body">
                <div style={{ maxHeight: "172px", overflow: "hidden" }}>
                  {parse(solution.description)}
                </div>
              </div>
              <CustomCardFooter className="card-footer">
                <a
                  href="/products/categories/smart_home_automation_lighting"
                  className="footer-btn"
                >
                  Learn More <StyleArrowRight fontSize="small" />
                </a>
              </CustomCardFooter>
            </CustomCard>
          ))}
        </GridSection>
      </Section>
      <Section header={""}>
        {/* <Carousel carouselItems={productsCarouselData} /> */}
        <Image
          src={"/images/products_carousel/security_cams.png"}
          width={1200}
          height={444}
          alt={"cam_image"}
        />
        <Image
          src={"/images/products_carousel/alexa.png"}
          width={1200}
          height={444}
          alt={"cam_image"}
        />
        {/* <GridSection $items={3} className="xl:mb-8">
          {cameras.map((product, i) => (
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
        </GridSection> */}
      </Section>
      <Section header={""}>
        <Banner className="mt-4">
          <div className="mt-4">
            <h4>Smart life in your control</h4>
            <p>Your smart home all set within a few steps</p>
            {/* <div className="flex gap-2 justify-center lg:justify-start lg:mt-8 lg:mb-16">
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
            </div> */}
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
          <ExtraLinkPanel $background="/images/banner_bg.jpg" href={'products/categories/smart_home_automation_lighting'}>
            <div className="panel-overlay">
              <CloudDownload fontSize="large" />
              <span>Products</span>
            </div>
          </ExtraLinkPanel>
          <ExtraLinkPanel $background="/images/banner_bg.jpg" href="/about">
            <div className="panel-overlay">
              <DocumentScanner fontSize="large" />
              <span>About Us</span>
            </div>
          </ExtraLinkPanel>
          <ExtraLinkPanel $background="/images/banner_bg.jpg" href="/support">
            <div className="panel-overlay">
              <People fontSize="large" />
              <span>Support</span>
            </div>
          </ExtraLinkPanel>
        </GridSection>
      </Section>
      {/* <Section header={"NEWS"}>
        <GridSection $items={3} className="mt-5 xl:my-8">
          {newsData.map((news, i) => (
            <Card key={i}>
              <Image
                src={news.image}
                alt={news.title}
                className="card-image"
                width={200}
                height={200}
              />
              <h4 className="card-heading">{news.title}</h4>
              <div className="card-body">
                <p>{news.description}</p>
              </div>
              <div className="card-footer">
                <a href="#">
                  {news.date} <StyleArrowRight fontSize="small" />
                </a>
              </div>
            </Card>
          ))}
        </GridSection>
      </Section> */}
    </main>
  );
}
const ExtraLinkPanel = styled.a<{ $background: string }>`
  display: block;
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

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;
const CustomCardFooter = styled.div`
  display: flex;
  height: 100%;
  a.footer-btn {
    margin-top: auto;
  }
`;
