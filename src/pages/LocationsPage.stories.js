import React from 'react'
import LocationsPage from './LocationsPage'

export default {
  title: 'LocationsPage',
  component: LocationsPage,
}

const Template = args => <LocationsPage {...args} />

export const allLocations = Template.bind({})
allLocations.args = {
  locations: [
    {
      name: 'Großer Garten mit Scheune',
      image:
        'https://images.unsplash.com/photo-1541020230467-e33e4f96f7fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Großer Garten mit Scheune',
      zipcode: '12345',
      city: 'Hamburg',
      id: 1,
    },
  ],
}
