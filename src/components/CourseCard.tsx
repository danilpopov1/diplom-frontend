import { Link } from "react-router-dom";

const CourseCard: React.FC = () => {
	return (
		<Link to={"/course"} className="w-full max-w-[350px] py-2 px-4 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col hover:translate-y-[-1px] transition-transform duration-300">
			<p className="text-sm font-semibold text-white mb-5">
				Управление персоналом
			</p>

			<div className="flex flex-col gap-2">
				<p className="text-xs text-white">Бесплатно</p>
				<p className="text-xs text-white">с 10.03.23 по 15.03.23</p>
				<p className="text-xs text-white">Дистанционно</p>
				<p className="text-xs text-white">36 часов</p>
			</div>
		</Link>
	);
};

export default CourseCard;