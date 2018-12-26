import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Header,
  Icon,
} from 'semantic-ui-react';

const SegmentArea = ({ message }) => (
  <Segment placeholder>
    <Header icon>
      <Icon name="paw" />
      {message}
    </Header>
  </Segment>
);

SegmentArea.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SegmentArea;
