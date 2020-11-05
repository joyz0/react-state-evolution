import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection, { MainSectionProps } from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'
import { CombinedTodoState } from '../reducers'

const mapStateToProps: MapStateToProps<
  Pick<MainSectionProps, 'todosCount' | 'completedCount'>,
  unknown,
  CombinedTodoState
> = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps: MapDispatchToProps<
  Pick<MainSectionProps, 'actions'>,
  unknown
> = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSection)
