import React from "react";
import "twin.macro";

import { Content, Heading, Context, Button } from "./styles";

const Home = () => {
  return (
    <Content>
      <Heading>React Templates</Heading>
      <Context>
        A Starter kit project tools with React Libraries and others tools supported.
      </Context>

      <div tw="block text-center mt-8">
          <a href="https://github.com/alaunal/react-templates#get-started" target="_blank"><Button>Get Started</Button></a>
      </div>
    </Content>
  );
};

export default Home;
