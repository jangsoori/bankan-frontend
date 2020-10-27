import styled from "@emotion/styled";
import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { Content, Title } from "./styles";

export default function Home() {
  const { userData } = useContext(UserContext);

  const renderTitle = () => {
    return (
      userData.user && <Title>Good day, {userData.user.displayName}!</Title>
    );
  };
  return (
    <>
      <Title>{renderTitle()}</Title>
      <Content>Here something like upcoming deadlines etc</Content>
    </>
  );
}
