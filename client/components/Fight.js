import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Fight = (props) => {
  const {email} = props

  return (
    <div>
      <h3>Fight!</h3>
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

export default connect(mapState)(Fight)

/**
 * PROP TYPES
 */
Fight.propTypes = {
  email: PropTypes.string
}
