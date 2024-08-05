import { useEffect, useState } from "react";
import AdBanner from "../components/AdBanner";
import { Container, Grid } from "@mui/material";
import styles from "./index.module.css";

interface Banner {
  title: string;
  description: string;
  cta: string;
  background: string;
}

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    // Fetch the banners data from the JSON file
    fetch("/banners.json")
      .then((response) => response.json())
      .then((data) => setBanners(data));
  }, []);

  const handleUpdate = (index: number, updatedBanner: Banner) => {
    const newBanners = [...banners];
    newBanners[index] = updatedBanner;
    setBanners(newBanners);
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.heading}>Welcome to Our Store</h1>
      <Grid container spacing={1}>
        {banners.map((banner, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <AdBanner banner={banner} index={index} onUpdate={handleUpdate} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
