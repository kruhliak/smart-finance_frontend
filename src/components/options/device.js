const size = {
    mobile: "320px",
    mobileMax: "767px",
    tablet: "768px",
    desktop: "1280px"
}

export const device = {
       mobile: `screen and (min-width: ${size.mobile})`,
    mobileMax: `screen and (max-width: ${size.mobileMax})`,
    tablet: `screen and (min-width: ${size.tablet})`,
    desktop: `screen and (min-width: ${size.desktop})` 
}

// Просто импортируем этот файл в "имя_файла".styled.jsx и в медиаправиле 
// пишем @media ${device.mobile} {} или тот экран что понадобится😘