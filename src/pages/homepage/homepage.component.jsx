import React, { Component } from 'react';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
