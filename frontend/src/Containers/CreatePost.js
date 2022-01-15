import React from 'react'
import { SignUpSec } from '../Components/Format_ele'

const CreatePost = () => {
    return (
        <>
            <SignUpSec light={true}>
                <CvForm light={false}>
                    <SignUpTitle>New Post</SignUpTitle>
                    <SideText>Title</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Brief introduction of yourself..." onChange={e => setIntro(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />          
                    <SideText>Company</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Research experiences?" onChange={e => setResearch(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>description</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Tell me about the jobs you have done..." onChange={e => setWork(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>text</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Any side projects?" onChange={e => setSide(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>require</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Anything that makes your CV more competitive..." onChange={e => setOthers(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <Link to="/resume" style={{padding: "20px", alignSelf: "center"}}>
                        <Button onClick={handleCreateResume} primary fontBig big>Create</Button>
                    </Link>
                </CvForm>
            </SignUpSec>
        </>
    )
}

export default CreatePost
