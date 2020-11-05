import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link, { LinkProps } from '../components/Link'
import { CombinedTodoState } from '../reducers'

export interface FilterLinkProps {
  filter: string
}
const mapStateToProps: MapStateToProps<
  Pick<LinkProps, 'active'>,
  FilterLinkProps,
  CombinedTodoState
> = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps: MapDispatchToProps<
  Pick<LinkProps, 'setFilter'>,
  FilterLinkProps
> = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
