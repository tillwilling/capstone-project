import AddGamePage from './AddGamePage'
export default {
  title: 'AddGamePage',
  component: AddGamePage,
}

const Template = args => <AddGamePage {...args} />

export const Default = Template.bind({})
Default.args = {
  games: [{ name: 'Apex Legends' }, { name: 'DOTA 2' }, { name: 'Among Us' }],
}
