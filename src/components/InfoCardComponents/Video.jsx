function Video({ target }) {
  return (
    <>
      {target.video && (
        <>
          <iframe src={target.video.replace("watch?v=", "embed/")}></iframe>
          <a target="_blank" href={target.video}>
            View on youtube
          </a>
          {target.length && (
            <p>
              <b>Length</b>: 00:01:50
            </p>
          )}
        </>
      )}
    </>
  );
}
export default Video;
