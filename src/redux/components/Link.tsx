import React, { PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export interface LinkProps {
  active: boolean
  setFilter: () => void
}
const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  active,
  children,
  setFilter
}) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    className={classnames({ selected: active })}
    style={{ cursor: 'pointer' }}
    onClick={() => setFilter()}
  >
    {children}
  </a>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link
