import Header from '../components/Header';
import Hero from '../components/Hero';
import MainCardList from '../components/MainCardList';
import EvalCardList from '../components/EvalCardList';
import Notice from '../components/Notice';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <MainCardList />
        <EvalCardList />
        <Notice />
      </main>

      <Footer />
    </>
  );
}
