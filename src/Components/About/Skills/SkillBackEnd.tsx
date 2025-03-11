import { Skill } from "./Skill"


const skills = [
    "🌿 Node.js",
    "🚂 Express",
    "🍃 MongoDB",
    "🐬 MySQL",
    "🐘 PostgreSQL",
    "🔥 Firebase",
    "🕸️ GraphQL",
    "🔗 REST API"
  ];
  

export const SkillBackEnd = () => {


    return(
        <div className="flex flex-wrap gap-2 mb-6 p-4">


            {skills.map((skill) => (
                <Skill skill={skill}/>
            ))}
           
            
          </div>
    )
}