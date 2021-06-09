
    import {render, screen} from '@testing-library/react'
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
                    description: 'Partyraum',
                    image: 'another image',
                  },
                ]}
              />
            )
        
            const description = screen.getAllByRole('heading')
            expect(decription).toHaveLength()
            const image = screen.getAllByRole('img')
            expect(image).toHaveLength()
          })
        })
    })
    