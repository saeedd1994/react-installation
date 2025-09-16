function CourseCard(props) {
    console.log('props : ', props.course)
    return(
        <div className="course-item">
          <div className="course-item__image">
            <img src="../../public/img1.jpg" alt="Course" />
          </div>
          <div className="course-item__detail">
            <div className="course-item__body">
              <div>
                <p className="title">{props.course.title}</p>
                <p className="desc">{props.course.desc}</p>
              </div>
              <span className="rate">{props.course.rate}</span>
            </div>
            <div className="course-item__footer">
              <div className="tags">
                  {props.course.tags.map(tag => (<span key={tag} className="badge badge--secondary">react</span>))}
              </div>
              <div className="captions">
                <div className="date">{props.course.start}</div>
                <span className="badge badge--primary">{props.course.status}</span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CourseCard