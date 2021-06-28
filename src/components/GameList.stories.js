
    import GameList from './GameList'
    export default {
        title: 'GameList',
        component: GameList
    }

    const Template = args => <GameList {...args} />

    export const Default = Template.bind({})
    Default.args = {}
    