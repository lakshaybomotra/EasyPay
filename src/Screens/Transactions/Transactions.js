import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import TransctionListItem from '../../components/TransactionListItem/TransctionListItem';
import transaction from '../../data/transactionData/transactionData';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Transactions = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

    const sortTransactions = (order) => {
        let sortedData = [...transaction];

        if (order === 'asc') {
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }

        return sortedData;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />

            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <Feather name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Transactions</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Feather name="bell" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Sort Dropdown */}
            <View style={styles.sortContainer}>
                <TouchableOpacity onPress={toggleDropdown} style={styles.sortButton}>
                    <Text
                        style={{
                            fontSize: 18,
                            color: 'black',
                            fontWeight: '600',
                            textAlign: 'right',
                        }}
                    >Sort By</Text>
                    <FontAwesome name="sort" size={20} color="black" />

                </TouchableOpacity>

                {/* Dropdown menu */}
                {isDropdownVisible && (
                    <View style={styles.dropdown}>
                        <TouchableOpacity
                            style={styles.dropdownOption}
                            onPress={() => {
                                setSortOrder('asc');
                                setDropdownVisible(false);
                            }}
                        >
                            <Text style={styles.dropdownText}>
                                Sort A-Z
                            </Text>
                            {sortOrder === 'asc' ? (
                                <Feather name="check" size={16} color="green" />
                            ) : null}
                        </TouchableOpacity>

                        {/* Sort Z-A Option */}
                        <TouchableOpacity
                            style={styles.dropdownOption}
                            onPress={() => {
                                setSortOrder('desc');
                                setDropdownVisible(false);
                            }}
                        >
                            <Text style={styles.dropdownText}>
                                Sort Z-A


                            </Text>
                            {sortOrder === 'desc' ? (
                                <Feather name="check" size={16} color="green" />
                            ) : null}
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* List of Transactions */}
            <FlatList
                data={sortTransactions(sortOrder)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TransctionListItem item={item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
        marginHorizontal: 12,
    },
    iconButton: {
        height: 50,
        width: 50,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
    },
    sortContainer: {
        marginHorizontal: 12,
        marginBottom: 10,
    },
    sortButton: {
        alignItems: 'center',
        width: '25%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center'
    },
    sortButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        position: 'absolute',
        top: 40,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: 120,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        zIndex: 1000,
    },
    dropdownOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropdownText: {
        fontSize: 14,
        color: '#333',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '500'
    },
});

export default Transactions;
