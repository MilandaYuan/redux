import { setVisibilityFilter } from '../actions/index.js';
import { connect } from 'react-redux';
import Link from './Link'
const mapStateToLink = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
const mapDispatchToLink = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(mapStateToLink, mapDispatchToLink)(Link);
export default FilterLink