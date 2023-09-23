import HomePage from "./HomePage";
import Head from "next/head";

export default function Home() {
  const pageTitle = "Getlinked";
  return (
    <div className="bg-bgColor overflow-hidden">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500&display=swap"
          rel="stylesheet"
        ></link>
        <title>{pageTitle}</title>
      </Head>
      <HomePage />
    </div>
  );
}
