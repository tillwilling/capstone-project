import { render, screen } from '@testing-library/react'
import Location from './Location'

describe('Location', () => {
  it('renders', () => {
    render(<Location image="../images/garden2" text="Großer Garten" />)
    expect(screen.getByText('Großer Garten')).toBeInTheDocument()
  })
})
