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

    // videoRef.current.play();
  };

  useEffect(() => {
    const newTimeout = setTimeout(() => playVideo(), 1000);
    setTimeoutId(newTimeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return(
    <video
      src={'test'}
      className="player__video"
      poster="img/player-poster.jpg"
      ref={videoRef}
    >
    </video>
  );
}

export default TrailerVideo;
