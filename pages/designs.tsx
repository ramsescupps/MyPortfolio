import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Designs from "components/designs/Designs";
import React from "react";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Github also." }}
    >
      <Heading />
      <Designs />
      <More />
    </Page>
  );
}

export default designs;
