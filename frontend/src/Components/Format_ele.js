import styled from "styled-components";

export const SignUpSec = styled.div`
    padding: 160px 0;
    background: ${({light}) => (light) ? '#2D4263' : '#101522' };
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignUpForm = styled.form`
    border-radius: 50px;
    padding: 25px;
    background: ${({light}) => (light) ? '#101522' : '#2D4263' };
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;

    @media screen and (max-width: 820px) {
        width: 60%;
    }
`;

export const SignUpFormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;
    max-width: 60%;

    &::placeholder{
        color: #242424;
        opacity: 0.5;
    }

    @media screen and (max-width: 820px) {
        margin: 0 0 10px 0;
        justify-content: center;
        max-width: 100%;
    }
`;

export const SignUpTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: inherit;
`;

export const SignUpSubtitle = styled.label`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 20px;

    @media screen and (max-width: 820px) {
        margin: 0 0 16px 0;
        justify-content: center;
    }
`;

export const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const SideText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #f0efed;
    font-size: 16px;
    padding: 5px;
`;

export const CvForm = styled.form`
    border-radius: 50px;
    padding: 25px;
    background: ${({light}) => (light) ? '#101522' : '#2D4263' };
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;

    @media screen and (max-width: 820px) {
        width: 60%;
    }
`;