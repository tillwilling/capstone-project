import AddGamePage from './AddGamePage'
export default {
  title: 'AddGamePage',
  component: AddGamePage,
}

const Template = args => <AddGamePage {...args} />

export const Default = Template.bind({})
Default.args = { games: ['Apex Legends', 'DOTA 2', 'Among Us'] }
