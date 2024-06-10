import { useContext, useState } from 'react';
import { Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { FoodContext } from '../context/FoodContext';

type FoodCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  onEdit: (id: number) => void;
};

const FoodCard = ({ id, name, description, price, imageUrl, onEdit }: FoodCardProps) => {
  const { deleteFoodItem } = useContext(FoodContext)!;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteFoodItem(id);
    setIsDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="relative shadow-lg p-4 bg-white rounded-lg mb-4">
        <CardMedia component="img" height="175" image={imageUrl} alt={name} className="photo" />
        <CardContent>
          <div className="menu-info">
            <div className="menu-title">
              <Typography variant="h5">{name}</Typography>
              <Typography variant="h6" className="price">${price.toFixed(2)}</Typography>
            </div>
            <Typography variant="body2" color="textSecondary" className="menu-text">
              {description}
            </Typography>
          </div>
        </CardContent>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button variant="outlined" color="primary" onClick={() => onEdit(id)}>
            Edit
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleDeleteClick}>
            Delete
          </Button>
        </div>
      </Card>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FoodCard;
