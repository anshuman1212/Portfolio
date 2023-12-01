export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hello, I'm Anshuman</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            dignissimos omnis. Doloremque quam, consectetur quo ratione eius
            nemo, laudantium, vel saepe cupiditate obcaecati ad expedita hic
            placeat eaque nulla praesentium? <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            odit facilis consequatur molestiae 
          </p>
        </div>
        <button className="btn btn-primary">Know More</button>
      </div>
    </section>
  );
}
