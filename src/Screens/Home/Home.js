import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false); 

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    setOpen(false); 
  };

  const showDatePicker = () => {
    setOpen(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Selected Date: {date.toDateString().toLocaleString()}
      </Text>

      <Button onPress={showDatePicker} title="Select Date" /> 

      {open && (
        <DatePicker
          modal
          open={open} 
          date={date}
          onConfirm={handleConfirm} 
          onCancel={() => setOpen(false)} 
          mode="date" 
        />
      )}
    </View>
  );
};

export default Home;
