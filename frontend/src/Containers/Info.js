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
    primary,            // true -> primary button theme
    lightBg,            // true -> light background theme
    imgStart,           // true -> row start with images
    lightTopLine,       // true -> light theme of top-line text 
    lightText,          // true -> light theme of head-line text
    lightTextDesc,      // true -> light theme of subtitle text
    buttonLabel,        // button text
    topLine,            // top-line text
    description,        // subtitle text
    headline,           // headline text
    img,                // image source
    alt,                // alternative text if image not show up
    start               // true ->     
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
