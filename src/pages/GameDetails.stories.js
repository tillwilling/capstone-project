
    import GameDetails from './GameDetails'
    export default {
        title: 'GameDetails',
        component: GameDetails
    }

    const Template = args => <GameDetails {...args} />

    export const Default = Template.bind({})
    Default.args = {}
    