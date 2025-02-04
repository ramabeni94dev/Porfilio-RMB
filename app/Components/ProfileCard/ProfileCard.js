import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-around p-4 mt-40 mb-40 text-white">
      {/* Columna Izquierda: Contenido textual */}
      <div className="md:w-1/4 flex flex-col items-center md:items-start space-y-4 ">
        <h1 className="text-5xl font-bold text-center md:text-left">
          Hi, I&rsquo;m Ramiro
        </h1>
        <p className="text-3xl text-center md:text-left">Web Developer</p>
        <button className="text-2xl bg-transparent border border-white rounded-full px-8 py-2  hover:bg-white hover:text-black transition-colors duration-300">
          Contact
        </button>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ramabeni94/"
            className="hover:text-gray-400"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://wa.me/541161031190" className="hover:text-gray-400">
            <FaWhatsapp className="text-3xl" />
          </a>
          <a
            href="https://github.com/ramabeni94dev"
            className="hover:text-gray-400"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Columna Derecha: SVG adaptable */}
      <div className="md:w-1/4 w-full flex justify-center mt-8 md:mt-0">
        <svg
          className="home__blob w-full h-auto"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </mask>
          <g mask="url(#mask0)">
            {/* Fondo blanco adaptado a la forma */}
            <rect x="0" y="0" width="479" height="467" fill="white" />
            {/* Imagen recortada con el blob */}
            <image
              className="home__blob-img"
              x="50"
              y="-1"
              xlinkHref="./ProfileCard.png"
              width="379"
              height="467"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ProfileCard;
