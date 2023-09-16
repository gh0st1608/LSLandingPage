import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>Latam Strategy Consulting Group{title}</title>
    </Helmet>
  );
};

export default SEO;
