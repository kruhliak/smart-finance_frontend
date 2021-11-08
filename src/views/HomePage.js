import Chart from '../components/Charts/IncomeChart';

export default function HomePage() {
  return (
    <>
    <Chart/>
    <div>
      <p>HomePage</p>
      <Modal text="Вы действительно хотите выйти?">
        {/* <CustomBtnStyled text="Да, ёпта"/>
        <CustomBtnStyled backBtn text="Пардон" /> */}
        <CustomBtnStyled googleBtn text="Google"/>
      </Modal>
      
      </div>
      </>
  );
}

