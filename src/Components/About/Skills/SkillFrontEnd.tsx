import { Skill } from "./Skill"


const skills = [
    "⚛️ React",
    "🚀 Astro",
    "🅰️ Angular",
    "🌬️ Tailwind",
    "🎀 Bootstrap",
    "🎨 Material UI",
    "💅 Styled Components",
    "🎯 Sass"
  ];
  

export const CardSkill = () => {


    return(
        <div className="flex flex-wrap gap-2 mb-6 p-4">


            {skills.map((skill) => (
                <Skill skill={skill}/>
            ))}
           
            
          </div>
    )
}