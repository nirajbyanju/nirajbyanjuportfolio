import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Niraj"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Niraj"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Niraj"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Niraj Byanju
					</h2>
					<p className="text-gray-600 text-justify title text-lg leading-relaxed">
						I am a dedicated{" "}
						<span className="text-black font-medium">
							Full-Stack Web Developer
						</span>{" "}
						with practical experience in building and maintaining scalable web
						applications using{" "}
						<span className="text-black font-medium">
							Laravel, React.js, and modern frontend tools
						</span>
						. I focus on delivering clean, efficient solutions and creating
						responsive, user-friendly interfaces.
						<br />
						<br />
						I have worked on projects like a{" "}
						<span className="text-black font-medium">
							Learning Management System
						</span>{" "}
						and an{" "}
						<span className="text-black font-medium">
							Opportunities Sharing Platform
						</span>
						, where I handled both frontend and backend development. On the
						frontend, I built responsive UI using Bootstrap, Tailwind, and React,
						while integrating APIs using Axios and managing state efficiently
						with Zustand.
						<br />
						<br />
						On the backend, I used{" "}
						<span className="text-black font-medium">
							Laravel
						</span>{" "}
						to develop secure APIs, manage databases, and implement business logic.
						I also have experience with{" "}
						<span className="text-black font-medium">
							MySQL, Git, CI/CD, and deployment
						</span>
						, ensuring applications are reliable and performant. Additionally, I
						use Figma for designing intuitive UI/UX and follow best practices for
						testing and debugging.
						<br />
						<br />
						I am continuously improving my skills in full-stack development and
						system design, aiming to build impactful and scalable digital
						products.
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
