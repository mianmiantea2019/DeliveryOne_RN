import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  const navigation = useNavigation();


  return (
    <>
      <BasketIcon />
      <ScrollView>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
