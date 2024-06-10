import React, { createContext, useState, ReactNode } from 'react';

type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
};

type FoodContextType = {
  foodItems: FoodItem[];
  addFoodItem: (item: Omit<FoodItem, 'id'>) => void;
  editFoodItem: (item: FoodItem) => void;
  deleteFoodItem: (id: number) => void;
};

export const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  
  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    {
      id: 1,
      name: 'Tteokbokki',
      description: 'Spicy rice cakes, serving with fish cake.',
      price: 10.99,
      category: 'Korea',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/06/fa/85/28/very-random-plate-of.jpg',
    },
    {
      id: 2,
      name: 'Chicken Ramen',
      description: 'Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.',
      price: 7.99,
      category: 'Japan',
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/06/fa/85/28/very-random-plate-of.jpg',
    },
    {
      id: 3,
      name: 'Bibimbap',
      description: 'Boiling vegetables, serving with special hot sauce',
      price: 8.99,
      category: 'Korea',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZGP4kcbo5iqJveY3sgLnXB_I7t7pyDtIPg&s',
    },
    {
      id: 4,
      name: 'Dan Dan Mian',
      description: 'Dan dan noodle, serving with green onion',
      price: 5.99,
      category: 'China',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZGP4kcbo5iqJveY3sgLnXB_I7t7pyDtIPg&s',
    },
    {
      id: 5,
      name: 'Yangzhou Fried Rice',
      description: 'Yangzhou style fried rice, serving with bean and pickles',
      price: 12.99,
      category: 'China',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF7X2QUbXiWzmv7w_odXOF9K3s023DKtytw&s',
    },
    {
      id: 6,
      name: 'Onigiri',
      description: 'Rice Sandwich, serving with soy sauce',
      price: 9.99,
      category: 'Japan',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmScmlGBVbO2GPj3T_E1TsZtdtCgd66SJEmQ&s',
    },
  ]);

  const addFoodItem = (item: Omit<FoodItem, 'id'>) => {
    setFoodItems([...foodItems, { ...item, id: Date.now() }]);
  };

  const editFoodItem = (updatedItem: FoodItem) => {
    setFoodItems(foodItems.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteFoodItem = (id: number) => {
    setFoodItems(foodItems.filter(item => item.id !== id));
  };

  return (
    <FoodContext.Provider value={{ foodItems, addFoodItem, editFoodItem, deleteFoodItem }}>
      {children}
    </FoodContext.Provider>
  );
};
