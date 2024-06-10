"use client";
import { useContext, useState } from 'react';
import { Container, Button, Typography, Dialog, DialogContent } from '@mui/material';
import FoodCard from '@/components/FoodCard';
import FoodForm from '@/components/FoodForm';
import { FoodContext, FoodProvider } from '@/context/FoodContext';

const FoodMenu = () => {
  const { foodItems } = useContext(FoodContext)!;
  const [isAdding, setIsAdding] = useState(false);
  const [currentFoodItem, setCurrentFoodItem] = useState<{ id: number; name: string; description: string; price: number; imageUrl: string; category: string } | null>(null);

  const handleAddClick = () => {
    setIsAdding(true);
    setCurrentFoodItem(null);
  };

  const handleEditClick = (id: number) => {
    const item = foodItems.find((item) => item.id === id);
    if (item) {
      setCurrentFoodItem(item);
      setIsAdding(true);
    }
  };

  const handleSave = () => {
    setIsAdding(false);
    setCurrentFoodItem(null);
  };

  const handleClose = () => {
    setIsAdding(false);
    setCurrentFoodItem(null);
  };

  return (
    <Container>
      <Typography variant="h4" className="my-4" style={{ textAlign: 'center' }}>Food Menu</Typography>
      <div className="flex justify-end mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add New Item
        </Button>
      </div>
      <Dialog open={isAdding} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          <FoodForm currentFoodItem={currentFoodItem} onSave={handleSave} onClose={handleClose} />
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {foodItems.map((item) => (
          <FoodCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
            onEdit={handleEditClick}
          />
        ))}
      </div>
    </Container>
  );
};

const Home = () => (
  <FoodProvider>
    <FoodMenu />
  </FoodProvider>
);

export default Home;
