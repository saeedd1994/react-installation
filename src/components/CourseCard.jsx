function CourseCard() {
    return(
        <div className="course-item">
          <div className="course-item__image">
            <img src="../../public/img1.jpg" alt="Course" />
          </div>
          <div className="course-item__detail">
            <div className="course-item__body">
              <div>
                <p className="title">React course</p>
                <p className="desc">The Ultimate React.js and Redux Courses</p>
              </div>
              <span className="rate">4</span>
            </div>
            <div className="course-item__footer">
              <div className="tags">
                <span className="badge badge--secondary">react</span>
                <span className="badge badge--secondary">front-end</span>
              </div>
              <div className="captions">
                <div className="date">{new Date().toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                  day: 'numeric'
                })}</div>
                <span className="badge badge--primary">completed</span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CourseCard