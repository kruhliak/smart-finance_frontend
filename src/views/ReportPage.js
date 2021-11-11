import Charts from 'components/Charts/AllCharts';
import ReportLine from 'components/ReportLine/ReportLine';
import ReportList from 'components/ReportList/ReportList';

export default function ReportPage() {
  return (
    <div>
      <p>ReportPage</p>
      <ReportLine></ReportLine>
      <ReportList></ReportList>
      <Charts/>
    </div>
  );
}
