import React from "react";
import styled from "styled-components";

import TinderIcon from "./tinder-icon";

const Container = styled.div`
  background-color: #fff;
  height: 100%;
`;

const NavigationBar = styled.div`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  height: 80px;
`;

const Chevron = styled.span`
  position: relative;
  flex-basis: 10%;
  :after {
    content: "";
    color: #f5546d;
    position: absolute;
    right: 0;
    top: -5px;
    width: 10px;
    height: 10px;
    border: solid #f5546d;
    border-width: 3px 3px 0 0;
    transform: rotate(225deg);
  }
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 80%;
  justify-content: center;
`;

const Name = styled.p`
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
`;

const MessageContainer = styled.div`
  padding: 10px;
`;

const StyledReceivedMessage = styled.div`
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;

  background-color: #eee;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: -7px;
    height: 20px;
    width: 20px;
    background: #eee;
    border-bottom-right-radius: 15px;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-right-radius: 10px;
  }
`;

const StyledSentMessage = styled.div`
  float: right;
  border-radius: 20px;
  padding: 8px 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;

  color: white;
  background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
  background-attachment: fixed;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: -8px;
    height: 20px;
    width: 20px;
    background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-left-radius: 10px;
  }
`;

const Message = () => {
  return (
    <Container>
      <NavigationBar>
        <Chevron />
        <IconContainer>
          <TinderIcon
            height={"40px"}
            width={"40"}
            style={{ marginRight: "5px" }}
          />
          <Name>Austin</Name>
        </IconContainer>
      </NavigationBar>
      <MessageContainer>
        <StyledReceivedMessage>So you're a designer?</StyledReceivedMessage>
        <StyledSentMessage>So you're a developer?</StyledSentMessage>
      </MessageContainer>
    </Container>
  );
};

export default Message;
