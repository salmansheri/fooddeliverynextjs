import React, {useState} from 'react'; 
import styles from '@/styles/Product.module.css'; 
import Image from 'next/image'; 

const Product = () => {
  const [size, setSize] = useState(0); 
    const pizza = {
        id: 1, 
        img: "/img/pizza.png",
        name: "Veg Pizza",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    }
  return (
    <div className={styles.container}>
    <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={pizza.img} alt="pizza" fill/>
        </div>
    </div>
    <div className={styles.right}>
    <h1 className={styles.title}>
      {pizza.name}
    </h1>
    <span className={styles.price}>${pizza.price[size]}</span>
    <p className={styles.desc}>Suspendisse a lacus id leo consequat facilisis. Nulla ac justo eget nunc finibus sagittis et quis orci. Nulla porta nunc vitae venenatis malesuada. In hac habitasse platea dictumst. Vestibulum tempus est id imperdiet blandit. Phasellus vitae est egestas, cursus massa vitae, maximus nisl. Donec ac nibh dui. Curabitur iaculis, nisi et aliquam eleifend, ante neque pharetra leo, sit amet ornare tortor nulla a neque. Etiam fermentum turpis vel lobortis luctus. Proin sollicitudin justo in mauris fermentum condimentum. In hac habitasse platea dictumst.</p>
    <h3 className={styles.choose}>Choose the size</h3>
    <div className={styles.sizes}>
      <div className={styles.size} onClick={()=> setSize(0)}>
        <Image className={styles.sizeImg} src="/img/size.png" alt="size" fill />
        <span  className={styles.number}>Small</span>
      </div>
      <div className={styles.size} onClick={() => setSize(1)}>
        <Image className={styles.sizeImg} src="/img/size.png" alt="size" fill />
        <span className={styles.number}>Medium</span>
      </div>
      <div className={styles.size} onClick={() => setSize(2)}>
        <Image className={styles.sizeImg} src="/img/size.png" alt="size" fill />
        <span className={styles.number}>Large</span>
      </div>

    </div> 
     <h3 className={styles.choose}>Choose Additional ingredients</h3>
     <div className={styles.ingredients}>
      <div className={styles.option}>
        <input type="checkbox" id="double" name="double" className={styles.checkbox} value="double"/>
        <label  className={styles.label} htmlFor="double">Double ingredients</label>
      </div>
      <div className={styles.option}>
        <input type="checkbox" id="cheese" className={styles.checkbox} name="cheese" value="cheese" />
        <label  className={styles.label} htmlFor="cheese">Extra Cheese</label>
      </div>
      <div className={styles.option}>
        <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} value="spicy"/>
        <label  className={styles.label} htmlFor="spicy">Spicy Sauce</label>
      </div>
      <div className={styles.option}>
        <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} value="garlic"/>
        <label className={styles.label}  htmlFor="garlic">Garlic Sauce</label>
      </div>

     </div>

     <div className={styles.add}>
      <input type="number" defaultValue={1} className={styles.quantity} />
      <button className={styles.button}>Add to Cart</button>
     </div>

    </div>


    </div>
  )
}

export default Product