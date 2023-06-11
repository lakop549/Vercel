import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c56166a3a9af6a1f0f372552f619fce4&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
