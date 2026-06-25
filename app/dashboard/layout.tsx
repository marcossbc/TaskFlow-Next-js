import Sidebar from "./components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#070A13] overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-[#070A13]">{children}</main>
    </div>
  );
}
