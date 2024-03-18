import React from 'react'
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div className='home'>
        <h1>
            Welcome to ModelHub
        </h1>
        <Container>
            <Row className='align-items-center'>
                <h3><span> 
                    Welcome to the forefront of innovation! ModelHub is a gateway to explore the most advanced AI models that are transforming 
                    industries and redefining what's possible.
                </span></h3>
                <h4><span>
                    Before we explore the models on our own, we should know a few basic definitions.
                </span></h4>
            </Row>
            <Row className='align-items-center'>
                <h4><span>
                    What is an LLM?
                </span></h4>
                <p>
                A large language model (LLM) is a type of artificial intelligence (AI) program that can recognize and generate text, among other tasks. LLMs are trained on huge sets of data — hence the name "large." LLMs are built on machine learning: specifically, a type of neural network called a transformer model.
                </p>
                <h4><span>
                    What are LLMs used for?
                </span></h4>
                <p>
                    LLMs can be trained to do a number of tasks. One of the most well-known uses is their application as generative AI: when given a prompt or asked a question, they can produce text in reply. The publicly available LLM ChatGPT, for instance, can generate essays, poems, and other textual forms in response to user inputs.
                </p>
                <h4><span>
                    Why are LLMs becoming important for businesses?
                </span></h4>
                <p>
                As AI continues to grow, its place in the business setting becomes increasingly dominant. This is shown through the use of LLMs as well as machine learning tools. In the process of composing and applying machine learning models, research advises that simplicity and consistency should be among the main goals. Identifying the issues that must be solved is also essential, as is comprehending historical data and ensuring accuracy.
                </p>
                <p>
                The benefits associated with machine learning are often grouped into four categories: efficiency, effectiveness, experience and business evolution. As these continue to emerge, businesses invest in this technology.
                </p>
            </Row>
        </Container>
    </div>
  )
}
