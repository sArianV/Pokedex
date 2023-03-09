import { Typography } from "@mui/material";
import Image from "next/image";
import styles from "./SpriteList.module.css";

const SpriteList = ({
  backDefault,
  backFemale,
  backShiny,
  backShinyFemale,
  frontDefault,
  frontFemale,
  frontShiny,
  frontShinyFemale,
  showTags = false,
}: {
  backDefault?: string;
  backFemale?: string;
  backShiny?: string;
  backShinyFemale?: string;
  frontDefault?: string;
  frontFemale?: string;
  frontShiny?: string;
  frontShinyFemale?: string;
  showTags?: boolean;
}) => {
  return (
    <div className={styles.root}>
      {frontDefault && (
        <div className={styles.image}>
          <Image src={frontDefault} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Male front</Typography>}
        </div>
      )}
      {backDefault && (
        <div className={styles.image}>
          <Image src={backDefault} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Male back</Typography>}
        </div>
      )}
      {frontFemale && (
        <div className={styles.image}>
          <Image src={frontFemale} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Female front</Typography>}
        </div>
      )}
      {backFemale && (
        <div className={styles.image}>
          <Image src={backFemale} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Female back</Typography>}
        </div>
      )}
      {frontShiny && (
        <div className={styles.image}>
          <Image src={frontShiny} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Male shiny front</Typography>}
        </div>
      )}
      {backShiny && (
        <div className={styles.image}>
          <Image src={backShiny} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Male shiny back</Typography>}
        </div>
      )}
      {frontShinyFemale && (
        <div className={styles.image}>
          <Image src={frontShinyFemale} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Female shiny front</Typography>}
        </div>
      )}
      {backShinyFemale && (
        <div className={styles.image}>
          <Image src={backShinyFemale} height={200} width={200} alt="" />
          {showTags && <Typography mt={-4} variant="subtitle1" gutterBottom>Female shiny back</Typography>}
        </div>
      )}
    </div>
  );
};

export default SpriteList;
