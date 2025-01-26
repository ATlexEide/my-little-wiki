function Video({ target }) {
  return (
    <>
      {target.length && <p>00:01:50</p>}
      {target.video && (
        <>
          <a target="_blank" href={target.video}>
            Video
          </a>
          <iframe src={target.video.replace("watch?v=", "embed/")}></iframe>
        </>
      )}
    </>
  );
}
export default Video;
