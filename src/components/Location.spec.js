
    import {render, screen} from '@testing-library/react'
    import Location from './Location'

    describe('Location', () => {
        it('renders', () => {
            render(<Location />)
            expect(screen.getByText('Location')).toBeInTheDocument()
        })
    })
    