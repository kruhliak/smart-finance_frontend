import CustomBtnStyled from "components/Buttons/CustomButton/CustomButton";
import Modal from "components/Modal/Modal";

export default function HomePage() {
  return (
    <div>
      <p>HomePage</p>
      <Modal text="Вы действительно хотите выйти?">
        <CustomBtnStyled text="Да, ёпта"/>
        <CustomBtnStyled backBtn text="Пардон" />
        <CustomBtnStyled googleBtn text="Google"/>
      </Modal>
      
    </div>
  );
}
