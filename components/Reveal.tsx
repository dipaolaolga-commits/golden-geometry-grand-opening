
import React, { useState, useRef } from 'react';

export const Reveal: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight uppercase">
              THE REVEAL.
            </h2>
            <p className="text-lg md:text-xl mb-6 uppercase tracking-[0.2em] font-light" style={{ color: '#C5A059' }}>
              PERFEKTION BIS INS DETAIL.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
              Ein Piercing ist mehr als nur Schmuck. Es ist eine Inszenierung. Erlebe den Moment, wenn Präzision auf Ästhetik trifft und dein Ear-Stack vollendet wird.
            </p>
          </div>

          {/* Video */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-[9/16] md:aspect-video rounded-lg overflow-hidden shadow-2xl group">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/videos/reveal/reveal-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              
              {/* Controls */}
              <div className="absolute bottom-4 right-4 z-10 flex gap-2 group-hover:opacity-100 opacity-0 transition-opacity">
                {/* Audio Toggle Button */}
                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full transition-all"
                  aria-label={isMuted ? "Audio einschalten" : "Audio ausschalten"}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
                
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="flex items-center justify-center w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full transition-all"
                  aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

