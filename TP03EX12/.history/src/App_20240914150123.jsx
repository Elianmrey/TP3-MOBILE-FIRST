import VideoPlayer from "./components/VideoPlayer.jsx";
import VideoDetails from "./components/VideoDetails";
import Description from "./components/Description";
import AdSection from "./components/AdSection";
import RelatedVideos from "./components/RelatedVideos.jsx";
import Comments from "./components/Comments";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App()
{
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <section className="video-section">
          <VideoPlayer />
          <VideoDetails />
          <Description />
          <AdSection />
        </section>
        <aside className="related-section">
          <RelatedVideos />
        </aside>
      </main>
      <Comments />
    </div>
  );
};