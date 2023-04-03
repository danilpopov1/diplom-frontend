import KhtiLogo from "../assets/images/khti-logo.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="w-full flex bg-white z-10 justify-center p-2">
			<div className="flex gap-10 items-center">
				<Link to={"/courses"} className="text-sm hover:text-orange-400 transition-colors duration-300">
					Курсы
				</Link>

				<img
					src={KhtiLogo}
					alt="logo"
					className="w-[120px]"
				/>

				<Link to={"/contacts"} className="text-sm hover:text-orange-400 transition-colors duration-300">
					Контакты
				</Link>
			</div>
		</header>
	);
};

export default Header;