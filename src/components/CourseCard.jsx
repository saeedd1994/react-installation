function CourseCard({course}) {
    return(
        <div className="course-item">
          <div className="course-item__image">
            <img src={`../../public${course.imgUrl}`} alt="Course" />
          </div>
          <div className="course-item__detail">
              <CourseCardBody course= {course}/>
              <CourseCardFooter course= {course}/>
          </div>
        </div>
    )
}

export default CourseCard

function CourseCardBody({course}){
    return(
        <div className="course-item__body">
            <div>
                <p className="title">{course.title}</p>
                <p className="desc">{course.desc}</p>
            </div>
            <span className="rate">{course.rate}</span>
        </div>

    )
}

function CourseCardFooter({course}){
    return(
        <div className="course-item__footer">
            <div className="tags">
                {course.tags.map(tag => (<span key={tag} className="badge badge--secondary">react</span>))}
            </div>
            <div className="captions">
                <div className="date">{course.start}</div>
                <span className="badge badge--primary">{course.status}</span>
            </div>
        </div>

    )
}