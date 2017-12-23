import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const MyStats = (props) => {
  const {email} = props

  return (
    <div>
      <h3>myStats</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(MyStats)

/**
 * PROP TYPES
 */
MyStats.propTypes = {
  email: PropTypes.string
}
