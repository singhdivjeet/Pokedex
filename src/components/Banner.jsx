import bannerImg from "../assets/download.jpg";
import smoke from "../assets/smoke-particle.webp";

export default function Banner() {
	return (
		<div
			className="relative mb-0 h-64 lg:h-80 bg-gray-100 bg-cover bg-no-repeat bg-center  overflow-hidden filter drop-shadow "
			style={{ backgroundImage: `url(${bannerImg})` }}
		>
			<img
				className="absolute opacity-30 animate-smoke-l"
				src={smoke}
				alt=""
				style={{ width: "1000px", left: "-220px", transform: "scaleX(-1)" }}
			/>
			<img
				className="absolute opacity-30 animate-smoke-r"
				src={smoke}
				alt=""
				style={{ width: "950px", right: "-165px" }}
			/>
		</div>
	);
}
