import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class CreateManualCase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="create-manual-case-page">
        <CreateActivityForm />
      </div>
    );
  }
}
