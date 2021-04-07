import moment from "moment"

const Trending = [
    {
        title: 'Can anyone code?',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Tech Culture', 'Tech News'],
        link: '#',
        image: 'anyone_can_code.jpg'
    },
    {
        title: 'Using AWS S3 for Storing Blog Images',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Cloud'],
        link: '#',
        image: '2.png'
    },
    {
        title: 'Popular Programming Languages in 2021',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['JavaScript'],
        link: '#',
        image: '3.png'
    },
    {
        title: 'My diet diary',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Vue'],
        link: '#',
        image: '4.png'
    },
    {
        title: 'Depression',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['React'],
        link: '#',
        image: '5.png'
    }
]

export default Trending