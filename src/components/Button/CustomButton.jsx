import { CustomButton } from "./CustomButton.styled";

const CustomBtnStyled = ({onClick, text, whiteBgc, greyTxt, border, backBtn, italic}) => {
    return(
        <>
            <CustomButton italic={italic} backBtn={backBtn} whiteBgc={whiteBgc} greyTxt={greyTxt} border={border} onClick={onClick}>{text}</CustomButton>
        </>
    );
};

export default CustomBtnStyled;