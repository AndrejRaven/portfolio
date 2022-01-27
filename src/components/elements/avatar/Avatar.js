import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import reactSVG from '../../../static/images/iconReact.svg';
import avatar from '../../../static/images/avatar.jpg';


const CustomAvatar = ({ badgeWidth, badgeHeight, avatarWidth, avatarHeight}) =>  {
  return (
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <Avatar alt="React" src={reactSVG} sx={{ width: badgeWidth, height: badgeHeight}} />
        }
      >
        <Avatar alt="Andrej Babiak" src={avatar} sx={{ width: avatarWidth, height: avatarHeight}} />
      </Badge>
  );
}

export default CustomAvatar;