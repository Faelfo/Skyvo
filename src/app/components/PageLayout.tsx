import "../../styles/components/page-layout.css";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-bg">
      {/* Shared cloud background — same image as Contact.tsx CloudBackground */}
      <div className="page-cloud-layer" />
      <div className="page-overlay-blue" />
      <div className="page-overlay-gradient" />

      <div className="page-content">
        {children}
      </div>

      <footer className="footer">
        <p>
          © 2026 SKYVO<span>_</span> • Soluções Inteligentes
        </p>
      </footer>
    </div>
  );
}
