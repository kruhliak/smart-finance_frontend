import { useMediaQuery } from 'hooks/useMediaQuery';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';

const Table = ({ onClickModal, operation, color }) => {
  const isMatches = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isMatches ? (
        <TableDesktop
          onClickModal={onClickModal}
          operation={operation}
          color={color}
        />
      ) : (
        <TableMobile
          onClickModal={onClickModal}
          operation={operation}
          color={color}
        />
      )}
    </>
  );
};

export default Table;
