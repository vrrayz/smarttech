import React from "react";
import styled from "styled-components";
import { SearchInput } from "./Forms";
import { ArrowForwardIos } from "@mui/icons-material";
import { SidebarDropdown, SidebarItem } from "./SidebarDropdown";
import { aboutMenu, productsMenu, solutionsMenu, supportMenu } from "@/data/menuitems";

interface SidebarProps {
  isNavToggled: boolean;
}

export const Sidebar = ({ isNavToggled }: SidebarProps) => {

  return (
    <SidebarContainer
      className={`${isNavToggled && "transformed"}`}
      onClick={(e) => console.log(e.target)}
    >
      <MainSidebar>
        <div></div>
        <div>
          <SearchInput />
          <ul className="sidebar-list">
            <SidebarItem>Home</SidebarItem>
            <SidebarDropdown {...productsMenu} />
            <SidebarDropdown {...solutionsMenu} />
            <SidebarItem>Technology</SidebarItem>
            <SidebarItem>Partnership</SidebarItem>
            <SidebarDropdown {...supportMenu} />
            <SidebarDropdown {...aboutMenu} />
          </ul>
        </div>
        <div></div>
      </MainSidebar>
    </SidebarContainer>
  );
};
const MainSidebar = styled.div`
  background-color: #fff;
  width: 75vw;
  right: 0vw;
  transition: right 5s;
  position: relative;
  box-shadow: 0px 0px 2px;
  display: grid;
  grid-template-rows: 55px 2fr 1fr;
  padding: 0px 16px;
  padding-right: 24px;
  color: #333;
  .sidebar-list {
    font-weight: 200;
    letter-spacing: 1.5px;
    padding: 12px 0px;
  }
  overflow-y:scroll;
`;
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: end;
  background-color: rgba(0, 0, 0, 0.4);
  &.transformed {
    display: flex;
  }
  backdrop-filter: blur(1px);
`;
