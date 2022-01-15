import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { UPDATE_CONFIRMATION } from "../graphql"
import { useMutation } from "@apollo/client";
import { Container, Button } from '../globalStyles';
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TopLine,
    Subtitle,
    Head,
    TextWrapper,
    ImgWrapper,
    Img
} from '../Components/Info_ele';
import svgfileC from '../images/Certificate.svg';

const Confirm = ({setLogin}) => {
    const [accConfirm] = useMutation(UPDATE_CONFIRMATION)
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
    const handleConfirm = () => {
        setLogin(true)
        accConfirm({
            variables: {
                id: id
            }
        })
    }

    return(
        <>
            <InfoSec light={false}>
                <Container>
                    <InfoRow imgStart={true}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine light={true}></TopLine>
                                <Head light={true}>Thanks for your signing</Head>
                                <Subtitle light={true}>I need sleeping...</Subtitle>
                                <Link to={`/resume/?id=${id}`}>
                                    <Button onClick={handleConfirm} big fontBig primary={true}>
                                        Verify
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={true}>
                                <Img src={svgfileC} alt={'image'} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )

}

export default Confirm