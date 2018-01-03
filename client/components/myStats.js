import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper';

const main = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const small = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const large = {
  height: 150,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

/**
 * COMPONENT
 */
export const MyStats = (props) => {
  const {email} = props

  return (
    <div>
      <h3>My Stats</h3>
      <Paper style={main} zDepth={1}>Health</Paper>
      <Paper style={large} zDepth={1}>Proficiencies</Paper>
      <div>
        <Paper style={small} zDepth={1}>Strength</Paper>
        <Paper style={small} zDepth={1}>Dexterity</Paper>
        <Paper style={small} zDepth={1}>Constitution</Paper>
        <Paper style={small} zDepth={1}>Intelligence</Paper>
        <Paper style={small} zDepth={1}>Wisdom</Paper>
        <Paper style={small} zDepth={1}>Charisma</Paper>
      </div>
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
