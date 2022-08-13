import { useRef, useEffect, useState } from 'react';

type TrailerVideoProps = {
  videoSrc: string,
}

function TrailerVideo({videoSrc}: TrailerVideoProps): JSX.Element {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const videoRef = useRef(null);

  const playVideo = (): void => {
    // eslint-disable-next-line no-console
    console.log(videoRef.current);
  };

  useEffect(() => {
    const newTimeout = setTimeout(() => playVideo(), 1000);
    setTimeoutId(newTimeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    // console.log(videoRef.current);
    // videoRef.current.play();
  }, []);

  return(
    <video
      src={videoSrc}
      className="player__video"
      poster="img/player-poster.jpg"
      ref={videoRef}
      autoPlay
    >
    </video>
  );
}

export default TrailerVideo;
