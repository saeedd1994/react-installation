import CourseCard from "./CourseCard"

const courses = [
    {
        id: 1,
        title: 'react',
        desc: 'this is a ultimate react course',
        imgUrl: '/img1.jpg',
        rate: 4.8,
        tags: ['front', 'edu'],
        start: '2023-07-01T20:46:30.615Z',
        status: 'completed'
    },
    {
        id: 2,
        title: 'Angular',
        desc: 'this is a ultimate angular course',
        imgUrl: '/img2.jpg',
        rate: 4.2,
        tags: ['front', 'edu'],
        start: '2023-04-01T20:46:30.615Z',
        status: 'completed'
    },
    {
        id: 3,
        title: 'JavaScript',
        desc: 'this is a ultimate js course',
        imgUrl: '/img3.jpg',
        rate: 4,
        tags: ['front', 'edu'],
        start: '2023-03-01T20:46:30.615Z',
        status: '   upcoming'
    }
]


function CourseList() {
    return (
        <div className="course-list">
            {
                courses.map((course)=>{
                    return (
                        <CourseCard key = {course.id}/>
                    )
                })
            }

        </div>
    )
}

export default CourseList