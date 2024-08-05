import React, { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditBannerSheet from './EditBannerSheet';
import styles from './AdBanner.module.css';

interface Banner {
  title: string;
  description: string;
  cta: string;
  background: string;
}

interface AdBannerProps {
  banner: Banner;
  index: number;
  onUpdate: (index: number, updatedBanner: Banner) => void;
}

const AdBanner: React.FC<AdBannerProps> = ({ banner, index, onUpdate }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (updatedBanner: Banner) => {
    onUpdate(index, updatedBanner);
    handleClose();
  };

  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${banner.background})` }}>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>{banner.title}</h2>
        <p className={styles.bannerDescription}>{banner.description}</p>
        <Button variant="contained" className={styles.ctaButton}>
          {banner.cta}
        </Button>
      </div>
      <IconButton className={styles.editButton} onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <EditBannerSheet open={open} handleClose={handleClose} banner={banner} onSave={handleSave} />
    </div>
  );
};

export default AdBanner;
