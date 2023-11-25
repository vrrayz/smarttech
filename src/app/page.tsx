"use client";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { StyleArrowRight } from "@/components/SidebarDropdown";
import { SCREENS } from "@/screens";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
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
      </Section>
    </main>
  );
}

const GridSection = styled.div<{ $items: number }>`
  display: grid;
  grid-template-rows: repeat(${(props) => props.$items}, 1fr);
  gap: 16px;
  ${SCREENS.md} {
    grid-template-columns: repeat(${(props) => props.$items}, 1fr);
    grid-template-rows: none;
  }
  ${SCREENS.xl} {
    margin-left: 190px;
    margin-right: 190px;
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
