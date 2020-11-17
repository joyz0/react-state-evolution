import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  TodoFilters
} from '../models/visibilityFilter'

const FILTER_TITLES: Record<string, string> = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export interface FooterProps {
  activeCount: number
  completedCount: number
  onClearCompleted: () => any
}
const Footer: React.FC<FooterProps> = (props) => {
  const { activeCount, completedCount, onClearCompleted } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map((filter) => (
          <li key={filter}>
            <Link filter={filter}>{FILTER_TITLES[filter]}</Link>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}

export default Footer
