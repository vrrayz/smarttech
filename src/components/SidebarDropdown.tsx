import React, { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import styled from "styled-components";

interface ItemLinks {
  item: string;
  link: string;
}

interface SidebarDropdownProps {
  title: string;
  items: ItemLinks[];
}

export const SidebarDropdown = ({ title, items }: SidebarDropdownProps) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SidebarItem className={`dropdown ${isToggled && "is-hidden"}`}>
      <div className="dropdown-head">
        <span>{title}</span>
        <StyleArrowRight
          className={`${isToggled && "rotate-icon"}`}
          fontSize="small"
          onClick={() => setIsToggled(!isToggled)}
        />
      </div>
      <ul className={`dropdown-list ${!isToggled && "is-hidden"}`}>
        {items.map(({ item, link }, i) => (
          <SidebarItem key={i}><a href={link}>{item}</a></SidebarItem>
        ))}
      </ul>
    </SidebarItem>
  );
};

export const StyleArrowRight = styled(ArrowForwardIos)`
  transform: rotate(0deg);
  transition: transform 500ms;

  &.rotate-icon {
    transform: rotate(90deg);
  }
`;
export const SidebarItem = styled.li`
  padding: 12px 0px;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: space-between;

  &.dropdown {
    justify-content: start;
    flex-direction: column;
  }
  &.dropdown.is-hidden {
    border: none;
  }
  &.dropdown .dropdown-head {
    // border-bottom: 1px solid #999;
    display: flex;
    justify-content: space-between;
  }
  &.dropdown .dropdown-list {
    padding-left: 12px;
    transition: height 500ms;
    height: 200px;
    overflow: hidden;
  }
  &.dropdown .dropdown-list.is-hidden {
    height: 0px;
    // transition: height 3s;
  }
  svg {
    color: #555;
    font-size: 18px;
    margin-top: 3px;
    margin-right: 3px;
  }
`;
