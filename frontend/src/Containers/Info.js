import React from 'react';
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
import { Link } from 'react-router-dom';

const Info = ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    buttonLabel,
    topLine,
    description,
    headline,
    img,
    alt,
    start
}) => {
    return (
        <>
            <InfoSec light={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine light={lightTopLine}>{topLine}</TopLine>
                                <Head light={lightText}>{headline}</Head>
                                <Subtitle light={lightTextDesc}>{description}</Subtitle>
                                <Link to={'/signup'}>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default Info
