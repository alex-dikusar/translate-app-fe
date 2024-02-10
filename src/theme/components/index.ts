import { Components } from '@mui/material/styles';
import MuiCssBaseline from './global';
import MuiCircularProgress from './loader';
import MuiGrid from './grid';
import MuiDialog from './dialog';
import MuiInput from './input';
import MuiHeader from './header';

export const components = {
  MuiCssBaseline,
  MuiCircularProgress,
  MuiGrid,
  ...MuiDialog,
  ...MuiInput,
  ...MuiHeader,
} as Partial<Components>;
