import styles from "./callingItem.module.scss";

const CallingItem = ({ item }) => {
  const {
    name,
    dateOfBirth,
    placeOfBirth,
    dateOdDeth,
    placeOFDeth,
    present,
    path,
  } = item;

  return (
    <div className={styles.itemWrapper}>
      <img src={path} alt="zdjecie" />
      <p>{name}</p>
      <p>{dateOfBirth}</p>
      <p>{placeOfBirth}</p>
      <p>{dateOdDeth}</p>
      <p>{placeOFDeth}</p>
      <p>{present}</p>
    </div>
  );
};

export default CallingItem;
