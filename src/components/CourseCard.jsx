function CourseCard({course}) {
    return (<div className="course-item">
        <div className="course-item__image">
            <img src={`../../public${course.imgUrl}`} alt="Course"/>
        </div>
        <div className="course-item__detail">
            <CourseCardBody course={course}/>
            <CourseCardFooter course={course}/>
        </div>
    </div>)
}

export default CourseCard

function CourseCardBody({course}) {
    return (<div className="course-item__body">
            <div>
                <p className="title">{course.title}</p>
                <p className="desc">{course.desc}</p>
            </div>
            <span className="rate">{course.rate}</span>
        </div>

    )
}

function CourseCardFooter({course}) {

    const startAt = new Date(course.start).toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric",
    })

    return (<div className="course-item__footer">
            <div className="tags">
                {course.tags.map((tag, index) => (<span className='badge badge--status' key={index}>{tag}</span>))}
            </div>
            <div className="captions">
                <div className="date">{startAt}</div>
                <span
                    className={`badge ${course.status === 'completed' ? 'badge--primary' : course.status === 'active' ? "badge--secondary" : 'badge--danger'}`}>{course.status}</span>
            </div>
        </div>

    )
}