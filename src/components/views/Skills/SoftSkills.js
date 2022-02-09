import { FaBrain, FaRegSmileBeam, FaMagic } from 'react-icons/fa';
import { TiMessages} from 'react-icons/ti';
import { GiAk47, GiRollingEnergy, GiChainLightning, GiYinYang, GiTrophy } from 'react-icons/gi';

import SkillIcon from '../../elements/skillIcon/SkillIcon';

const SoftSkills = () => {    
  return(
    <>
      <SkillIcon text="Comunicated" icon={<TiMessages />} />
      <SkillIcon text="Results-oriented" icon={<GiTrophy />} />
      <SkillIcon text="Team player" icon={<GiChainLightning />} />
      <SkillIcon text="Trainable" icon={<FaBrain />} />
      <SkillIcon text="Troubleshoting" icon={<GiAk47 />} />
      <SkillIcon text="Motivated" icon={<FaRegSmileBeam />} />
      <SkillIcon text="Creative" icon={<FaMagic />} />
      <SkillIcon text="Energy" icon={<GiRollingEnergy />} />
      <SkillIcon text="Work-life balance" icon={<GiYinYang />} />
    </>
  );
};

export default SoftSkills;
