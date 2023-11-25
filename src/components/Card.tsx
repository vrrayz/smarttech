import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  font-family: "Roboto", sans-serif;
  .card-image {
    height: 220px;
    width: 100%;
    object-fit: cover;
  }
  .card-heading {
    padding: 24px;
    font-size: 1.4rem;
    font-weight: 300;
  }
  .card-body{
    padding-left: 24px;
  }
  .card-body p{
    font-size: 0.95rem;
    color: #9fa5ae;
  }
  .card-footer {
    padding: 24px;
    font-size: 0.95rem;
  }
`;