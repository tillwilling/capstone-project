import React from 'react'
import LocationsPage from './LocationsPage'

export default {
  title: 'LocationsPage',
  component: LocationsPage,
}

const Template = args => <LocationsPage {...args} />

export const allLocations = Template.bind({})
allLocations.args = {}
