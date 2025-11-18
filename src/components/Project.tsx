"use client";

import { memo, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

// Adapte les imports d'images à ton arborescence
import brandlyftCover from "../assets/brandlyft.png";
import furbCover from "../assets/furb.png";

type ProjectCardData = {
	id: string;
	title: string;
	description: string;
	href?: string;
	image?: StaticImageData | string;
	status?: "online" | "wip";
	imageBorder?: boolean;
};

const projects: ProjectCardData[] = [
	{
		id: "brandlyft",
		title: "Brandlyft",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
		href: "https://brandlyft.com",
		image: brandlyftCover,
		status: "online",
		imageBorder: false,
	},
	{
		id: "furb",
		title: "Furb.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
		href: "https://www.furb.eu",
		image: furbCover,
		status: "online",
		imageBorder: true,
	},
	{
		id: "restau",
		title: "Projet de restauration",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
		status: "wip",
    imageBorder: true,
	},
	{
		id: "ecommerce",
		title: "Projet e-commerce",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
		status: "wip",
    imageBorder: true,
	},
    	{
		id: "restau1",
		title: "Projet de restauration",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
		status: "wip",
    imageBorder: true,
	},
	{
		id: "ecommerce1",
		title: "Projet e-commerce",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
		status: "wip",
    imageBorder: true,
	},

];

const PlaceholderIcon = () => (
	<svg
		aria-hidden
		viewBox="0 0 24 24"
		className="h-7 w-7 text-neutral-400 dark:text-neutral-600"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.6"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M8 3h8" />
		<path d="M12 3v13" />
		<path d="M7 16h10l-1 5H8l-1-5Z" />
	</svg>
);

const ProjectCard = memo(({ project }: { project: ProjectCardData }) => {
	const cardFrameClasses = project.imageBorder
		? "ring-1 ring-neutral-200 bg-white/80 dark:ring-white/15 dark:bg-white/5"
		: "ring-1 ring-transparent";

	const CardInner = () => (
		<article className="group flex flex-col gap-4 ">
			<div
				className={`relative aspect-[16/11] overflow-hidden rounded-[32px] ${cardFrameClasses}`}
			>
				{project.image ? (
					<Image
						src={project.image}
						alt={project.title}
						fill
						sizes="(min-width: 1024px) 480px, 100vw"
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
					/>
				) : (
					<div className="flex h-full items-center justify-center">
						<PlaceholderIcon />
					</div>
				)}
			</div>

			<div className="flex items-center gap-3">
				<h3 className="flex items-center gap-1 text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
					<span>{project.title}</span>
					{project.href && (
						<ArrowUpRight className="h-[15px] w-[15px] text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white" />
					)}
				</h3>

				{project.status === "wip" && (
					<span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-medium text-neutral-600 ring-1 ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:ring-neutral-700">
						En construction
					</span>
				)}
			</div>

			<p className="max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
				{project.description}
			</p>
		</article>
	);

	if (!project.href) {
		return <CardInner />;
	}

	return (
		<Link
			href={project.href}
			target="_blank"
			rel="noreferrer"
			aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
			className="block"
		>
			<CardInner />
		</Link>
	);
});

ProjectCard.displayName = "ProjectCard";

const ProjectsSection = () => {
	const gridRef = useRef<HTMLDivElement | null>(null);
	const sectionRef = useRef<HTMLElement | null>(null);
	const [showAllProjects, setShowAllProjects] = useState(false);
	const [animateExtraProjects, setAnimateExtraProjects] = useState(false);
	const [secondRowOffset, setSecondRowOffset] = useState<number | null>(null);
	const [sectionVisible, setSectionVisible] = useState(false);
	const fadeSpan = 140;
	const initialVisibleCards = 4;

	useEffect(() => {
		const gridElement = gridRef.current;
		if (!gridElement) {
			return undefined;
		}

		const updateOffsets = () => {
			const cards = gridElement.querySelectorAll<HTMLElement>(
				"[data-project-card]"
			);

			if (cards.length < 3) {
				setSecondRowOffset(null);
				return;
			}

			setSecondRowOffset(cards[2].offsetTop);
		};

		updateOffsets();

		const resizeObserver = new ResizeObserver(() => updateOffsets());
		resizeObserver.observe(gridElement);
		window.addEventListener("resize", updateOffsets);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener("resize", updateOffsets);
		};
	}, []);

	useEffect(() => {
		if (showAllProjects) {
			const rafId = requestAnimationFrame(() => setAnimateExtraProjects(true));
			return () => cancelAnimationFrame(rafId);
		}

		setAnimateExtraProjects(false);
	}, [showAllProjects]);

	useEffect(() => {
		const sectionElement = sectionRef.current;
		if (!sectionElement || sectionVisible) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					setSectionVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.25 },
		);

		observer.observe(sectionElement);

		return () => {
			observer.disconnect();
		};
	}, [sectionVisible]);

	const isCollapsed = !showAllProjects;
	const maxHeightValue =
		isCollapsed && secondRowOffset !== null
			? `${secondRowOffset + fadeSpan}px`
			: undefined;
	const fadeStart =
		secondRowOffset !== null ? Math.max(secondRowOffset - 24, 0) : null;
	const fadeEnd =
		secondRowOffset !== null ? secondRowOffset + fadeSpan : null;
	const overlayStart = isCollapsed && fadeStart !== null ? fadeStart : 0;
	const overlayHeight =
		fadeEnd !== null && fadeStart !== null
			? Math.max(fadeEnd - fadeStart, 0)
			: null;
	const maskGradient =
		isCollapsed && fadeStart !== null && fadeEnd !== null
			? `linear-gradient(180deg, rgba(0,0,0,1) 0px, rgba(0,0,0,1) ${fadeStart}px, rgba(0,0,0,0) ${fadeEnd}px)`
			: undefined;

	return (
		<section
			id="projects"
			ref={sectionRef}
			className={`mx-auto max-w-6xl px-4 pb-24 pt-48 sm:px-6 lg:px-8 transform-gpu transition-all duration-700 ease-out ${
				sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			}`}
		>
			<header
				className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
					sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
				}`}
			>
				<h2 className="text-[32px] font-semibold tracking-tight text-neutral-900 dark:text-white">
					Projets
				</h2>
				<p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa
					mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
					fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
					vitae.
				</p>
			</header>

			<div className="relative">
				<div
					ref={gridRef}
					className={`grid gap-x-12 gap-y-16 p-2 md:grid-cols-2 transition-[max-height] duration-500 ${
						isCollapsed ? "overflow-hidden" : ""
					}`}
					style={
						isCollapsed
							? {
									maxHeight: maxHeightValue,
									WebkitMaskImage: maskGradient,
									maskImage: maskGradient,
							  }
							: undefined
					}
				>
					{projects.map((project, index) => {
						const isExtraCard = index >= initialVisibleCards;
						const defaultEntrance = sectionVisible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4";
						const cardClasses = isExtraCard
							? showAllProjects && animateExtraProjects
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
							: defaultEntrance;
						const baseEntranceDelay =
							sectionVisible && !showAllProjects
								? { transitionDelay: `${index * 80}ms` }
								: undefined;
						const extraCardsDelay =
							index >= 2 && showAllProjects
								? { transitionDelay: `${(index - 2) * 80}ms` }
								: undefined;

						return (
							<div
								key={project.id}
								data-project-card={index}
								className={`transition-all duration-500 ease-out ${cardClasses}`}
								style={{ ...baseEntranceDelay, ...extraCardsDelay }}
							>
								<ProjectCard project={project} />
							</div>
						);
					})}
				</div>

				{isCollapsed && fadeStart !== null && fadeEnd !== null && (
					<div
						className="pointer-events-none absolute inset-x-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/60 dark:to-black"
						style={{
							top: overlayStart,
							height: overlayHeight ?? "auto",
							WebkitMaskImage: `linear-gradient(180deg, rgba(0,0,0,0) ${fadeStart}px, rgba(0,0,0,1) ${fadeEnd}px)`,
							maskImage: `linear-gradient(180deg, rgba(0,0,0,0) ${fadeStart}px, rgba(0,0,0,1) ${fadeEnd}px)`,
						}}
					/>
				)}
			</div>

			<button
				type="button"
				onClick={() => setShowAllProjects((prev) => !prev)}
				className={`mx-auto mt-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900/10 text-neutral-900 transition-all duration-500 hover:bg-neutral-100 dark:border-white/10 dark:text-white dark:hover:bg-white/5 ${
					sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
				}`}
				aria-label={
					showAllProjects ? "Masquer certains projets" : "Voir tous les projets"
				}
			>
				<ChevronDown
					className={`h-5 w-5 transition-transform ${
						showAllProjects ? "rotate-180" : "animate-bounce"
					}`}
				/>
			</button>
		</section>
	);
};

export default ProjectsSection;
