import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const MyBag = (props) => {
  const {email} = props

  return (
    <div>
      <h3>My Bag</h3>
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

export default connect(mapState)(MyBag)

/**
 * PROP TYPES
 */
MyBag.propTypes = {
  email: PropTypes.string
}
