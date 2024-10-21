import Head from "next/head";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Header />
      <main className="">
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}
