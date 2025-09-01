const Hero = () => {
  return (
    <div className="content-grid index flex justify-between">
      <div className="content-block index flex column">
        <h5 className="fs-5 ff-barlow-cond letter-spacing-4 uppercase text-light">
          So, you want to travel to
        </h5>
        <h1 className="fs-1 ff-bellefair uppercase text-white">Space</h1>
        <p className="fs-9 ff-barlow text-light">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="content-button index flex column align-end">
        <a className="button flex justify-center align-center bg-white fs-4 ff-bellefair text-dark uppercase">
          Explore
        </a>
      </div>
    </div>
  );
};
export default Hero;
