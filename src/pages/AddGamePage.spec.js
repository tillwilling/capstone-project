
    import {render, screen} from '@testing-library/react'
    import AddGamePage from './AddGamePage'

    describe('AddGamePage', () => {
        it('renders', () => {
            render(<AddGamePage />)
            expect(screen.getByText('AddGamePage')).toBeInTheDocument()
        })
    })
    