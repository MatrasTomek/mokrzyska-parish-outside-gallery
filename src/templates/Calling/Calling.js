import CallingItem from "../../components/CallingItem/CallingItem";
import { CALLINGS } from "../../Data/callings";
import styles from "./calling.module.scss";

const Calling = () => {
  const callingsViev = CALLINGS.map((item) => (
    <CallingItem key={item.id} item={item} />
  ));

  return (
    <div className={styles.wrapper}>
      <h2>Powołania z parafii Mokrzyska</h2>
      {callingsViev}
    </div>
  );
};

export default Calling;
