

import Header from './Header';
import ReviewSection from './ReviewSection';
import styles from './Page.module.css';
const Home = () => {
 

  return (
    <div>
    
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <ReviewSection />
      </main>
    </div>

      
    </div>
  );
};

export default Home;



