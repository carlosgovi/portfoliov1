import Header from "./components/header";
import Welcome from "./components/welcome";
import SectionWorks from "./components/sectionWorks";
import SectionStudy from "./components/sectionStudy";
import SectionCardsWorks from "./components/sectionCardsWorks";
import Footer from "./components/footer";
function Home() {
  return (
    <main>
      <Header />
      <Welcome />
      <SectionWorks />
      <SectionStudy />
      <SectionCardsWorks />
      <Footer />
    </main>
  );
}

export default Home;
