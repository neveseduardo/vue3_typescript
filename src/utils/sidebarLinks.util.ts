export const sidebarLinks: object[] = [
    {
        icon: 'fa fa-th-large',
        name: 'Dashboard',
        path: '/',
    },
    {
        icon: 'fa fa-clipboard',
        name: 'Formulário',
        childrens: [{ name: 'Fomulário básico', path: '/components/form' }],
    },
    {
        icon: 'fa fa-list',
        name: 'Tabelas',
        route: { name: 'RouteName' },
        childrens: [],
    },
    // {
    //     icon: 'fa fa-list',
    //     name: 'Order list',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
    // {
    //     icon: 'fa fa-chart-pie',
    //     name: 'Analytics',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
    // {
    //     icon: 'fa fa-database',
    //     name: 'Stock',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
    // {
    //     icon: 'fa fa-book',
    //     name: 'Total order',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
    // {
    //     icon: 'fa fa-user',
    //     name: 'Team',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
    // {
    //     icon: 'fa fa-comment-alt',
    //     name: 'Messages',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
    // {
    //     icon: 'fa fa-heart',
    //     name: 'Favrorites',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
    // {
    //     icon: 'fa fa-cog',
    //     name: 'Setting',
    //     route: { name: 'RouteName' },
    //     childrens: [],
    // },
]
