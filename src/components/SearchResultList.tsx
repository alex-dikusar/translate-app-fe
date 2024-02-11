import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Entry } from '../types';

type Props = {
  items?: Entry[];
};

function SearchResultList({ items }: Props) {
  return (
    <List>
      {items?.map((item) => (
        <ListItem key={item.id} divider dense>
          <ListItemText primary={item.entry} secondary={item.translationFull} />
          <Button>Show Examples</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default SearchResultList;
