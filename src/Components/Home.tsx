import { Header } from "./Header/Header";
import Dev from "../assets/Dev.jpg";


export const Home = () => {
  return (
    <section className="heightDisplay bg-[#111827] h-[100vh] overflow-hidden  px-4 md:px-8">
      <Header />

      <section className="relative  flex flex-col-reverse md:flex-row mx-auto justify-between items-center  gap-9 mt-20 md:gap-4 max-w-[1300px] py-4  my-12">
        <div className="md:w-[520px] z-20">
          <h1 className="titleDisplay text-3xl md:text-[36px] lg:text-[46px] leading-[56px] text-white font-bold">
            <span className="text-[#C0B7E8]">Dev </span>Eder Castro
            <span className="text-[#C0B7E8]"> Freelancer</span>
          </h1>
          <p className="displayNone text-base text-white mt-4 md:mt-9 mb-10 md:mb-16">
            👨‍💻 Freelancer peruano (24 años), apasionado por Linux 🐧, con
            experiencia en frontend 🎨 y conocimientos en backend 🛠️. Siempre
            explorando nuevas tecnologías. 🚀
            <div className="flex m-4 gap-4">
              <a
                href="https://www.linkedin.com/in/eder-castro-fernández-76952021a"
                target="_blank"
                className="text-white text-4xl"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://github.com/LakSSDev"
                target="_blank"
                className="text-white text-4xl"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=eder27012001@gmail.com"
                target="_blank"
                className="text-white text-4xl"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </p>
        </div>

        <div className="displayNone p-4 z-20 bg-white rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] bg-opacity-20">
          <img
            className="max-w-[490px] w-full rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] opacity-70 hover:opacity-100"
            src={Dev}
            alt=""
          />
        </div>
      </section>
    </section>
  );
};
