"use client";

import React from "react";
import styled from "styled-components";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import { SCREENS } from "@/screens";
import {
  aboutMenu,
  productsMenu,
  solutionsMenu,
  supportMenu,
} from "@/data/menuitems";

export const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <FooterMenuContainer>
          <FooterMenu>
            <h4>Products</h4>
            {productsMenu.items.map((product, i) => (
              <a href={product.link} key={i}>
                {product.item}
              </a>
            ))}
          </FooterMenu>
          <FooterMenu>
            <h4>Solutions</h4>
            {solutionsMenu.items.map((solution, i) => (
              <a href={solution.link} key={i}>
                {solution.item}
              </a>
            ))}
          </FooterMenu>
          <FooterMenu>
            <h4>Support</h4>
            {supportMenu.items.map((support, i) => (
              <a href={support.link} key={i}>
                {support.item}
              </a>
            ))}
          </FooterMenu>
          <FooterMenu>
            <h4>About Us</h4>
            {aboutMenu.items.map((about, i) => (
              <a href={about.link} key={i}>
                {about.item}
              </a>
            ))}
            <ContactButton className="text-small btn btn-primary nav-button">
              Get a quote
            </ContactButton>
          </FooterMenu>
        </FooterMenuContainer>
        <ContactButton className="text-small btn btn-primary nav-button">
          Get a quote
        </ContactButton>
        <div className="md:flex md:justify-between border-bottom">
          <ContactLinks>
            <a href="#">
              <LinkedIn fontSize="large" />
            </a>
            <a href="#">
              <YouTube fontSize="large" />
            </a>
            <a href="#">
              <Facebook fontSize="large" />
            </a>
            <a href="#">
              <Twitter fontSize="large" />
            </a>
          </ContactLinks>
          <Terms>
            <a href="#">Terms of Use</a> <span>|</span> <a href="#">Privacy</a>
          </Terms>
        </div>
        <Copyright>
          Copyright © 2023 SmartTech Inc. All Rights Reserved.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 8px;
  background: #fff;
  ${SCREENS.md} {
    padding: 16px;
  }
  ${SCREENS.lg} {
    padding: 32px;
  }
`;
const ContactButton = styled.a`
  display: block;
  border-radius: 0px;
  text-align: center;
  padding: 8px;
  font-size: 18px;
  font-weight: 300;
  ${SCREENS.md} {
    display: none;
  }
`;
const ContactLinks = styled.div`
  display: flex;
  gap: 16px;
  margin: 8px 0;
  color: #0a18cb;
`;
const Terms = styled.div`
  color: #9fa5ae;
  font-weight: 300;
  display: flex;
  gap: 8px;
  font-size: 15px;
  padding: 8px 0px;
`;
const Copyright = styled(Terms)`
  display: block;
`;
const FooterMenuContainer = styled.div`
  display: none;
  ${SCREENS.md} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // display: flex;
    gap: 18px;
    margin-bottom: 16px;
  }
  ${SCREENS.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 32px;
  }
`;
const FooterMenu = styled.div`
  display: grid;
  flex-direction: column;
  gap: 8px;
  h4 {
    font-weight: 600;
  }
  a {
    font-weight: 300;
  }
  ${ContactButton} {
    display: block;
  }
`;
