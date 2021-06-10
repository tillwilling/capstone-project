import { render, screen } from '@testing-library/react'
import LocationsPage from './LocationsPage'

describe('LocationsPage', () => {
  it('renders a list of all locations with an image and description', () => {
    render(
      <LocationsPage
        anyLocation={[
          {
            decription: 'Garten mit Haus',
            image: 'image',
          },
          {
            description: 'Garten mit Partyraum',
            image: 'another image',
          },
        ]}
      />
    )

    const description = screen.getAllByText('Garten')
    expect(description).toBeInTheDocument()
    const image = screen.getAllByRole('img')
    expect(image).toBeInTheDocument()
  })
})
