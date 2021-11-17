import { useMediaQuery } from 'hooks/useMediaQuery';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';

const Table = ({ operation, color }) => {
  const isMatches = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isMatches ? (
        <TableDesktop operation={operation} color={color} />
      ) : (
        <TableMobile operation={operation} color={color} />
      )}
    </>
  );
};

export default Table;
