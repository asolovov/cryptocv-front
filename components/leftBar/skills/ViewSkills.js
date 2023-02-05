import VIewSkill from "@/components/leftBar/skills/VIewSkill";

const ViewSkills = ({skills}) => {
    return (
        <>
            {skills && skills.map((skill, index) =>
                <VIewSkill key={index} skill={skill}/>
            )}
        </>
    );
};

export default ViewSkills;