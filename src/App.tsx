import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import AllCourses from "./pages/AllCourses";
import CourseDetails from "./pages/CourseDetails";

const App: React.FC = () => {
	return (
		<Wrapper>
			<Routes>
				<Route path="/" element={<AllCourses />} />
				<Route path="/course" element={<CourseDetails/>} />
				<Route path="*" element={<AllCourses />} />
			</Routes>
		</Wrapper>
	);
};

export default App;