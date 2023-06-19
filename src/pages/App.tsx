import styled from "@emotion/styled";
import StartForm from "../components/StartForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 80vh;

  .text-box {
    margin: 30px;
  }
`;

export default function App() {
  return (
    <>
      <Wrapper>
        <div className="text-box">
          <h1>a Video Game Quiz !</h1>
          <p>"How much of a video game enthusiast are you?"</p>
        </div>
        <StartForm />
      </Wrapper>
    </>
  );
}
