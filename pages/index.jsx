import Head from "next/head";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alvano Hastagina</title>
        <meta name="description" content="Alvano Hastagina Portfolio v2" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="px-2 bg-slate-900 md:px-10 font-body text-primary">
        <Intro />
        <div className="w-full p-4 mx-auto">
          {/* <Experience /> */}
          <Projects />
          <Footer />
        </div>
      </main>
    </div>
  );
}
