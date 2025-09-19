import CourseList from "./components/CourseList"
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <div>
            <Header/>
            <CourseList/>
            <Footer/>
        </div>
    )
}

export default App