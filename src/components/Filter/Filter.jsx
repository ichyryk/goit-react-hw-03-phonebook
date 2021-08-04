import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  return (
    <>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        name="name"
        placeholder="Filter by name"
        onChange={onChange}
        required
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
