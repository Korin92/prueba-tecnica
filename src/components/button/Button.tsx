import React from "react"
import { CustomButton, ButtonText } from "./style"

type ButtonProps ={
    onClick:(e?: any) => void,
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) =>{

    return(
        <CustomButton {...props} onClick={onClick}>
           <ButtonText {...props}>{children}</ButtonText>
        </CustomButton>
    )
}

export default Button