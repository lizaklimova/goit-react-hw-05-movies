import { Pagination } from '@mui/material';
import { Container } from 'components/App/App.styled';

const PaginationList = ({ pageQty, pg, onChange }) => {
  return (
    <Container>
      <Pagination
        count={pageQty}
        page={pg}
        onChange={(_, num) => {
          onChange(num);
        }}
        color={'success'}
        sx={{
          color: '#fff',
          stroke: '#fff',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',

          '& .MuiPaginationItem-root': {
            color: '#fff',
          },
          '& .MuiPaginationItem-page': {
            '&:hover:not(.Mui-selected):not(:first-of-type), &:focus:not(.Mui-selected):not(:first-of-type)':
              {
                color: '#1cb114',
              },
          },
        }}
      />
    </Container>
  );
};

export default PaginationList;
