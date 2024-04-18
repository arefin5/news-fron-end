import Footer from "../..//components/Footer";
import Header from "../..//components/Header";
import Videos from "../..//components/Videos";

export default function Home() {
    return (
      <>
        <Header />
        <Videos src="/videos/1.mp4" autoplay={true} controls={false} mute={true}
        loop={true}
        />
        <Footer />
      </>
  );
}