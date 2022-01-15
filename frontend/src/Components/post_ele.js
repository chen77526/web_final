import styled from 'styled-components';

export const PostDivSec = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 50px 100px;
    background: ${({light}) => (light) ? '#fff' : '#101522' };
    justify-content: center;
    align-items: center;
`;

export const PostBox = styled.div`
    flex-direction: column;
    width: 80%;
    height: 80vh;
    padding: 10px 10px;
    border-radius: 10px;
    border: 5px solid gray;
    margin: 20px;
`;

export const PostTitle = styled.h2`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 20px;
    margin: 0;
`;

export const PostHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const PostCompany = styled.h3`
    font-size: 18px;
    display: flex;
    justify-content: right;
    align-items: center;
    color: #fff;
    height: inherit;
    margin: 0;
`;


export const PostText = styled.div`
    font-size: 16px;
    color: #fff;
`;