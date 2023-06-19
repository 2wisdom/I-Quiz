import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  NativeSelect,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function StartForm() {
  const navigation = useNavigate();

  const handleClick = () => {
    console.log("click!");
    navigation("/quiz");
  };
  return (
    <FormGroup>
      {/* name */}
      <TextField id="name-field" label="your name" variant="outlined" />

      {/* Amount */}
      <FormControlLabel
        label="Amount"
        value="amount"
        labelPlacement="start"
        control={
          <FormControl fullWidth style={{ margin: 10 }}>
            <NativeSelect
              defaultValue={15}
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
      <Button variant="contained" style={{ margin: 10 }} onClick={handleClick}>
        Start!
      </Button>
    </FormGroup>
  );
}
