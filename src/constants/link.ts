interface ILink {
    pathName: string;
    title: string;
}

export const NonAuthUserLink: ILink[] = [
    {
        "pathName": '/',
        "title": 'Home',
    },
    {
        "pathName": '/ticket',
        "title": 'Ticket',
    },
    {
        "pathName": '/contact',
        "title": 'Contact',
    },
]

export const UserLink: ILink[] = [
    {
        "pathName": '/',
        "title": 'Home',
    },
    {
        "pathName": '/ticket',
        "title": 'Ticket',
    },
    {
        "pathName": '/history',
        "title": 'History',
    },
    {
        "pathName": '/profile',
        "title": 'Profile',
    },
    {
        "pathName": '/contact',
        "title": 'Contact',
    },
]

export const ProviderLink: ILink[] = [
    {
        "pathName": '/',
        "title": 'Home',
    },
    {
        "pathName": '/ticket',
        "title": 'Ticket',
    },
    {
        "pathName": '/buy-offsets',
        "title": 'Buy Offsets',
    },
    {
        "pathName": '/marketplace',
        "title": 'Marketplace',
    },
    {
        "pathName": '/profile',
        "title": 'Profile',
    },
    {
        "pathName": '/contact',
        "title": 'Contact',
    },
]