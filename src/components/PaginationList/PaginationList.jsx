import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const PaginationList = ({ pageQty, pg, onChange, changeSP }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Pagination
      count={pageQty}
      page={pg}
      onChange={(_, num) => {
        onChange(num);
        const query = searchParams.get('query');
        setSearchParams({ query, page: pg + 1 });
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
  );
};

export default PaginationList;
