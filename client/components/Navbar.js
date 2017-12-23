import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */

const NavStyle = {
  fontFamily:'Reenie Beanie', 
  fontSize: 30
};

const Navigation = () => (
  <Tabs>
    <Tab
    label={<span style={NavStyle}>home</span>} containerElement={<Link to="/home"/>}
      />
    <Tab
      label={<span style={NavStyle}>Fight</span>}
      containerElement={<Link to="/fight"/>}
    />
    <Tab
      label={<span style={NavStyle}>Long Rest</span>}
      containerElement={<Link to="/longRest"/>}
    />
    <Tab
      label={<span style={NavStyle}>Resources</span>}
      containerElement={<Link to="/resources"/>}
    />
  </Tabs>
);
  
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Navigation))

/**
 * PROP TYPES
 */
Navigation.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
