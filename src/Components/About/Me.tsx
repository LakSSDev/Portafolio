import { SkillBackEnd } from "./Skills/SkillBackEnd";
import { CardSkill } from "./Skills/SkillFrontEnd";
import { SkillSo } from "./Skills/SkillSo";

export const Me = () => {
  return (
    <div className="w-[80%]" id="about">
      <div className="w-[80%] m-auto p-8">
        <div className="flex felx-col items-center justify-center">
          <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
            Dev Castro
          </span>
        </div>
        <h1 className="displayNone text-4xl font-medium text-gray-700 text-center mt-6">
          Mi stack de tecnologías
        </h1>
        <p className="displayNone mt-6 text-lg font-light text-gray-500 text-justify">
          💡 Un viaje de aprendizaje y crecimiento constante. Con el tiempo, he
          explorado y dominado diversas tecnologías que me ayudan a crear
          soluciones digitales eficientes, escalables y modernas. Cada
          herramienta ha moldeado mi forma de programar, pensar y crear.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-8">
          <div className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
            🎨 FrontEnd
          </h2>
          <p className="displayNone font-light text-sm text-justify text-gray-500 mb-3">
            Desarrollo interfaces modernas, responsivas y enfocadas en una
            excelente experiencia de usuario.
          </p>

          <CardSkill />
        </div>

        <div className="p-8">
          <div className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
            ⚙️ Backend
          </h2>
          <p className="displayNone font-light text-sm text-gray-500 mb-3">
            Construyo arquitecturas robustas, seguras y escalables que conectan
            el frontend con la lógica del sistema.
          </p>

          <SkillBackEnd />
        </div>

        <div className="p-8">
          <div className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
            🖥️ Sistemas y Herramientas
          </h2>
          <p className="displayNone font-light text-sm text-gray-500 mb-3">
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.
          </p>
          
          <SkillSo/>

        </div>
      </div>
    </div>
  );
};
