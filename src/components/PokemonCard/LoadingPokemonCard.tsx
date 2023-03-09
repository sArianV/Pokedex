import { Grid, Paper } from "@mui/material";
import { LineWave } from "react-loader-spinner";
import styles from "./PokemonCard.module.css";

const LoadingPokemonCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={styles.root}>
      <Paper elevation={1} className={styles.paper}>
        <div className={styles.loader}>
          <LineWave
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave"
            visible={true}
          />
        </div>
      </Paper>
    </Grid>
  );
};

export default LoadingPokemonCard;
