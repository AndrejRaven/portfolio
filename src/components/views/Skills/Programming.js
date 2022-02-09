import { FaReact, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiGithub, SiBootstrap } from 'react-icons/si';

import SkillIcon from '../../elements/skillIcon/SkillIcon';

const Programming = () => {

  return (
    <>
      <SkillIcon text="React" icon={<FaReact />} />
      <SkillIcon text="HTML5" icon={<FaHtml5 />} />
      <SkillIcon text="CSS3" icon={<FaCss3Alt />} />
      <SkillIcon text="Redux" icon={<SiRedux />} />
      <SkillIcon text="JavaScript/ES6" icon={<SiJavascript />} />
      <SkillIcon text="Git" icon={<SiGithub />} />
      <SkillIcon text="Bootstrap" icon={<SiBootstrap />} />
      <SkillIcon text="Sass" icon={<FaSass />} />
      <SkillIcon text="MaterialUi" icon={<SiBootstrap />} />
    </>
  );

};

export default Programming;
