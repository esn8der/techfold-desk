import { Navbar } from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </main>
  );
};

export { Layout };
