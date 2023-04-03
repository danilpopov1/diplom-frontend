import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Photo from "../assets/images/photo.jpg";
import Student from "../assets/images/student.jpg";
import Khti from "../assets/images/khti.jpg";
import Teacher from "../assets/images/teacher.jpg";
import CloseIcon from "../assets/icons/close-icon.svg";
import Modal from "../components/Modal";

const CourseDetails: React.FC = () => {

	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<section className="w-full flex flex-col items-center">
			<Header />
			
			<div className="w-full max-w-[55%] rounded-xl shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 my-[45px] p-4 flex justify-between gap-5">
				<div className="flex flex-col gap-4 w-full justify-between">
					<p className="font-bold text-white text-2xl">
						Управление персоналом
					</p>

					<p className="text-xs text-white">
						Программа профессиональной переподготовки «Управление персоналом» направлена на подготовку профессионалов нового поколения, обладающих стратегическим мышлением, практическими знаниями и аналитическими навыками, необходимыми для обоснования и реализации эффективных управленческих решений в области управления персоналом в современных российских условиях.
					</p>

					<button 
						className="p-2 rounded-lg bg-white text-sm"
						onClick={(e) => setIsModalVisible(true)}
					>
						Записаться на курс
					</button>
				</div>

				<img 
					src={Photo} 
					alt="Photo"
					className="w-[340px] rounded-lg" 
				/>
			</div>

			<div className="w-full flex justify-center gap-6 mb-[30px]">
				<div className="flex gap-1 items-center">
					<div className="w-[6px] h-[6px] rounded-full bg-black" />
					<p className="text-sm">
						Сертификат
					</p>
				</div>

				<div className="flex gap-1 items-center">
					<div className="w-[6px] h-[6px] rounded-full bg-black" />
					<p className="text-sm">
						36 часов
					</p>
				</div>

				<div className="flex gap-1 items-center">
					<div className="w-[6px] h-[6px] rounded-full bg-black" />
					<p className="text-sm">
						с 10.03.23 по 15.03.23
					</p>
				</div>

				<div className="flex gap-1 items-center">
					<div className="w-[6px] h-[6px] rounded-full bg-black" />
					<p className="text-sm">
						Дистанционно
					</p>
				</div>

			</div>

			<div className="w-full max-w-[55%]">
				<p className="rounded-lg bg-stone-200 border-2 flex justify-center items-center">
					План обучения
				</p>
			</div>

			<p className="font-semibold text-lg my-[30px]">
				Кому подойдет этот курс?
			</p>

			<div className="flex justify-center gap-5">
				<div className="flex flex-col items-center gap-2 p-1 shadow-md rounded-lg w-full max-w-[180px]">
					<img 
						src={Student}
						alt="Student"
						className="w-full rounded-lg" 
					/>

					<p className="font-semibold text-sm">
						Студенту СФУ
					</p>
 
					<p className="text-xs text-center">
						Небольшое описание и преимущества
					</p>
				</div>

				<div className="flex flex-col items-center gap-2 p-1 shadow-md rounded-lg w-full max-w-[180px]">
					<img 
						src={Student}
						alt="Student"
						className="w-full rounded-lg" 
					/>

					<p className="font-semibold text-sm">
						Предодавателю СФУ
					</p>
 
					<p className="text-xs text-center">
						Небольшое описание и преимущества
					</p>
				</div>

				<div className="flex flex-col items-center gap-2 p-1 shadow-md rounded-lg w-full max-w-[180px]">
					<img 
						src={Student}
						alt="Student"
						className="w-full rounded-lg" 
					/>

					<p className="font-semibold text-sm">
						Любому желающему
					</p>
 
					<p className="text-xs text-center">
						Небольшое описание и преимущества
					</p>
				</div>
			</div>

			<p className="font-semibold text-lg mt-[45px] mb-[20px]">
				Место обучения
			</p>

			<div className="w-full max-w-[55%] rounded-xl shadow-md bg-gradient-to-r from-orange-400 to-orange-500 mb-[20px] p-4 flex justify-between gap-5">
				<img 
					src={Khti} 
					alt="Photo"
					className="w-[340px] rounded-lg" 
				/>

				<div className="flex flex-col gap-4 w-full justify-between">
					<div className="flex flex-col gap-2">
						<p className="font-bold text-white text-2xl">
							ХТИ - Филиал СФУ
						</p>

						<p className="text-xs text-white">
							Направление 09.03.03 "Прикладная информатика"
						</p>
					</div>

					<button 
						className="p-2 rounded-lg bg-white text-sm"
						onClick={(e) => setIsModalVisible(true)}
					>
						Записаться на курс
					</button>
				</div>
			</div>

			<p className="font-semibold text-lg mt-[45px] mb-[20px]">
				Руководитель курса
			</p>

			<div className="w-full max-w-[55%] flex flex-col gap-2">
				<div className="flex gap-2 w-full p-2 shadow-md rounded-lg">
					<img 
						src={Teacher} 
						alt="Teacher" 
						className="w-[160px] rounded-lg"
					/>

					<div className="flex flex-col gap-5">
						<p className="font-semibold text-sm">
							Миндибекова Алена Кирилловна
						</p>

						<p className="text-xs">
							ФГАОУ ВО СФУ, Научно-образовательный комплекс в области экономики и управления, Институт торговли и сферы услуг, Кафедра товароведения и экспертизы товаров, Доцент
						</p>
					</div>
				</div>
			</div>

			<p className="font-semibold text-lg mt-[45px] mb-[20px]">
				Есть вопрос?
			</p>

			<div className="w-full max-w-[55%] flex flex-col gap-2">
				<div className="flex gap-2 w-full p-2 shadow-md rounded-lg">
					<img 
						src={Teacher} 
						alt="Teacher" 
						className="w-[160px] rounded-lg"
					/>

					<div className="flex flex-col gap-5">
						<p className="font-semibold text-sm">
							Админова Наталья Владимировна
						</p>

						<p className="text-xs">
							Системый администратор в Яндексе
						</p>

						<div>
							<p className="text-xs">Email: asd@gmail.com</p>
							<p className="text-xs">Телефон: 89232109244</p>
						</div>
					</div>
				</div>
			</div>

			<p className="font-semibold text-lg mt-[45px] mb-[20px]">
				Стоимость обучения
			</p>

			<div className="w-full max-w-[55%] rounded-xl shadow-md bg-gradient-to-r from-emerald-500 to-emerald-700 mb-[20px] p-4 flex justify-between gap-5">
				<p className="text-white font-bold text-2xl">
					Бесплатно
				</p>

				<button 
					className="p-2 rounded-lg bg-white text-sm"
					onClick={(e) => setIsModalVisible(true)}
				>
					Записаться на курс
				</button>
			</div>

			<Modal isVisible={isModalVisible}>
				<div className="flex flex-col gap-2 w-full max-w-[20%] bg-white shadow-md rounded-lg p-2">
					<div className="w-full flex justify-between">
						<p className="text-center font-semibold">
							Заполните данные
						</p>

						<button
							onClick={(e) => setIsModalVisible(false)}
						>
							<img 
								src={CloseIcon} 
								alt="Закрыть" 
								className="text-white w-[20px]"
							/>
						</button>
					</div>

					<form action="#" method="post" className="flex flex-col gap-1">
						<input 
							type="text" 
							name="last-name" 
							className="border-[1px] text-sm outline-none p-1 w-full rounded-lg focus:border-stone-500 transition-colors duration-300"
							placeholder="Фамилия"
						/>

						<input 
							type="text" 
							name="first-name" 
							className="border-[1px] text-sm p-1 w-full rounded-lg focus:border-stone-500 outline-none transition-colors duration-300"
							placeholder="Имя"
						/>

						<input 
							type="text" 
							name="dad-name" 
							className="border-[1px] text-sm p-1 w-full rounded-lg focus:border-stone-500 outline-none transition-colors duration-300"
							placeholder="Отчество"
						/>

						<input 
							type="text" 
							name="dad-name" 
							className="border-[1px] text-sm p-1 w-full rounded-lg focus:border-stone-500 outline-none transition-colors duration-300"
							placeholder="Серия и номер паспорта"
						/>

						<input 
							type="text" 
							name="dad-name" 
							className="border-[1px] text-sm p-1 w-full rounded-lg focus:border-stone-500 outline-none transition-colors duration-300"
							placeholder="ИНН"
						/>

						<input 
							type="text" 
							name="dad-name" 
							className="border-[1px] text-sm p-1 w-full rounded-lg focus:border-stone-500 outline-none transition-colors duration-300"
							placeholder="СНИЛС"
						/>

						<input 
							type="text" 
							name="dad-name" 
							className="border-[1px] text-sm p-1 w-full rounded-lg focus:border-stone-500 outline-none transition-colors duration-300"
							placeholder="Дата рождения"
						/>

						<input 
							type="email" 
							name="dad-name" 
							className="border-[1px] text-sm p-1 w-full rounded-lg focus:border-stone-500 outline-none transition-colors duration-300"
							placeholder="Email"
						/>

						<button type="submit" className="border-[1px] text-sm p-1 w-full rounded-lg active:border-stone-400 transition-colors duration-300 py-2 bg-[#2c2c2c] text-white"
						>
							Записаться
						</button>
					</form>
				</div>
			</Modal>

			<Footer />
		</section>
	);
};

export default CourseDetails;