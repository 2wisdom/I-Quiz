import { Button, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 auto;
  height: 80vh;
  max-width: 1200px;
`;

export default function QuizItem() {
  return (
    <Wrapper>
      {/* 문제 */}
      <Typography sx={{ fontSize: 20, margin: 5 }}>
        "In the PAYDAY series, who is the iconic leader of the PAYDAY gang?"
      </Typography>

      {/* 답안 */}
      <Grid container rowSpacing={1}>
        <Grid xs={6} item={true}>
          <Button variant="outlined" sx={{ margin: 3 }}>
            엄청엄청 긴 문장이 나오면 이건 엄청엄청 길어지나 ?
          </Button>
        </Grid>
        <Grid xs={6} item={true}>
          <Button variant="outlined" sx={{ margin: 3 }}>
            Chains
          </Button>
        </Grid>
        <Grid xs={6} item={true}>
          <Button variant="outlined" sx={{ margin: 3 }}>
            Dallas
          </Button>
        </Grid>
        <Grid xs={6} item={true}>
          <Button variant="outlined" sx={{ margin: 3 }}>
            엄청엄청 긴 문장이 나오면 이건 엄청엄청 길어지나 ?
          </Button>
        </Grid>
      </Grid>

      {/* Next */}
      <Button variant="contained" sx={{ margin: 3 }}>
        Next
      </Button>
    </Wrapper>
  );
}
