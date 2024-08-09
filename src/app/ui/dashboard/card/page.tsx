import Image from 'next/image'
import styles from './card.module.css'

const Cards  =()=>{
    return(
        <>
            <div className={styles.card}>
                <div className={styles.creative}>
                    <h1 className={styles.h1}>
                        Creative Tutors
                    </h1>
                    <p className={styles.p}>
                        Discuss Topics, Exchange Ideas, and connect with other like minded Tutors.
                    </p>
                </div>
                <div className={styles.button}>
                    <button className={styles.btn}>Get Started</button>
                </div>
                <div className={styles.gif}>
                    <Image src="/astronaut.png" alt='' width="100" height="100"/>
                </div>
            </div>
            <div className={styles.learning}>
                <div className={styles.Lcard1}>
                    <div className={styles.toon}>
                        <Image src="/astronaut.png" alt='' width="130" height="130"/>
                    </div>
                    <div className={styles.Ttext}>
                        <h1> Total earnings</h1>
                        <h1>$313.00</h1>
                    </div>
                </div>
                <div className={styles.Lcard1}>
                    <div className={styles.toon}>
                        <Image src="/astronaut.png" alt='' width="130" height="130"/>
                    </div>
                    <div className={styles.Ttext}>
                        <h1> Total Learners</h1>
                        <h1>150 Learners</h1>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Cards