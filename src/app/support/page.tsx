"use client";

import { Card } from "@/components/Card";
import { GridSection } from "@/components/GridSection";
import { Jumbotron } from "@/components/Jumbotron";
import { Section } from "@/components/Section";
import {
  EmailRounded,
  LocalPhone,
  LocationCityOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

export default function Support() {
  return (
    <main>
      <StyledJumbotron className="mb-5 xl:mb-8">
        <div className="jumbo-item">
          <h4>Smart Homes for Every Home</h4>
        </div>
      </StyledJumbotron>
      <Section header={"Contact Us"}>
        <GridSection $items={3} className="mt-5 xl:my-8">
          <Card className="flex flex-col">
            <div
              className="card-body my-auto text-center"
              style={{ padding: "32px" }}
            >
              <p
                style={{ fontSize: "1rem", color: "#000" }}
                className="source-code md:text-2xl"
              >
                <a href="mailto:support@bolesenterprise.io">
                  <EmailRounded fontSize="large" />
                  <br />
                  support@bolesenterprise.io
                </a>
              </p>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div
              className="card-body my-auto text-center"
              style={{ padding: "32px" }}
            >
              <p
                style={{ fontSize: "1rem", color: "#000" }}
                className="source-code md:text-2xl"
              >
                <LocationCityOutlined fontSize="large" />
                <br />
                Address...
              </p>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div
              className="card-body my-auto text-center"
              style={{ padding: "32px" }}
            >
              <p
                style={{ fontSize: "1rem", color: "#000" }}
                className="source-code md:text-2xl"
              >
                <LocalPhone fontSize="large" />
                <br />
                +234 701 578 5065
              </p>
            </div>
          </Card>
        </GridSection>
      </Section>
      <Section header={""}>
        <StyledMapFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.490728605707!2d7.486473874831184!3d6.4593382935322055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3bbee3619e5%3A0xd8544bf40043ef95!2sShoprite%20Enugu!5e0!3m2!1sen!2sng!4v1706690045705!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{border:"0"}}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></StyledMapFrame>
      </Section>
    </main>
  );
}
const StyledJumbotron = styled(Jumbotron)`
  background: url("/images/jumbo-2.jpg");
  background-size: cover;
  background-position: center;
`;
const StyledMapFrame = styled.iframe`
width: 100%;
`
