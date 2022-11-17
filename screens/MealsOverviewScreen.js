import { useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
  // or
  //   const route = useRoute();

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
