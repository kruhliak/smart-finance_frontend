import Modal from "components/Modal";
import CustomBtnStyled from "components/Buttons/CustomButton";

const Test = () => {
    return (
        <Modal text="Вы действительно хотите выйти?">
            <CustomBtnStyled text="Да, ёпта"/>
            <CustomBtnStyled backBtn text="Пардон" />
            <CustomBtnStyled googleBtn text="Google"/>
        </Modal>
    )
};

export default Test;