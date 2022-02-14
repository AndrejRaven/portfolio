import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';


const EduJobItem = ({ icon, name, years }) => {
  return (
    <ListItem>
    <ListItemAvatar>
      <Avatar src={icon} />
    </ListItemAvatar>
    <ListItemText primary={name}
         secondary={
      <Typography style={{ color: '#AFBF9F', fontSize: '0.8rem' }}>{years}</Typography>
    }/>
  </ListItem>
  )
}

export default EduJobItem;