
    import {render, screen} from '@testing-library/react'
    import Location from './Location'

    describe('Location', () => {
        it('renders', () => {
            render(<Location image=”/some/path" text="some text" />)
            expect(screen.getByText('some text')).toBeInTheDocument()
            .... check for img ...
        })
    })
    
