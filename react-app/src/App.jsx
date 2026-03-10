import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Quote from './components/Quote';
import StateMonopoly from './components/StateMonopoly';
import Quiz from './components/Quiz';
import References from './components/References';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-col">
          <Hero />
          <Features />
          <Quote />
          <StateMonopoly />
          <Quiz />
          <References />
        </main>
        <Footer />
      </div>
    </div>
  );
}
