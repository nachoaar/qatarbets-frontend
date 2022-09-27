import React from "react";
import fb from "../../media/facebook.png";
import tw from "../../media/twitter.png";
import ig from "../../media/instagram.png";
import lin from "../../media/linkedin.png";
import { SeparatorHorizontal } from "../Utils/SeparatorHorizontal";
import AboutUs from "../AboutUs/AboutUs";

export const Footer = () => {
  return (
    <div className="w-full items-center bg-morado text-gris flex flex-wrap mx-auto justify-evenly py-4 sm:p-4">
      <div className="flex flex-row flex-wrap w-full sm:w-11/12 justify-around">
        <div className="w-full sm:w-1/3">
          <svg
            className="pl-6"
            width="209"
            height="81"
            viewBox="0 0 209 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69958 36.5166C7.69958 20.7133 19.8347 10.9904 36 10.9904C52.1786 10.9904 64.3004 20.7133 64.3004 36.5166C64.3004 57.1768 44.4955 69.3328 36 69.3328C27.5134 69.3328 7.69958 57.1768 7.69958 36.5166Z"
              fill="url(#paint0_linear_279_662)"
            />
            <path
              d="M20.5796 45.0551C20.5796 25.2933 31.9069 17.9188 35.5376 17.9188C39.1817 17.9188 50.5046 25.2933 50.5046 45.0551C50.5046 54.787 44.8365 60.8583 35.5376 60.8583C26.2432 60.8583 20.5796 54.787 20.5796 45.0551Z"
              fill="#FF003F"
            />
            <path
              d="M84.1129 52.2085L81.9098 49.9741C81.1285 50.3075 80.3265 50.4741 79.5035 50.4741C78.3681 50.4741 77.3265 50.1877 76.3785 49.6147C75.4202 49.0418 74.6494 48.2658 74.066 47.2866C73.4931 46.297 73.2067 45.2189 73.2067 44.0522L73.2379 33.9116C73.2379 32.7762 73.5192 31.7241 74.0817 30.7554C74.6337 29.7866 75.3837 29.0106 76.3317 28.4272C77.2796 27.8335 78.3369 27.5366 79.5035 27.5366C80.639 27.5366 81.6806 27.8179 82.6285 28.3804C83.5765 28.9533 84.3317 29.7189 84.8942 30.6772C85.4671 31.6356 85.7535 32.7137 85.7535 33.9116L85.7848 44.0522C85.7848 44.6668 85.6962 45.2658 85.5192 45.8491C85.3525 46.422 85.1285 46.9533 84.8473 47.4429L86.8317 49.4585C86.9358 49.5418 86.9462 49.6147 86.8629 49.6772L84.3473 52.2085C84.2744 52.271 84.1962 52.271 84.1129 52.2085ZM79.5035 46.6147C80.2327 46.6147 80.816 46.3439 81.2535 45.8022C81.691 45.2502 81.9098 44.6668 81.9098 44.0522L81.8785 33.9116C81.8785 33.2241 81.6546 32.6304 81.2067 32.1304C80.7587 31.6304 80.191 31.3804 79.5035 31.3804C78.7848 31.3804 78.2067 31.6356 77.7692 32.146C77.3317 32.6564 77.1129 33.245 77.1129 33.9116V44.0522C77.1129 44.8231 77.3629 45.4429 77.8629 45.9116C78.3629 46.3804 78.9098 46.6147 79.5035 46.6147ZM86.7535 50.0054L90.7223 28.021C90.7431 27.9377 90.7952 27.896 90.8785 27.896H95.5192C95.6025 27.896 95.6546 27.9377 95.6754 28.021L99.4879 50.0054C99.4983 50.1095 99.4567 50.1616 99.3629 50.1616H95.816C95.7119 50.1616 95.6546 50.1095 95.6442 50.0054L95.3004 47.6616H90.941L90.5973 50.0054C90.5869 50.1095 90.5348 50.1616 90.441 50.1616H86.8785C86.7952 50.1616 86.7535 50.1095 86.7535 50.0054ZM93.0192 35.2554L91.5817 44.2397H94.6598L93.3473 35.2554L93.1598 34.0679L93.0192 35.2554ZM106.379 50.1616H102.769C102.675 50.1616 102.629 50.1095 102.629 50.0054V31.7554H98.4723C98.3681 31.7554 98.316 31.7033 98.316 31.5991L98.3473 28.021C98.3473 27.9377 98.389 27.896 98.4723 27.896H110.629C110.743 27.896 110.8 27.9377 110.8 28.021V31.5991C110.8 31.7033 110.759 31.7554 110.675 31.7554H106.472L106.504 50.0054C106.504 50.1095 106.462 50.1616 106.379 50.1616ZM109.347 50.0054L113.316 28.021C113.337 27.9377 113.389 27.896 113.472 27.896H118.113C118.196 27.896 118.248 27.9377 118.269 28.021L122.082 50.0054C122.092 50.1095 122.05 50.1616 121.957 50.1616H118.41C118.306 50.1616 118.248 50.1095 118.238 50.0054L117.894 47.6616H113.535L113.191 50.0054C113.181 50.1095 113.129 50.1616 113.035 50.1616H109.472C109.389 50.1616 109.347 50.1095 109.347 50.0054ZM115.613 35.2554L114.175 44.2397H117.254L115.941 35.2554L115.754 34.0679L115.613 35.2554ZM127.832 50.1616H124.207C124.123 50.1616 124.082 50.1095 124.082 50.0054L124.144 28.021C124.144 27.9377 124.186 27.896 124.269 27.896H130.738C131.894 27.896 132.957 28.1772 133.925 28.7397C134.894 29.3022 135.665 30.0575 136.238 31.0054C136.821 31.9533 137.113 33.0262 137.113 34.2241C137.113 35.0054 136.993 35.7137 136.754 36.3491C136.514 36.9845 136.233 37.521 135.91 37.9585C135.597 38.396 135.311 38.7189 135.05 38.9272C136.207 40.2085 136.785 41.7137 136.785 43.4429L136.816 50.0054C136.816 50.1095 136.764 50.1616 136.66 50.1616H133.035C132.951 50.1616 132.91 50.1304 132.91 50.0679V43.4429C132.91 42.672 132.639 42.0054 132.097 41.4429C131.556 40.8804 130.889 40.5991 130.097 40.5991H127.988L127.957 50.0054C127.957 50.1095 127.915 50.1616 127.832 50.1616ZM130.738 31.7241H127.988V36.7554H130.738C131.394 36.7554 131.977 36.5106 132.488 36.021C133.009 35.5314 133.269 34.9325 133.269 34.2241C133.269 33.547 133.019 32.9637 132.519 32.4741C132.019 31.9741 131.425 31.7241 130.738 31.7241ZM145.379 50.1616H139.644C139.561 50.1616 139.519 50.1095 139.519 50.0054L139.582 28.021C139.582 27.9377 139.623 27.896 139.707 27.896H145.863C147.061 27.896 148.149 28.1877 149.129 28.771C150.087 29.3543 150.842 30.1304 151.394 31.0991C151.946 32.0575 152.222 33.0991 152.222 34.2241C152.222 35.1408 152.014 35.995 151.597 36.7866C151.181 37.5783 150.686 38.2189 150.113 38.7085C150.727 39.3231 151.207 40.0366 151.55 40.8491C151.894 41.6616 152.066 42.5158 152.066 43.4116C152.066 44.6512 151.769 45.7814 151.175 46.8022C150.571 47.8231 149.764 48.6408 148.754 49.2554C147.743 49.8595 146.618 50.1616 145.379 50.1616ZM145.863 31.6929H143.425V36.7241H145.863C146.602 36.7241 147.201 36.4637 147.66 35.9429C148.118 35.4116 148.347 34.8387 148.347 34.2241C148.347 33.547 148.102 32.9585 147.613 32.4585C147.123 31.9481 146.54 31.6929 145.863 31.6929ZM145.379 40.5991H143.425L143.394 46.2554H145.379C146.149 46.2554 146.811 45.9741 147.363 45.4116C147.915 44.8491 148.191 44.1825 148.191 43.4116C148.191 42.6408 147.915 41.9793 147.363 41.4272C146.811 40.8752 146.149 40.5991 145.379 40.5991ZM164.832 50.1616H154.488C154.405 50.1616 154.363 50.1095 154.363 50.0054L154.394 28.021C154.394 27.9377 154.436 27.896 154.519 27.896H164.8C164.884 27.896 164.925 27.9481 164.925 28.0522V31.6304C164.925 31.7137 164.884 31.7554 164.8 31.7554H158.238V36.7554H164.8C164.884 36.7554 164.925 36.797 164.925 36.8804L164.957 40.5054C164.957 40.5887 164.915 40.6304 164.832 40.6304H158.238V46.2241H164.832C164.915 46.2241 164.957 46.2762 164.957 46.3804V50.0366C164.957 50.12 164.915 50.1616 164.832 50.1616ZM174.629 50.1616H171.019C170.925 50.1616 170.879 50.1095 170.879 50.0054V31.7554H166.722C166.618 31.7554 166.566 31.7033 166.566 31.5991L166.597 28.021C166.597 27.9377 166.639 27.896 166.722 27.896H178.879C178.993 27.896 179.05 27.9377 179.05 28.021V31.5991C179.05 31.7033 179.009 31.7554 178.925 31.7554H174.722L174.754 50.0054C174.754 50.1095 174.712 50.1616 174.629 50.1616ZM186.05 50.4741C184.915 50.4741 183.868 50.1825 182.91 49.5991C181.962 49.0158 181.201 48.2397 180.629 47.271C180.066 46.2918 179.785 45.2189 179.785 44.0522V42.5835C179.785 42.4689 179.837 42.4116 179.941 42.4116H183.535C183.618 42.4116 183.66 42.4689 183.66 42.5835V44.0522C183.66 44.7502 183.894 45.3543 184.363 45.8647C184.832 46.3647 185.394 46.6147 186.05 46.6147C186.717 46.6147 187.285 46.3595 187.754 45.8491C188.222 45.3283 188.457 44.7293 188.457 44.0522C188.457 43.271 187.946 42.5887 186.925 42.0054C186.759 41.9012 186.54 41.7762 186.269 41.6304C186.009 41.4741 185.696 41.297 185.332 41.0991C184.967 40.9012 184.613 40.7085 184.269 40.521C183.925 40.3231 183.592 40.1356 183.269 39.9585C182.102 39.271 181.233 38.4116 180.66 37.3804C180.097 36.3387 179.816 35.172 179.816 33.8804C179.816 32.6929 180.108 31.62 180.691 30.6616C181.274 29.7137 182.035 28.9637 182.972 28.4116C183.92 27.8491 184.946 27.5679 186.05 27.5679C187.186 27.5679 188.227 27.8491 189.175 28.4116C190.123 28.9845 190.879 29.745 191.441 30.6929C192.014 31.6408 192.3 32.7033 192.3 33.8804V36.5054C192.3 36.5887 192.259 36.6304 192.175 36.6304H188.582C188.498 36.6304 188.457 36.5887 188.457 36.5054L188.425 33.8804C188.425 33.1304 188.191 32.521 187.722 32.0522C187.254 31.5835 186.696 31.3491 186.05 31.3491C185.394 31.3491 184.832 31.5991 184.363 32.0991C183.894 32.5991 183.66 33.1929 183.66 33.8804C183.66 34.5783 183.806 35.1616 184.097 35.6304C184.399 36.0991 184.946 36.547 185.738 36.9741C185.821 37.0158 186.014 37.12 186.316 37.2866C186.618 37.4533 186.951 37.6408 187.316 37.8491C187.691 38.047 188.03 38.2293 188.332 38.396C188.634 38.5522 188.816 38.646 188.879 38.6772C189.941 39.271 190.78 40.0002 191.394 40.8647C192.019 41.7293 192.332 42.7918 192.332 44.0522C192.332 45.271 192.05 46.3647 191.488 47.3335C190.915 48.3022 190.155 49.0679 189.207 49.6304C188.259 50.1929 187.207 50.4741 186.05 50.4741Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_279_662"
                x1="36"
                y1="69.3328"
                x2="36"
                y2="10.9904"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#6C1A2F" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className=" text-xl text-justify font-parrafo w-full sm:max-w-3xl">
            Apuestas Deportivas, QATARBETS Sitio N°1 en Casa de apuestas online
            de la copa del mundo. Con las apuestas de la copa del mundo ¡Estás a
            punto de vivir la emoción de ganar!, Somos QATARBETS, la familia más
            grande de la web en entretenimiento para ganar dinero real con el
            mundial; la primera casa de apuestas mundialistas en LATAM. Además
            de ser la primera casa legal que avaló Soy Henry PF’s, contamos con
            el respaldo tecnológico de Soy Henry, el gigante mundial en el
            sector de Bootcamps en Desarrollo Web.
          </div>
        </div>
        <div className="min-w-fit ">
          <h3 className="font-titulo text-2xl mt-4 text-white mb-5">Nosotros</h3>
          <div className="font-parrafo text-xl px-6">
            <AboutUs/>
          </div>
        </div>
        <div className="min-w-fit ">
          <h3 className="font-titulo text-2xl mt-4 text-white mb-5">
            Redes Sociales
          </h3>
          <div className="font-parrafo text-xl px-6">
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5 cursor-pointer"
                src={fb}
                alt="Facebook"
              ></img>
              <a
                href="https://www.facebook.com/QatarBetsLATAM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="cursor-pointer my-1 hover:opacity-70">
                  Facebook
                </h5>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5 cursor-pointer"
                src={tw}
                alt="Twitter"
              ></img>
              <a
                href="https://twitter.com/QatarBets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="cursor-pointer my-1 hover:opacity-70">
                  Twitter
                </h5>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5 cursor-pointer"
                src={ig}
                alt="Instagram"
              ></img>
              <a
                href="https://www.instagram.com/qatar_bets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="cursor-pointer my-1 hover:opacity-70">
                  Instagram
                </h5>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5 cursor-pointer"
                src={lin}
                alt="Linkedin"
              ></img>
              <a
                href="https://www.linkedin.com/company/qatar-bets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="cursor-pointer my-1 hover:opacity-70">
                  Linkedin
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full justify-center items-center p-4 border-t-2 border-gris mt-8">
        <SeparatorHorizontal />
        <p>Todos los derechos reservados @2022</p>
        <b>QATARBETS</b>
        <SeparatorHorizontal />
      </div>
    </div>
  );
};
