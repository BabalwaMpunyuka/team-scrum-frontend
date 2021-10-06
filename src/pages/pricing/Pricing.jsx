import styles from './Pricing.module.css';

const Pricing = () => {

    return(
        <div className={`${styles.wrapper}`}>
            <h2 className={`${styles.title}`}>Select Your Pricing Plan</h2>
            <div className={`${styles.prices}`}>
                <div className={`${styles.price}`}>
                    <div className={`${styles.plan}`}>Basic Plan</div>
                    <div className={`${styles.annual}`}>Annual Membership Plan</div>
                    <div className={`${styles.amount}`}>$20</div>
                    <div className={`${styles.price_info}`}>Get up to 30% discount on all packages Including 2 x free consultations per year</div>
                    <div className={`${styles.sub}`}>
                        <p className={`${styles.text}`}>Subscribe</p>
                    </div>
                </div>
                <div className={`${styles.price}`}>
                    <div className={`${styles.plan}`}>Custom Packages</div>
                    <div className={`${styles.annual}`}>Investment Appraisals</div>
                    <div className={`${styles.amount}`}>$200</div>
                    <div className={`${styles.price_info}`}>Get an investment appraisal analysis done to consider the profitability of an investment</div>
                    <div className={`${styles.sub}`}>
                        <p className={`${styles.text}`}>Choose package</p>
                    </div>
                </div>
                <div className={`${styles.price}`}>
                    <div className={`${styles.plan}`}>SMMEs</div>
                    <div className={`${styles.annual}`}>Financial Planning</div>
                    <div className={`${styles.amount}`}>$300</div>
                    <div className={`${styles.price_info}`}>Get a strategic financial planning towards managing finances and growing your business</div>
                    <div className={`${styles.sub}`}>
                        <p className={`${styles.text}`}>Choose plan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;