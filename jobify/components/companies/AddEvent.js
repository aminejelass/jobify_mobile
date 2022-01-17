import axios from "axios";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
// import DatePicker from "react-native-datepicker";
// import DateTimePicker from "@react-native-community/datetimepicker";
import server from "../ipConfig/serverIp";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
  Image,
} from "react-native";
export default function AddEvent() {
  const [companyId, setCompanyId] = useState("Aziz");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date_time, setDate_time] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [duration, setDuration] = useState("");
  const [dailyPay, setDailyPay] = useState("");
  const [nbrWaiter, setNbrWaiter] = useState("");
  const [nbrChef, setNbrChef] = useState("");
  const [nbrCleaningWorker, setNbrCleaningWorker] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [textTime, setTextTime] = useState("Empty");

  /* handelChange functions here*/
  const onChange = (eventt, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.Version === "android");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      
      tempDate.getHours() +
      " h : " +
      tempDate.getMinutes() +
      " m ";
    setText(fDate);
    setTextTime(fTime);
    console.log(fDate + "(" + fTime + ")");
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const onChangeeventNameHandler = (eventName) => {
    setEventName(eventName);
    console.log(eventName);
  };
  const onChangelocationHandler = (location) => {
    setLocation(location);
  };
  const onChangedate_timeHandler = (date_time) => {
    setDate_time(date_time);
  };
  const onChangeimageUriHandler = (imageUri) => {
    setImageUri(imageUri);
  };
  const onChangedurationHandler = (duration) => {
    setDuration(duration);
  };
  const onChangedailyPayHandler = (dailyPay) => {
    setDailyPay(dailyPay);
  };
  const onChangenbrWaiterHandler = (nbrWaiter) => {
    setNbrWaiter(nbrWaiter);
  };
  const onChangenbrChefHandler = (nbrChef) => {
    setNbrChef(nbrChef);
  };
  const onChangenbrCleaningWorkerHandler = (nbrCleaningWorker) => {
    setNbrCleaningWorker(nbrCleaningWorker);
  };
  const onSubmitFormHandler = async (event) => {
    const companyId = await AsyncStorage.getItem("session");
    let url = `${server.Ip}/addEvent`
    axios
      .post(url, {
        companyId,
        eventName,
        location,
        date_time,
        imageUri,
        duration,
        dailyPay,
        nbrWaiter,
        nbrChef,
        nbrCleaningWorker,
      })
      .then(function (response) {
        console.log("aziz 5dem");
        console.log("response",response);
      })
      .catch(function (error) {
        console.log("aziz ma5demch");
        console.log(error);
      });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View Style={styles.container}>
      <View style={styles.wrapper}>
        {/* {isLoading ? (
            <Text style={styles.formHeading}> Creating resource </Text>
          ) : ( */}
        <Text style={styles.formHeading}>Create new Event</Text>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Event Name"
          placeholderTextColor="#252526"
          style={styles.input}
          value={eventName}
          // editable={!isLoading}
          onChangeText={onChangeeventNameHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Location"
          placeholderTextColor="#252526"
          style={styles.input}
          value={location}
          // editable={!isLoading}
          onChangeText={onChangelocationHandler}
        />
      </View>
     
     
      <View style={{display:'flex', flexDirection: 'row wrap'}}>
      <View style={styles.wrapper}>
        <TextInput
          placeholder=" date_time"
          placeholderTextColor="#252526"
          style={styles.inputHalf}
          value={date_time}
          // editable={!isLoading}
          onChangeText={onChangedate_timeHandler}
        />
      </View>
      
      <View style={styles.wrapper}>
        <TextInput
          placeholder=" Duration"
          placeholderTextColor="#252526"
          style={styles.inputHalf}
          value={duration}
          // editable={!isLoading}
          onChangeText={onChangedurationHandler}
        />
      </View>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="DailyPay"
          placeholderTextColor="#252526"
          style={styles.input}
          value={dailyPay}
          // editable={!isLoading}
          onChangeText={onChangedailyPayHandler}
        />
      </View>

      <View style={styles.wrapper}>
        <TextInput
          placeholder="nbrWaiter"
          placeholderTextColor="#252526"
          style={styles.input}
          value={nbrWaiter}
          // editable={!isLoading}
          onChangeText={onChangenbrWaiterHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="nbrChef"
          placeholderTextColor="#252526"
          style={styles.input}
          value={nbrChef}
          // editable={!isLoading}
          onChangeText={onChangenbrChefHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="nbrCleaningWorker"
          placeholderTextColor="#252526"
          style={styles.input}
          value={nbrCleaningWorker}
          // editable={!isLoading}
          onChangeText={onChangenbrCleaningWorkerHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Img"
          placeholderTextColor="#252526"
          style={styles.input}
          value={imageUri}
          // editable={!isLoading}
          onChangeText={onChangeimageUriHandler}
        />
      </View>

      <View>
        <Button
          title="Submit"
          onPress={onSubmitFormHandler}
          style={styles.submitButton}
          // disabled={isLoading}
        />
      </View>
      <StatusBar style="auto" />
    </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#F2F2F2",
    // alignItems: "center",
    // justifyContent: "center",
    // width:"100%"
    // marginTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
  },
  formHeading: {
    color: "#252526",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: '80%',
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
    padding: 15,
    // bottom:90,
    left:40,
    top:20,
  },
  inputHalf:{
    height: 50,
    width: '30%',
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
    padding: 15,
    
    // bottom:90,
    left:40,
    top:20,
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
    
    
  },
  addWrapper: {
    width: 250,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    // borderWidth:1,
    flexDirection:'row',
  justifyContent:'space-around',
  paddingHorizontal:1,
  },
 
});
