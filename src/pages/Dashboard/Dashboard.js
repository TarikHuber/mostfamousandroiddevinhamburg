import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { injectIntl, intlShape } from 'react-intl'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Activity } from 'rmw-shell'
import { withTheme } from '@material-ui/core/styles'
import { withFirebase } from 'firekit-provider'
import Scrollbar from 'rmw-shell/lib/components/Scrollbar/Scrollbar'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Circle,
  Marker
} from 'react-google-maps'
import { compose } from 'redux'

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
))

class Dashboard extends Component {
  componentDidMount () {
    const { watchPath } = this.props

    watchPath('users_count')
  }

  render () {
    const { intl } = this.props

    return (
      <Activity
        iconElementRight={
          <Button
            style={{ marginTop: 4 }}
            href='https://github.com/TarikHuber/mostfamousandroiddevinhamburg'
            target='_blank'
            rel='noopener'
            secondary
            icon={<GitHubIcon />}
          />
        }
        title={intl.formatMessage({ id: 'dashboard' })}>

        <MyMapComponent key='map' />

        <Scrollbar />
      </Activity >
    )
  }
}

Dashboard.propTypes = {
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  const { paths } = state

  return {
    usersCount: paths['users_count'] ? paths['users_count'] : 0
  }
}

export default compose(
  mapStateToProps,
  injectIntl,
  withTheme,
  withFirebase,
  withGoogleMap
)(Dashboard)
