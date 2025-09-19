const courseStatus = ['All', 'Completed', 'Active', 'Upcoming'];

function Header() {
    return (
        <div className="header">
            <h1>courses (3)</h1>
            <div className='course-status'>
                {courseStatus.map((status) => <div key={status}>{status}</div>)}
            </div>
        </div>
    )
}

export default Header;