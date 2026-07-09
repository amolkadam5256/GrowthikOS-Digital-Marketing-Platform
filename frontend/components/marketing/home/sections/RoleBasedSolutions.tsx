import { UserCircle } from "lucide-react";

export function RoleBasedSolutions() {
  const roles = ["Founder", "CEO", "CMO", "Marketing Manager", "SEO Specialist", "PPC Specialist", "Content Writer", "Sales Team", "Customer Support", "Developer", "Designer"];
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-ink sm:text-4xl">Solutions by Role</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {roles.map((role) => (
            <button key={role} className="flex items-center gap-2 rounded-full border border-brand-ink/10 bg-brand-cream px-6 py-3 font-bold hover:bg-brand-ink hover:text-white transition">
              <UserCircle className="h-5 w-5" />
              {role}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}