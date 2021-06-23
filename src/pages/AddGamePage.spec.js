import { render, screen } from '@testing-library/react'
import AddGamePage from './AddGamePage'

describe('AddGamePage', () => {
  it('shows games', () => {
    render(
      <AddGamePage
        games={[
          { name: 'hello', background_image: 'foo', id: 1 },
          { name: 'hello', background_image: 'foo', id: 2 },
          { name: 'hello', background_image: 'foo', id: 3 },
        ]}
      />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
