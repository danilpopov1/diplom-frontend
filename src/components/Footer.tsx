import KhtiLogo from "../assets/images/khti-logo.svg";
import SfuLogo from "../assets/images/sfu-logo.svg";

const Footer: React.FC = () => {
	return (
		<footer className="w-full px-3 py-9 flex justify-center mt-10">
			<div className="flex gap-[25px] items-center">
				<a href="#">
					<img
						src={KhtiLogo}
						alt="khti-logo"
						className="w-[90px]"
					/>
				</a>

				<a href="#">
					<img
						src={SfuLogo}
						alt="sfu-logo"
						className="w-[170px] h-[40px]"
					/>
				</a>

				<div>
					<p className="text-xs">
						© 2007—2020 Научно-образовательный центр «Институт непрерывного образования» СФУ
						г. Красноярск, ул. Борисова, 5, каб. 0-14
					</p>

					<p className="text-xs">
						+7 (391) 206-52-62, +7 (391) 206-52-65, ino.sfu@gmail.com
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;