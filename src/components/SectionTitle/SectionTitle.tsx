import { Typography, Divider } from "@mui/material";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div style={{
      width: '100%',
      paddingBottom: '1rem',
    }}>
      <Typography variant="h5" my={2} textAlign="center" color='#6e6c6c'>
        {title}
      </Typography>
      <Divider />
    </div>
  );
};

export default SectionTitle;
