
    import Location from './Location'
    export default {
        title: 'Location',
        component: Location
    }

    const Template = args => <Location {...args} />

    export const Default = Template.bind({})
    Default.args = {}
    