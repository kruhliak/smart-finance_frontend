import { CustomButton } from "./CustomButton.styled";

const CustomBtnStyled = ({onClick, text, backBtn}) => {
    return(
        <>
            <CustomButton backBtn={backBtn} onClick={onClick}>{text}</CustomButton>
        </>
    );
};

export default CustomBtnStyled;