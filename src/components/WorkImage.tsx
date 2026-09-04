import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const handleMouseEnter = async () => {
    if (props.video) {
      try {
        setIsVideo(true);
        if (!videoUrl) {
          const res = await fetch(props.video);
          const blob = await res.blob();
          const objUrl = URL.createObjectURL(blob);
          setVideoUrl(objUrl);
        }
      } catch (err) {
        console.error("Error loading preview video:", err);
      }
    }
  };

  const content = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      <img src={props.image} alt={props.alt || "Project Preview"} loading="lazy" />
      {isVideo && videoUrl && <video src={videoUrl} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          {content}
        </a>
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          data-cursor="disable"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
