import { Skill } from "./Skill"


const skills = [
    "🪟 Windows",
    "🐧 Linux",
    "🔧 Git",
    "🐙 GitHub",
    "📮 Postman",
    "📝 VS Code",
    "🐳 Docker",
    "💻 Terminal / CLI"
  ];
  

export const SkillSo = () => {


    return(
        <div className="flex flex-wrap gap-2 mb-6 p-4">


            {skills.map((skill) => (
                <Skill skill={skill}/>
            ))}
           
            
          </div>
    )
}