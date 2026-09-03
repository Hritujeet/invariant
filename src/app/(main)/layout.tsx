import Navbar from "@/components/site/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>
    <Navbar />
    {children}
    </main>
}