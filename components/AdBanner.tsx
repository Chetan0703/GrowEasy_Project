import React, { useState } from "react";
import { IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditBannerSheet from "./EditBannerSheet";
import styles from "./AdBanner.module.css";

interface Banner {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

interface AdBannerProps {
  banner: Banner;
  index: number;
  onUpdate: (index: number, updatedBanner: Banner) => void;
}

const AdBanner: React.FC<AdBannerProps> = ({ banner, index, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(banner);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (updatedBanner: Banner) => {
    onUpdate(index, updatedBanner);
    setCurrentBanner(updatedBanner);
    handleClose();
  };

  const handleImageURLChange = (updatedBanner: Banner) => {
    setCurrentBanner(updatedBanner);
  };

  return (
    <div
  className={styles.banner}
  style={{ backgroundImage: `url(${currentBanner.background})` }} // Use backticks (`) for template literals
>

      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>{currentBanner.title}</h2>
        <p className={styles.bannerDescription}>{currentBanner.description}</p>
        <Button variant="contained" className={styles.ctaButton}>
          {currentBanner.cta}
        </Button>
      </div>
      <IconButton className={styles.editButton} onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <EditBannerSheet
        open={open}
        handleClose={handleClose}
        banner={currentBanner}
        onSave={handleSave}
        onImageURLChange={handleImageURLChange} // pass the new prop
      />
    </div>
  );
};

export default AdBanner;
