import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Header from './Header';
import SearchResult from './SearchResult';

function AppLayout() {
  return (
    <Stack height="100%">
      <Header />
      <Container>
        <SearchResult />
      </Container>
    </Stack>
  );
}

export default AppLayout;
