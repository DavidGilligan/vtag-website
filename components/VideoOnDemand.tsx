"use client";
import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoOnDemand() {
  const [playing, setPlaying] = useState(false);
  return <div className="vtag-video-frame vtag-video-on-demand">
    {playing ? <iframe
      src="https://www.youtube-nocookie.com/embed/PkYpD54RoDc?autoplay=1"
      title="V-TAG featured video" allow="autoplay; encrypted-media; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> :
      <button className="vtag-video-play" type="button" onClick={() => setPlaying(true)} aria-label="Play V-TAG video">
        <Play size={38} fill="currentColor" aria-hidden="true" /><span>PLAY VIDEO</span>
      </button>}
  </div>;
}
