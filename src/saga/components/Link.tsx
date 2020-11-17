import React, { PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { CombinedTodoState } from '../reducers'

export interface LinkProps {
  filter: string
}
const Link: React.FC<PropsWithChildren<LinkProps>> = ({ filter, children }) => {
  const active = useSelector<CombinedTodoState, boolean>(
    (state) => filter === state.visibilityFilter
  )
  const dispatch = useDispatch()
  return (
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
