import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ActivityIndicator
} from 'react-native';

/**
 * Screen Component Template
 * 
 * @param {object} props - Navigation props
 */
const ScreenTemplate = ({ navigation }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial data load
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handlePress = () => {
        console.log('Button Pressed');
        // navigation.navigate('Details'); 
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hello Mobile</Text>
                    <Text style={styles.subtitle}>React Native Template</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.text}>
                        This is a platform-responsive layout.
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePress}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    header: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        color: '#666666',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#333333',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default ScreenTemplate;
