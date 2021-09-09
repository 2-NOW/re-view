import Head from 'next/head';

function App({ Component }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>KDIER</title>
      </Head>
      <Component />
    </>
  );
}

export default App;
