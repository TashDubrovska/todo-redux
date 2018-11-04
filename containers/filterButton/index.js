import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions';
import Filter from '../../components/filter';

const mapStateToProps = (state, ownProps) => ({
  disabled: ownProps.filter === state.vsisibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
