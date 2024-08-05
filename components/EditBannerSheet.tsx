import React, { useState } from 'react';
import { Box, Modal, TextField, Button } from '@mui/material';

interface Banner {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

interface EditBannerSheetProps {
  open: boolean;
  handleClose: () => void;
  banner: Banner;
  onSave: (updatedBanner: Banner) => void;
}

const EditBannerSheet: React.FC<EditBannerSheetProps> = ({ open, handleClose, banner, onSave }) => {
  const [formData, setFormData] = useState<Banner>(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...style, width: 400 }}>
        <h2>Edit Banner</h2>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CTA"
          name="cta"
          value={formData.cta}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Background Image URL"
          name="background"
          value={formData.background}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  bottom: '10%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default EditBannerSheet;
