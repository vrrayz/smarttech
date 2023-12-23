"use client";
import { Section, SectionHeader } from "@/components/Section";
import { products } from "@/data/products";
import React, { useMemo } from "react";
import Image from "next/image";
import styled from "styled-components";
import { SCREENS } from "@/screens";

export type Category = "smart_home_automation_lighting";

const Page = ({ params }: { params: { category: Category } }) => {
  const currentCategory = useMemo(
    () => products[params.category],
    [params.category]
  );
  const categoryTitle = useMemo(
    () => params.category.toUpperCase().split("_").join(" "),
    [params.category]
  );
  return (
    <main>
      <Section header={""} className="mt-8 md:mt-16">
        <CategoryPlaceholder>
          <CategoryPlaceholderImage
            src={currentCategory.image}
            alt={"Category image"}
            width={300}
            height={200}
          />
          <SectionHeader className="md:my-3">{categoryTitle}</SectionHeader>
        </CategoryPlaceholder>
      </Section>
    </main>
  );
};

const CategoryPlaceholder = styled.div`
  ${SectionHeader} {
    font-size: 18px;
    ${SCREENS.md} {
      font-size: 1.6rem;
    }
  }
`;
const CategoryPlaceholderImage = styled(Image)`
  width: 100%;
  height: 143px;
  object-fit: contain;

  ${SCREENS.md} {
    height: 230px;
  }
`;

export default Page;
