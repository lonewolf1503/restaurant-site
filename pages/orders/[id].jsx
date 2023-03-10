import React from 'react'
import styles from "../../styles/Order.module.css"
import Image from 'next/image'
const Order = () => {

    const status = 0;

const statusClass = (index) =>{
    if(index - status < 1) return styles.done
    if(index - status === 1) return styles.inProgress
    if(index - status > 1) return styles.undone
};


  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.row}>
        <table className={styles.table}>
                <tbody>
                <tr className={styles.trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <span className={styles.id}>
                                123456789
                            </span>
                        </td>
                        <td>
                            <span className={styles.name}>
                               Phineas And Ferb
                            </span>
                        </td>
                        <td>
                            <span className={styles.address}>
                                Lorem ipsum dolor sit amet 
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                               Rs. 459
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>  
        </div>
        <div className={styles.row}>
        <div className={statusClass(0)}>
                <Image src="/img/paid.png" alt="" width={30} height={30} />
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
                </div>
            </div>
            <div className={statusClass(1)}>
                <Image src="/img/bake.png" alt="" width={30} height={30} />
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
                </div>
            </div>
            <div className={statusClass(2)}>
                <Image src="/img/bike.png" alt="" width={30} height={30} />
                <span>On the way</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
                </div>
            </div>
            <div className={statusClass(3)}>
                <Image src="/img/delivered.png" alt="" width={30} height={30} />
                <span>Delivered</span>
                <div className={styles.checkedIcon}>
                <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
                </div>
            </div>
        </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
                <h2>
                    CART TOTAL
                </h2>
                <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rs. 429
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delivery:</b>Rs. 30
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rs. 459
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
        </div>
    </div>
  )
}

export default Order