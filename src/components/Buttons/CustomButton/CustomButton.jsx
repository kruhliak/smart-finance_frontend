import { CustomButton } from "./CustomButton.styled";

const CustomBtnStyled = ({onClick, text, backBtn, googleBtn}) => {
    return(
        <>
            <CustomButton googleBtn={googleBtn} backBtn={backBtn} onClick={onClick}>{text}</CustomButton>
        </>
    );
};

export default CustomBtnStyled;