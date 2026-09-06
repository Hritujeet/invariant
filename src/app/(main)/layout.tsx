import Navbar from "@/components/site/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen py-4 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
      <Navbar />
      {children}
    </main>
  );
}
