
const Modal: React.FC<{isVisible: boolean, children: React.ReactNode}> = ({isVisible, children}) => {
	return (
		<section className={"z-40 fixed top-0 left-0 bg-black bg-opacity-80 w-full min-h-screen flex flex-col justify-center items-center px-3 " + `${isVisible ? "" : "hidden"}`}>
			{children}
		</section>
	);
};

export default Modal;