import Image from "next/image";
import { ChevronDown, Lock, Mic, Rocket, Scan, Search, Sparkles } from "lucide-react";

import googleBoostSearch from "@/assets/bento/google-boost-search.png";
import visaLogo from "@/assets/bento/visa.svg";
import mastercardLogo from "@/assets/bento/mastercard.svg";
import stripeLogo from "@/assets/bento/Stripe.svg";
import paypalLogo from "@/assets/bento/paypal.svg";
import gpayLogo from "@/assets/bento/gpay.svg";
import applePayLogo from "@/assets/bento/ApplePay.svg";
import avatarElouan from "@/assets/nous/elouan.png";
import avatarLeo from "@/assets/nous/leo.png";
import avatarMaxime from "@/assets/nous/maxime.png";

const paymentLogos = [
	{ src: visaLogo, alt: "Visa" },
	{ src: mastercardLogo, alt: "Mastercard" },
	{ src: stripeLogo, alt: "Stripe" },
	{ src: paypalLogo, alt: "PayPal" },
	{ src: gpayLogo, alt: "Google Pay" },
	{ src: applePayLogo, alt: "Apple Pay" },
];

const avatars = [
	{ src: avatarElouan, alt: "Elouan" },
	{ src: avatarLeo, alt: "Léo" },
	{ src: avatarMaxime, alt: "Maxime" },
];

const chartValues = [28, 44, 68, 92];

const cardBase =
	"rounded-[32px] border border-[#E4E4E7] bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]";

const Bento = () => {
	return (
		<section className="mx-auto max-w-6xl px-4 pb-24 pt-32 text-neutral-900 sm:px-6 lg:px-8">
			<header className="mx-auto max-w-2xl text-center">
				<h2 className="text-[34px] font-semibold tracking-tight">Besoin d'un site ?</h2>
				<p className="mt-4 text-sm leading-relaxed text-neutral-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam en hendrerit urna.
					Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae.
				</p>
			</header>

			<div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
				{/* Conversion card */}
				<article className={`${cardBase} lg:col-span-4`}>
					<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700">
						<Rocket className="h-7 w-7" />
					</div>
					<p className="mt-6 text-[44px] font-semibold tracking-tight">$6’392</p>
					<span className="mt-2 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
						+44,3%
					</span>
					<p className="mt-4 text-sm text-neutral-500">Optimisation de conversion</p>
				</article>

				{/* SEO card */}
				<article className={`${cardBase} flex flex-col gap-4 lg:col-span-4`}>
					<div>
						<p className="text-3xl font-semibold tracking-tight">SEO</p>
						<p className="text-sm text-neutral-500">
							Boost de recherche <span className="font-semibold">G</span>
						</p>
					</div>
					<div className="flex w-full items-center gap-3 rounded-full border border-neutral-200 px-4 py-3 text-neutral-400">
						<Search className="h-5 w-5" />
						<span className="flex-1 text-left text-sm text-neutral-400">Recherchez vos mots-clés...</span>
						<Mic className="h-5 w-5" />
						<Scan className="h-5 w-5" />
					</div>
					{/* <div className="relative mt-2 aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-neutral-100 bg-neutral-50">
						<Image src={googleBoostSearch} alt="Google boost search" fill className="object-contain" />
					</div> */}
				</article>

				{/* Stats card */}
				<article className={`${cardBase} lg:col-span-4 lg:row-span-2`}>
					<div className="flex items-start justify-between">
						<div>
							<p className="text-[46px] font-semibold">+240%</p>
							<p className="mt-2 text-sm text-neutral-500">
								de trafic généré en moyenne après passage chez nous
							</p>
						</div>
						<button
							type="button"
							className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-700"
						>
							30 jours
							<ChevronDown className="h-4 w-4" />
						</button>
					</div>
					<div className="relative mt-12 h-44">
						<div className="absolute inset-0 flex flex-col justify-between">
							{Array.from({ length: 3 }).map((_, index) => (
								<span key={index} className="block border-t border-neutral-200" />
							))}
						</div>
						<div className="relative flex h-full items-end gap-4">
							{chartValues.map((height) => (
								<span
									key={height}
									className="flex-1 rounded-xl bg-neutral-800"
									style={{ height: `${height}%` }}
								/>
							))}
						</div>
					</div>
				</article>

				{/* Gradient hero */}
				<article className="lg:col-span-8">
					<div className="rounded-[40px] border border-neutral-200 bg-gradient-to-r from-[#9ac2ff] via-[#fad0ff] to-[#ffd5b0] p-[1.5px]">
						<div className="flex h-[220px] items-center justify-center rounded-[38px] bg-white text-center">
							<div className="flex flex-col items-center gap-4 text-neutral-700">
								<Sparkles className="h-6 w-6" />
								<p className="text-2xl font-semibold text-neutral-900">Ultra Design.</p>
								<p className="max-w-xs text-sm text-neutral-500">
									Des interfaces haut de gamme pour raconter votre histoire.
								</p>
							</div>
						</div>
					</div>
				</article>

				{/* Friends card */}
				<article className={`${cardBase} lg:col-span-4`}>
					<p className="text-5xl font-semibold">3</p>
					<p className="mt-1 text-sm text-neutral-500">nouveaux amis</p>
					<div className="mt-6 flex items-center gap-4">
						{avatars.map(({ src, alt }) => (
							<div
								key={alt}
								className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[inset_0_1px_3px_rgba(15,23,42,0.08)]"
							>
								<Image src={src} alt={alt} width={34} height={34} className="h-[34px] w-[34px] rounded-full" />
							</div>
						))}
					</div>
				</article>

				{/* Payments card */}
				<article className={`${cardBase} lg:col-span-8`}>
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Paiements Sécurisés</h3>
						<Lock className="h-5 w-5 text-neutral-500" />
					</div>
					<div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-6">
						{paymentLogos.map(({ src, alt }) => (
							<div key={alt} className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-white p-2">
								<Image src={src} alt={alt} className="h-10 w-auto" />
							</div>
						))}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Bento;
