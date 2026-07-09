import { GraduationCap, BookOpen, Video, Users } from "lucide-react";

export function LearningCenter() {
  const items = [
    { icon: GraduationCap, title: "Academy" },
    { icon: BookOpen, title: "Documentation" },
    { icon: Video, title: "Video Tutorials" },
    { icon: Users, title: "Community" }
  ];
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-ink sm:text-4xl">Learning Center</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4 rounded-xl border border-brand-ink/10 bg-brand-cream p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <item.icon className="h-10 w-10 text-primary-600" />
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}