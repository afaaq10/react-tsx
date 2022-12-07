import styled from 'styled-components'

export const Wrapper = styled.div`
background: #ebfeff;

`
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
button{
    user-select: none;
    background: ${({ correct, userClicked }) =>
        correct ? 'linear-gradient(90deg,#56ffa4,#59bc86)' : !correct && userClicked ? 'linear-gradient(90deg,#ff5656,#c16868)' : 'white'
    };
    border: 2px solid gray;
    margin-top: 4px;
    border-radius: 8px;
}


`