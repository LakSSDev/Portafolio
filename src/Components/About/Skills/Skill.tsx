interface SkillProps {
    skill: string;
}

export const Skill = ({ skill }: SkillProps) => {
    return (
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm hover:bg-indigo-200">
            {skill}
        </span>
    );
};