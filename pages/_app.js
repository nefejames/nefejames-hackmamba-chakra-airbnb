import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import Layout from "@layout/index";
import theme from "theme/index";

function MyApp({ Component, pageProps, router  }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ScaleFade key={router.route} initialScale={0.9} in="true">
          <Component {...pageProps} />
        </ScaleFade>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
