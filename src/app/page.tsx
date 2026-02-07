import {
  HeroSection,
  BenefitsSection,
  TrendingClassesSection,
  TrendingCoursesSection,
  QuickExamSection,
  InstructorsSection,
  BooksSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <BenefitsSection />
      <TrendingClassesSection />
      <TrendingCoursesSection />
      <QuickExamSection />
      <InstructorsSection />
      <BooksSection />
      <TestimonialsSection />
    </main>
  );
}
