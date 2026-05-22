import { Skills } from "./components/Skills";
import { AboutSection } from "./components/about_section/AboutSection";
import { HeroSection } from "./components/hero_section/HeroSection";
import { WorkSection } from "./components/work_section/WorkSection";

export const Home = () => {
	return (
		<main>
			<HeroSection />
			<Skills />
			<AboutSection />
			<WorkSection />
		</main>
	);
};
