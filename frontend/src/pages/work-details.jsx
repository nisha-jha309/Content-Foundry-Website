import { useParams, Link } from "react-router";
import content from "../data/scrollCard.js";

const WorkDetails = () => {
  const { slug } = useParams();

  const work = content.find((item) => item.slug === slug);

  if (!work) {
    return (
      <section className="flex min-h-screen w-full items-center justify-center bg-[#eee6db]">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold">
            Work not found
          </h1>

          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
          >
            Go Back
          </Link>
        </div>
      </section>
    );
  }

  const getYoutubeId = (url) => {
    if (!url) return null;

    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/
    );

    return match ? match[1] : null;
  };

  const youtubeId = getYoutubeId(work.youtube);

  return (
    <main className="min-h-screen w-full bg-black">
      {/* ================= VIDEO SECTION ================= */}
      <section className="relative h-screen w-screen overflow-hidden">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={work.title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white">
            <p>No video available for this project.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default WorkDetails;