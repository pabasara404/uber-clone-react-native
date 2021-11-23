import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination:"Negombo, Sri Lanka",
    },
    {
        id: "456",
        icon:"briefcase",
        location:"Work",
        destination:"Gampaha, Sri Lanka",
    },
];

const NavFavorites = () => {
    return  <FlatList data={data} keyExtractor={(item)=>item.id}
        ItemSeparatorComponent={()=>(
            <View
                style={[tw`bg-gray-200`,{height:0.5}]}  
            />
        )}
        renderItem={({item:{location,destination, icon}})=>(
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-bold text-lg`}>{location}</Text>
                    <Text style={tw`font-semibold text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )} />;
    
};

export default NavFavorites

const styles = StyleSheet.create({})