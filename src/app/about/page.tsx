"use client";

import { Section } from "@/components/Section";
import styled from "styled-components";
import { Card } from "@/components/Card";
import Image from "next/image";
import { SCREENS } from "@/screens";
import { Jumbotron } from "@/components/Jumbotron";

export default function About() {
  return (
    <main>
      <StyledJumbotron className="mb-5 xl:mb-8">
        <div className="jumbo-item">
          <h4>Smart Homes for Every Home</h4>
        </div>
      </StyledJumbotron>
      <Section header={"Our Mission"}>
        <div className="flex flex-col md:flex-row justify-center lg:justify-start lg:mt-8 lg:mb-16">
          <FlexContentAndImageContainer className="content">
            <Card style={{ height: "100%" }} className="flex flex-col">
              <div className="card-body my-auto" style={{ padding: "16px" }}>
                <p
                  style={{ fontSize: "1rem", color: "#000" }}
                  className="source-code md:text-2xl"
                >
                  To empower individuals and businesses through innovative
                  technological solutions, fostering efficiency, sustainability,
                  and seamless integration. We strive to provide cutting-edge
                  services and products that enhance the overall experience of
                  automation, simplifying daily tasks and contributing to a
                  smarter, connected world.
                </p>
              </div>
            </Card>
          </FlexContentAndImageContainer>
          <FlexContentAndImageContainer
            $background="/images/about/about-1.jpg"
            className="image"
          ></FlexContentAndImageContainer>
          {/* <Image src={"/images/about/about-1.jpg"} width={400} height={600} alt="side_image" className="flex-shrink" /> */}
        </div>
      </Section>
      <Section header={"Our Vision"}>
        <div className="flex flex-col md:flex-row-reverse justify-center lg:justify-start lg:mt-8 lg:mb-16">
          <FlexContentAndImageContainer className="content">
            <Card style={{ height: "100%" }} className="flex flex-col">
              <div className="card-body my-auto" style={{ padding: "16px" }}>
                <p
                  style={{ fontSize: "1rem", color: "#000" }}
                  className="source-code md:text-2xl"
                >
                  Bolesenterprise envisions a future where automation seamlessly
                  integrates with every aspect of homes and offices, creating
                  intelligent environments that adapt to user preferences and
                  contribute to a sustainable and interconnected world. Our
                  commitment is to be a global leader in driving the evolution
                  of smart living and working spaces, making advanced technology
                  accessible to all.
                </p>
              </div>
            </Card>
          </FlexContentAndImageContainer>
          <FlexContentAndImageContainer
            $background="/images/about/about-2.jpg"
            className="image"
          ></FlexContentAndImageContainer>
        </div>
      </Section>
    </main>
  );
}
const StyledJumbotron = styled(Jumbotron)`
  background: url("/images/jumbo-2.jpg");
  background-size: cover;
  background-position: center;
`;
const FlexContentAndImageContainer = styled.div<{ $background?: string }>`
  width: 100%;
  &.image {
    background: url(${(props) => props.$background});
    background-position: center;
    background-size: cover;
    height: 100%;
    min-height: 300px;
  }
  ${SCREENS.md} {
    &.content {
      width: 60%;
      height: 400px;
    }
    &.image {
      width: 40%;
      height: 400px;
    }
  }
`;
