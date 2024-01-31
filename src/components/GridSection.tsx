import { SCREENS } from "@/screens";
import styled from "styled-components";

export const GridSection = styled.div<{ $items: number }>`
  display: grid;
  grid-template-rows: repeat(${(props) => props.$items}, 1fr);
  gap: 16px;
  ${SCREENS.md} {
    grid-template-columns: repeat(${(props) => props.$items}, 1fr);
    grid-template-rows: none;
  }
`;