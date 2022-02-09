import {  SiEslint, SiVisualstudiocode, SiCanva, SiAdobephotoshop, SiJenkins, SiJira } from 'react-icons/si';

import SkillIcon from '../../elements/skillIcon/SkillIcon';

const Tools = () => {
      
  return(
    <>
       <SkillIcon text="eslint" icon={<SiEslint />} />
       <SkillIcon text="Visual Studio" icon={<SiVisualstudiocode />} />
       <SkillIcon text="Canva" icon={<SiCanva />} />
       <SkillIcon text="Adobe photoshop" icon={<SiAdobephotoshop />} />
       <SkillIcon text="Jenkins" icon={<SiJenkins />} />
       <SkillIcon text="Jira" icon={<SiJira />} />
    </>
  );

};

export default Tools;