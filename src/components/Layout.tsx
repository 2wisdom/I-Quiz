import Navbar from "./Navbar";

export type Parameter = {
  children: React.ReactNode;
};

export default function Layout({ children }: Parameter) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
