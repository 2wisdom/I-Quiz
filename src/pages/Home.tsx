import styled from "@emotion/styled";
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  NativeSelect,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function Home() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(15);
  const [difficulty, setDifficulty] = useState("medium");
  const [disabled, setDisabled] = useState(true);

  // name 변경 이벤트 핸들러
  const handleNameChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setName(e.target.value as string);
  };

  useEffect(() => {
    setDisabled(!name);
  }, [name]);

  // Amount 변경 이벤트 핸들러
  const handleAmountChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setAmount(e.target.value as number);
  };

  // Difficulty 변경 이벤트 핸들러
  const handleDifficultyChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setDifficulty(e.target.value as string);
  };

  const navigation = useNavigate();

  const handleClick = () => {
    console.log(`name ${name} amount ${amount} difficulty ${difficulty}`);
    navigation(`/quiz?amount=${amount}&difficulty=${difficulty}&name=${name}`);
  };

  return (
    <>
      <Wrapper>
        <div className="text-box">
          <h1>a Video Game Quiz !</h1>
          <p>"How much of a video game enthusiast are you?"</p>
        </div>

        <FormGroup>
          {/* name */}
          <TextField
            id="name-field"
            label="your name"
            variant="outlined"
            onChange={handleNameChange}
          />

          {/* Amount */}
          <FormControlLabel
            label="Amount"
            value="amount"
            labelPlacement="start"
            control={
              <FormControl fullWidth style={{ margin: 10 }}>
                <NativeSelect
                  defaultValue={15}
                  onChange={handleAmountChange}
                  inputProps={{
                    name: "amount",
                    id: "amount-controller",
                  }}
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                </NativeSelect>
              </FormControl>
            }
          />

          {/* Difficulty */}
          <FormControlLabel
            label="Difficulty"
            value="difficulty"
            labelPlacement="start"
            control={
              <FormControl fullWidth style={{ margin: 10 }}>
                <NativeSelect
                  defaultValue={"medium"}
                  onChange={handleDifficultyChange}
                  inputProps={{
                    name: "difficulty",
                    id: "difficulty-controller",
                  }}
                >
                  <option value={"easy"}>easy</option>
                  <option value={"medium"}>medium</option>
                  <option value={"hard"}>hard</option>
                </NativeSelect>
              </FormControl>
            }
          />

          {/* Button */}
          <Button
            variant="contained"
            style={{ margin: 10 }}
            onClick={handleClick}
            disabled={disabled}
          >
            Start!
          </Button>
        </FormGroup>
      </Wrapper>
    </>
  );
}
