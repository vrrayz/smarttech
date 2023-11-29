"use client";

import React from "react"
import styled from "styled-components"
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

export const Footer = () =>{
    return (
        <FooterContainer>
            <ContactButton className="text-small btn btn-primary nav-button">Get a quote</ContactButton>
            <ContactLinks>
                <a href="#"><LinkedIn fontSize="large" /></a>
                <a href="#"><YouTube fontSize="large" /></a>
                <a href="#"><Facebook fontSize="large" /></a>
                <a href="#"><Twitter fontSize="large" /></a>
            </ContactLinks>
            <Terms>
                <a href="#">Terms of Use</a> <span>|</span> <a href="#">Privacy</a>
            </Terms>
            <Copyright>Copyright © 2023 SmartTech Inc. All Rights Reserved.</Copyright>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
padding: 8px;
background: #fff;
`
const ContactButton = styled.a`
display: block;
    border-radius: 0px;
    text-align: center;
    padding: 8px;
    font-size: 18px;
    font-weight: 300;
`
const ContactLinks = styled.div`
display: flex;
gap: 16px;
margin: 8px 0;
color: #0A18CB;
`
const Terms = styled.div`
color: #9fa5ae;
    font-weight: 300;
    display: flex;
    gap: 8px;
    font-size: 15px;
    border-bottom: 1px solid #9fa5ae;
    padding: 8px 0px;
`
const Copyright = styled(Terms)`
border-bottom: none;
display: block;
`