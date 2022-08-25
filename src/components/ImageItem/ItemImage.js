import Modal from "../../components/Modal/Modal";
import Button from "../../components/Buttons/Button";
import styles from "./imageItem.module.scss";

const ItemImage = ({
  isModalOpen,
  setModalOpen,
  pictureNo,
  setPictureNo,
  catalogName,
  slidesLength,
  pictureEnd = "",
}) => {
  const handleLeftMinus = () => {
    setPictureNo((prev) => prev - 1);
  };
  const handleLRightPlus = () => {
    setPictureNo((prev) => prev + 1);
  };

  const bigPicturePath = `images/${catalogName}/${pictureNo}${pictureEnd}.jpg`;

  const handleOnClose = () => {
    setModalOpen(false);
  };

  return (
    <Modal isModalOpen={isModalOpen}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${!bigPicturePath ? "" : bigPicturePath})`,
        }}
      >
        <p>&copy;Parafia Mokrzyska 2022</p>
        <div className={styles.buttons}>
          <div
            className={pictureNo === 1 ? styles.none : styles.left}
            onClick={handleLeftMinus}
          ></div>
          <div
            className={pictureNo === slidesLength ? styles.none : styles.right}
            onClick={handleLRightPlus}
          ></div>
          <Button name="zamknij" onClick={handleOnClose} />
        </div>
      </div>
    </Modal>
  );
};

export default ItemImage;
