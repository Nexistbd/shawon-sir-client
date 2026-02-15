import {
  HeroSection,
  BenefitsSection,
  TrendingClassesSection,
  TrendingCoursesSection,
  QuickExamSection,
  BooksSection,
  TestimonialsSection,
} from "@/components/sections";
import MentorsSection from "@/components/sections/MentorSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <BenefitsSection />
      <TrendingClassesSection />
      <TrendingCoursesSection />
      <QuickExamSection />
      <MentorsSection />
      <BooksSection />
      <TestimonialsSection />
    </main>
  );
}
