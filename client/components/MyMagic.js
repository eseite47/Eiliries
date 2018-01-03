import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';

const small = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

/**
 * COMPONENT
 */
export const MyMagic = (props) => {
  const {email} = props

  return (
    <div>
      <h3>My Magic</h3>
      <Paper style={small} zDepth={1}>Casts Left</Paper>
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

export default connect(mapState)(MyMagic)

/**
 * PROP TYPES
 */
MyMagic.propTypes = {
  email: PropTypes.string
}
