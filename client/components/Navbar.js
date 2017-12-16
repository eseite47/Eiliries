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
const TabsExampleIconText = () => (
  <Tabs>
    <Tab
    icon={<FontIcon className="material-icons">home</FontIcon>}
    label="RECENTS" containerElement={<Link to="/home"/>}
      />
    <Tab
      icon={<FontIcon className="material-icons">Fight</FontIcon>}
      label="Fight" containerElement={<Link to="/fight"/>}
    />
    <Tab
      icon={<FontIcon className="material-icons">Long Rest</FontIcon>}
      label="Long Rest" containerElement={<Link to="/longRest"/>}
    />
    <Tab
      icon={<MapsPersonPin />}
      label="Resources"
    />
  </Tabs>
);
  
{/* <Link to="/home"></Link>
        <Link to="/fight"></Link>
        <Link to="/longRest"></Link>
        <Link to="/resources">Resources</Link> */}

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
export default withRouter(connect(mapState, mapDispatch)(TabsExampleIconText))

/**
 * PROP TYPES
 */
TabsExampleIconText.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
