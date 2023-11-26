import React, { ReactNode } from "react";
import styled from "styled-components";

interface Prop {
  header: string;
  children: ReactNode;
}

export const Section = ({ header, children }: Prop) => {
  return (
    <CustomSection>
      <SectionHeader>{header}</SectionHeader>
      {children}
    </CustomSection>
  );
};
export const CustomSection = styled.section`
  padding: 16px;
  max-width: 1200px;
  margin: auto;
`;
export const SectionHeader = styled.h4`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 600;
  &:hover {
    color: #284f67;
  }
`;
