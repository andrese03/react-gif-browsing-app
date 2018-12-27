import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

const GiphySearchInput = (props) => {
  const {
    onChange,
    debounce,
    loading,
    className,
  } = props;

  // Function used to stored the delayed search
  // This was done in this way to avoid the search on every
  // type the user do
  let debounceFunction;

  // Event Handlers

  // On Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    clearTimeout(debounceFunction);
    onChange();
  };

  // On Change Handler
  const handleChange = (event) => {
    const { value } = event.target;
    clearTimeout(debounceFunction);
    if (debounce) {
      debounceFunction = setTimeout(() => onChange(value), debounce);
    } else {
      onChange(value);
    }
  };

  return (
    <Form.Field onSubmit={handleSubmit} className={className}>
      <Input id="giphy-search-input" fluid loading={loading} icon="paw" placeholder="Search..." onChange={handleChange} />
    </Form.Field>
  );
};

GiphySearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  debounce: PropTypes.number,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

GiphySearchInput.defaultProps = {
  debounce: 0,
  loading: false,
  className: '',
};

export default GiphySearchInput;
