import React from 'react';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHead,
    FooterSubtext,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksTitle,
    FooterLinksItem,
    FooterLink,
    FooterLinkFB,
    SocialIcon,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrapper,
    WebsiteRights
} from '../Components/Footer_ele';
import { FaFacebook, FaChrome, FaYoutube } from 'react-icons/fa'
import { Button } from '../globalStyles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHead>
                    Hello, world!!
                </FooterSubHead>
                <FooterSubtext>
                    Hello, web programming~
                </FooterSubtext>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to='/signup'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLinkFB href='https://reurl.cc/DdZKYE' target='_blank' rel='noopener noreferrer'>陳嘉宏</FooterLinkFB>
                        <FooterLinkFB href='https://reurl.cc/Opk5Qy' target='_blank' rel='noopener noreferrer'>童子瑜</FooterLinkFB>
                        <FooterLinkFB href='https://reurl.cc/Qj65NM' target='_blank' rel='noopener noreferrer'>邵家澤</FooterLinkFB>
                    </FooterLinksItem>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to='/signup'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        NTU JOBS
                    </SocialLogo>
                    <WebsiteRights>NTU JOBS © 2022</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/groups/NTURicWebProg' target='_blank' arial-label='Facebook' rel='noopener noreferrer'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://wp.ee.ntu.edu.tw/' target='_blank' arial-label='Website' rel='noopener noreferrer'>
                            <FaChrome />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.youtube.com/' target='_blank' arial-label='Youtube' rel='noopener noreferrer'>
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
            <Form>
                <FormInput name='company' type='text' placeholder='Search Company' />
                <Button fontBig>Subscribe</Button>
            </Form>    
        </FooterContainer>
    )
}

export default Footer
