import React, { useState } from "react";
import styles from "@/styles/AddButton.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOption, setExtraOptions] = useState([]);

  const changePrice = (e, index) => {
    let currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  // handling extras input function
  const handleExtraInput = (e) => {
    // updating the extra state
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {

  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => setClose(true)}>
          x
        </span>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image </label>
          <input
            className={styles.input}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textArea
            className={styles.input}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.priceContainer}>

        <div className={styles.item}>
          <label className={styles.label}>Choose an image </label>
          <input
            className={`${styles.input} ${styles.imputSm}`}
            type="number"
            placeholder="small"
            onChange={(e) => changePrice(e, 0)}
          />
          <input
            className={`${styles.input} ${styles.imputMd}`}
            type="number"
            placeholder="medium"
            onChange={(e) => changePrice(e, 1)}
          />
          <input
            className={`${styles.input} ${styles.imputLg}`}
            type="number"
            placeholder="Large"
            onChange={(e) => changePrice(e, 2)}
          />
        </div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extras}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Add Extra Options
            </button>
            <div className={styles.extraItems}>
                {extraOption.map((option) => (
                    <span className={styles.extra} key={option.text}>{option.text}</span>
                ))}
            </div>
          </div>
          <button className={styles.addButton} onClick={handleCreate}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
