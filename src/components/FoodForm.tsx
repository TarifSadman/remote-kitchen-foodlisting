import { useState, useContext, useEffect } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';
import { FoodContext } from '../context/FoodContext';

type FoodFormProps = {
  currentFoodItem: { id: number; name: string; description: string; price: number; imageUrl: string } | null;
  onSave: () => void;
  onClose: () => void;
};

const FoodForm = ({ currentFoodItem, onSave, onClose } : FoodFormProps) => {
  const { addFoodItem, editFoodItem } = useContext(FoodContext)!;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (currentFoodItem) {
      setName(currentFoodItem.name);
      setDescription(currentFoodItem.description);
      setPrice(currentFoodItem.price);
      setImageUrl(currentFoodItem.imageUrl);
    } else {
      setName('');
      setDescription('');
      setPrice(0);
      setImageUrl('');
    }
  }, [currentFoodItem]);

  const handleImageChange = (e : any) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();

    const uploadedImageUrl = imageFile ? URL.createObjectURL(imageFile) : imageUrl;

    if (currentFoodItem) {
      editFoodItem({
        id: currentFoodItem.id, name, description, price, imageUrl: uploadedImageUrl,
        category: ''
      });
    } else {
      addFoodItem({
        name, description, price, imageUrl: uploadedImageUrl,
        category: ''
      });
    }

    onSave();
    onClose();
  };

  return (
    <Card className="shadow-lg p-6 bg-white rounded-lg mb-4">
      <CardContent>
        <Typography variant="h5" className="text-center mb-6">
          {currentFoodItem ? 'Edit Food Item' : 'Add New Food Item'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className="space-y-4 px-4">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
            className="mb-4"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            className="mb-4"
          />
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            fullWidth
            variant="outlined"
            className="mb-4"
          />
          <TextField
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            variant="outlined"
            className="mb-4"
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <Button variant="contained" color="secondary" component="span" fullWidth className="mb-4">
              {imageFile ? imageFile.name : 'Upload Image'}
            </Button>
          </label>
          <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
            {currentFoodItem ? 'Save Changes' : 'Add Food Item'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};


export default FoodForm;
