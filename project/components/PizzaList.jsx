import React from 'react';
import styles from '@/styles/PizzaList.module.css'; 
import PizzaCard from './PizzaCard';

const PizzaList = ({pizzaList}) => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                THE BEST PIZZA IN TOWN  
            </h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, neque et aliquam finibus, velit nisi malesuada diam, id placerat nulla nunc nec dolor. Aenean blandit libero non quam laoreet, quis placerat est fringilla. Proin quis lacus ex. Sed id vulputate eros. Maecenas imperdiet magna at sagittis volutpat. Vivamus lacinia rhoncus metus, in ultrices lectus. Quisque facilisis, turpis varius lacinia interdum, ligula sapien sollicitudin lorem, sit amet dapibus nunc ipsum et diam. Sed pulvinar, neque posuere ultrices sagittis, nibh tellus posuere augue, et lobortis turpis arcu a mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse orci neque, mattis sed accumsan faucibus, blandit et risus. Nunc lobortis sagittis varius. Nunc enim augue, tincidunt dictum venenatis sed, eleifend nec ligula. In convallis sem nisi, id posuere nibh malesuada nec.
            </p>
            <div className={styles.wrapper}>
            {pizzaList?.map((pizza) => (
                <PizzaCard key={pizza._id} pizza={pizza} />

            ))}
              
              
            </div>
        </div>
    )
}

export default PizzaList; 