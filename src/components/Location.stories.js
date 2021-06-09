import Location from './Location'

import imageFile from '../images/garden2.jpg'

export default {
  title: 'Location',
  component: Location,
}

const Template = args => <Location {...args} />

export const singleLocation = Template.bind({})
singleLocation.args = {
  image: imageFile,
  name: 'Großer Garten mit Scheune',
}
