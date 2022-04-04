export default function Map() {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.0459208459565!2d121.04137091540758!3d14.653334779709274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b71aca85faf9%3A0x9fa6230f1bc5fe8d!2sSugar%20Regulatory%20Administration!5e0!3m2!1sen!2sph!4v1624275497023!5m2!1sen!2sph"
        width="600"
        height="640"
        allowFullScreen={true}
        loading="lazy"
        className="h-96 w-screen xl:h-screen"
      ></iframe>
    </div>
  )
}
