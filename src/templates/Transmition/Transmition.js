import styles from "./transmition.module.scss";
const Transmition = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <h3>
          Transmisja Mszy Świętej, w każdą Niedzielę o godzinie 10:30. Zachęcamy
          do skorzystania z transmisji wszystkich, którzy nie mogą z rożnych
          przyczyn pojawić się w Świątyni, a chcieliby uczestniczyć w obrzędach
          niedzielnej Mszy Świętej. Serdecznie zapraszamy.
        </h3>

        <p>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCCI1WX30yHw5f2mI_MSjCbQ"
          >
            link bezpośredni
          </a>
        </p>
        <div>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            title="YouTube video player"
            src="https://www.youtube.com/channel/UCCI1WX30yHw5f2mI_MSjCbQ"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Transmition;
