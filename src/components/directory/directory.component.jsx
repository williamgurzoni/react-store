import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import { selectDiretorySections } from "../../redux/directory/directory.selector";

import "./directory.style.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDiretorySections
});

export default connect(mapStateToProps)(Directory);
