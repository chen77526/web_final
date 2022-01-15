import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostSec = styled.div`
    display: flex;
    color: #fff;
    padding: 60px 0;
    background: ${({light}) => (light) ? '#fff' : '#101522' };
    justify-content: center;
`;

export const PostMenu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    margin-bottom: 2em;
    margin-top: 2em;
    flex-direction: column;
`;

export const PostBloc = styled.li`
    background-color: #101522;
    border-radius: 5px;
    /* padding: 5px; */
    margin: 5px 0;
    height: 120px;
    width: 85%;

    &:hover {
        border: 2px solid #D4D4D4;
        transition: all 0.3s ease;
        opacity: 0.5;
    }
`;

export const PostLink = styled(Link)`
    color: ${({closed, limited}) => (limited) ? '#F5CE00' : ((closed) ? '#F50057' : '#1e8ef7') };
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    opacity: 0.8;

    h1 {
        color: ${({closed, limited}) => (limited) ? '#F5CE00' : ((closed) ? '#F50057' : '#1e8ef7') };
    }

    &:hover {
        color: ${({closed, limited}) => (limited) ? '#F5CE00' : ((closed) ? '#F50057' : '#1e8ef7') };
    }
`;