import { Grid, Typography, Divider } from "@mui/material";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Grid item xs={12} pb="1rem">
      <Typography variant="h5" my={2} textAlign="center">
        {title}
      </Typography>
      <Divider />
    </Grid>
  );
};

export default SectionTitle;
