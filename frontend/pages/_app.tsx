import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import '../assets/css/base.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import Favicon from '../components/favicon'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>DispoX</title>
        <meta name="description" content="DISPOX" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Favicon />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App
