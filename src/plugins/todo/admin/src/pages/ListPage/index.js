/*
 *
 * ListPage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

const ListPage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s ListPage</h1>
      <div style={{ display: "flex", background: "blue", color: "white" }}>
        List Page
      </div>
    </div>
  );
};

export default ListPage;
