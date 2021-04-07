import moment from "moment"

const Featured = [
    {
        title: 'Can anyone code?',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Tech Culture', 'Tech News'],
        link: '#',
        image: '11.png'
    },
    {
        title: 'Using AWS S3 for Storing Blog Images',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Cloud'],
        link: '#',
        image: '12.png'
    },
    {
        title: 'My French improvement',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['React'],
        link: '#',
        image: '13.png'
    },
    {
        title: 'What I eat these days',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Brain Health'],
        link: '#',
        image: '3.png'
    }
]

export default Featured