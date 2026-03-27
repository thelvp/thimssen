export const MusicBlock = () => {
  return (
    <>
      <iframe
        data-testid="embed-iframe"
        // style="border-radius:12px"
        src="https://open.spotify.com/embed/album/1mF78ngA3JVHrG3sq39frl?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        // allowfullscreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};
