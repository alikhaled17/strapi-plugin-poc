/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import { BaseHeaderLayout, ContentLayout, Layout } from "@strapi/design-system";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system";

const HomePage = () => {
  return (
    <Layout sideNav={<div style={{ color: "white" }}>Hello</div>}>
      <BaseHeaderLayout title={`${pluginId.toUpperCase()} Plugin`} as="h2" />
      <ContentLayout>
        <p>lorem</p>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
