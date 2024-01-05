"use client";
import { Section, SectionHeader } from "@/components/Section";
import { products } from "@/data/products";
import React, { useMemo } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Home } from "@mui/icons-material";
import { SCREENS } from "@/screens";
import { Card } from "@/components/Card";
import parse from 'html-react-parser';

export type Category =
  | "smart_home_automation_lighting"
  | "door_bells_and_access_control"
  | "alexa_voice_assistant"
  | "smart_locks"
  | "smart_detectors"
  | "camera_list_and_specifications";

const Page = ({ params }: { params: { category: Category } }) => {
  const currentCategory = useMemo(
    () => products[params.category],
    [params.category]
  );
  const categoryTitle = useMemo(
    () => params.category.toUpperCase().split("_").join(" "),
    [params.category]
  );
  const categoriesList = useMemo(() => {
    return Object.keys(products).map((element) =>{
      return {title: element.toUpperCase().split("_").join(" "), link: element}
    }
    );
  }, []);
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
      <Section header="">
        <BreadCrumbs>
          <li className="flex">
            <Home fontSize="small" />
          </li>
          <li>Products</li>
          <li className="active">{categoryTitle}</li>
        </BreadCrumbs>
      </Section>
      <Section header="">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <Card style={{maxHeight: '400px'}}>
            <CategoriesList>
              {categoriesList.map((category, i) => (
                <CategoryItem key={i}>
                  <a href={`/products/categories/${category.link}`}>{category.title}</a>
                </CategoryItem>
              ))}
            </CategoriesList>
          </Card>
          <ProductsList className="grow">
            {currentCategory.items.map(({title, image, description}, i) => (
              <Card key={i}>
                <div className="flex flex-col lg:flex-row-reverse">
                  <Image src={image} alt={title} width={300} height={300} />
                  <div className="card-body mx-auto">
                    <h4 className="card-heading">{title}</h4>
                    <div>{parse(description)}</div>
                  </div>
                </div>
              </Card>
            ))}
          </ProductsList>
        </div>
      </Section>
    </main>
  );
};
const ProductsList = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  gap: 16px;
  width: 100%;

  ${Card} img{
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 200px;
    margin: auto;
    object-fit: contain;
  }
  ${Card} .card-body{
    padding: 16px;
  }
  ${Card} .card-heading{
    padding: 0px;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 12px;
    text-align:center;
  }
  ${Card} .card-body p{
    font-weight: 200;
    font-size: 0.8rem;
    color: #000;
  }
  ${SCREENS.lg}{
    width: 60%;
    ${Card} .card-heading{
      text-align:left;
    }
  }
`;
const CategoriesList = styled.ul`
  font-weight: 200;
  padding: 12px 0px;
  font-size: 0.8rem;
`;
const CategoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  a {
    padding: 12px;
    width: 100%;
  }
  a:hover {
    background-color: #051f80;
    color: #fff;
  }
`;
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

const BreadCrumbs = styled.ul`
  font-size: 12px;
  display: flex;
  gap: 1px;
  border-bottom: 1px dotted;
  padding-bottom: 6px;

  li::after {
    content: ">";
    margin-left: 4px;
    margin-right: 4px;
  }
  li.active::after {
    content: "";
  }
  li.active {
    color: #284f67;
    font-weight: bold;
  }
`;

export default Page;
