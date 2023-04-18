import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet , Image } from 'react-native';

const AppScreen = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [percentage, setPercentage] = useState(null);

    const handleItemPress = (item) => {
        setSelectedItem(item);
        console.log(selectedItem)
    }

    const handleAcceptPress = () => {
        const newPercentage = Math.floor(Math.random() * 100) + 1; // Generate random percentage
        setPercentage(newPercentage);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.shareIcon}>
                <Pressable style={styles.icon}>
                    <Image style={styles.Image} source={require('../assets/images/btn_share.png')} />
                </Pressable>
                <Pressable style={styles.icon}>
                    <Image style={styles.Image} source={require('../assets/images/btnReport.png')} />
                </Pressable>
                </View>
                <Pressable style={styles.icon}>
                    <Image style={styles.Image} source={require('../assets/images/btn_close.png')} />
                </Pressable>
            </View>
            <View>
            <Text>#animals</Text>
            <Text>What is your favorite animal </Text>
            </View>
            <View style={styles.body}>
        
                <Pressable
                    style={[styles.item, selectedItem === 1 && styles.selectedItem]}
                    onPress={() => handleItemPress(1)}
                >
                    
                </Pressable>
                <Pressable
                    style={[styles.item, selectedItem === 2 && styles.selectedItem]}
                    onPress={() => handleItemPress(2)}
                >
                    <Text>Item 2</Text>
                </Pressable>
                {/* <Pressable style={styles.acceptButton} onPress={handleAcceptPress}>
                    {percentage ? (
                        <Text>{percentage}%</Text>
                    ) : (
                        <FontAwesomeIcon icon={faThumbsUp} />
                    )}
                </Pressable> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems :'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    Image: {
        width: 40,
        height: 40,
    },
    shareIcon : {
        flex : 2 ,
        flexDirection : 'row'
    }, 
    icon: {
        padding: 8,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    item: {
        width: '50%',
        height: 350,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop :10,
        borderRadius: 8,

    },
    selectedItem: {
        backgroundColor: '#ccc',
    },
    acceptButton: {
        width: '100%',
        height: 80,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 8,
    },
});

export default AppScreen;