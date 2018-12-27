import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Modal } from 'semantic-ui-react';

import './Lightbox.styles.scss';

const ModalBasicExample = (props) => {
  const {
    open,
    onClose,
    onNextItem,
    onPreviousItem,
    item,
  } = props;

  if (!item) {
    return null;
  }

  return (
    <Modal
      basic
      size="large"
      open={open}
      onClose={onClose}
      dimmer="blurring"
      closeIcon
    >
      <Modal.Content>
        <Container textAlign="center">
          <img src={item.url} alt={item.alt} title={item.title} />
          <div className="lightbox-controls">
            <Button.Group className="lightbot-button-group">
              {/* Previous */}
              <Button
                id="lightbox-previous-button"
                icon="angle left"
                secondary
                onClick={onPreviousItem}
              />
              <Button.Or />
              {/* Next */}
              <Button
                id="lightbox-next-button"
                icon="angle right"
                secondary
                onClick={onNextItem}
              />
            </Button.Group>
          </div>
        </Container>
      </Modal.Content>
    </Modal>
  );
};

ModalBasicExample.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onNextItem: PropTypes.func.isRequired,
  onPreviousItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

ModalBasicExample.defaultProps = {
  open: false,
  item: null,
};

export default ModalBasicExample;
