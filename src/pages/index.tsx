import Header from "@components/Header/Header";
import PokemonList from "@components/PokemonList/PokemonList";
import styles from "./HomePage.module.css";
const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <PokemonList />
    </div>
  );
};

export default Home;
