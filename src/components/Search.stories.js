
    import Search from './Search'
    export default {
        title: 'Search',
        component: Search
    }

    const Template = args => <Search {...args} />

    export const Default = Template.bind({})
    Default.args = {}
    