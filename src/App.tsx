import React, { useState, useEffect } from 'react';
import { japaneseDishes, Dish } from './data/dishes';
import { Utensils, RefreshCw, ChefHat } from 'lucide-react';

function App() {
  const [randomDish, setRandomDish] = useState<Dish | null>(null);
  const [remainingDishes, setRemainingDishes] = useState<Dish[]>([]);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    setRemainingDishes([...japaneseDishes]);
  }, []);

  const getRandomDish = () => {
    if (remainingDishes.length === 0) {
      setRemainingDishes([...japaneseDishes]);
      setCycleCount(prevCount => prevCount + 1);
    }

    const randomIndex = Math.floor(Math.random() * remainingDishes.length);
    const selectedDish = remainingDishes[randomIndex];
    setRandomDish(selectedDish);

    setRemainingDishes(prevDishes => prevDishes.filter(dish => dish.name !== selectedDish.name));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-yellow-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center">
          <Utensils className="mr-2" />
          ランダム日本の晩御飯
        </h1>
        <div className="text-center mb-6">
          <button
            onClick={getRandomDish}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <RefreshCw className="mr-2" />
            晩御飯を選ぶ
          </button>
        </div>
        {randomDish && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">今日の晩御飯は:</h2>
            <p className="text-3xl font-bold text-indigo-600 bg-indigo-100 py-4 px-6 rounded-lg inline-block mb-4">
              {randomDish.name}
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700 flex items-center justify-center">
                <ChefHat className="mr-2" />
                簡単な作り方:
              </h3>
              <p className="text-md text-gray-600 bg-gray-100 p-4 rounded-lg">
                {randomDish.recipe}
              </p>
            </div>
          </div>
        )}
        <div className="mt-4 text-center text-sm text-gray-600">
          残りのメニュー: {remainingDishes.length} / {japaneseDishes.length}
        </div>
        <div className="mt-2 text-center text-sm text-gray-600">
          サイクル回数: {cycleCount}
        </div>
      </div>
    </div>
  );
}

export default App;