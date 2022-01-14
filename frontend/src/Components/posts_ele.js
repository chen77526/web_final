import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostSec = styled.div`
    display: flex;
    color: #fff;
    padding: 60px 0;
    background: #101522;
    width: "90%";
    justify-content: center;
`;

export const PostMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    margin-right: 2em; 
    margin-bottom: 2em;
`;

export const PostBloc = styled.li`
    background-color: #101522;
    border-radius: 5px;
    padding: 5px;
    height: 120px;
    width: 85%;

    &:hover {
        border: 2px solid #D4D4D4;
        transition: all 0.3s ease;
    }
`;

export const PostLink = styled(Link)`
    color: #1e8ef7;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
`;