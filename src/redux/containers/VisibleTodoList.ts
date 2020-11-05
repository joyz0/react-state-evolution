import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodoList, { TodoListProps } from '../components/TodoList'
import { getVisibleTodos } from '../selectors'
import { CombinedTodoState } from '../reducers'

const mapStateToProps: MapStateToProps<
  Pick<TodoListProps, 'filteredTodos'>,
  unknown,
  CombinedTodoState
> = (state) => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps: MapDispatchToProps<
  Pick<TodoListProps, 'actions'>,
  unknown
> = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
