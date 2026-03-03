import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Niraj Byanju",
  description:
    "Product-Minded Software Engineer specializing in Next.js, larave, React js. Founder & CTO of Opprotunities Sharing. Inforamation Technology graduate from Nilai University.",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
