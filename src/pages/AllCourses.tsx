import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";

const AllCourses: React.FC = () => {
	return (
		<section className="w-full">
			<Header />

			<Slider />

			<div className="w-full flex justify-center">
				<p className="font-semibold text-lg text-center mt-[10px] mb-[20px]">
					Программы дополнительного образования
				</p>
			</div>

			<div className="w-full flex flex-wrap justify-center gap-6 mb-[45px] px-7">
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>

			<Footer />
		</section>
	);
};

export default AllCourses;