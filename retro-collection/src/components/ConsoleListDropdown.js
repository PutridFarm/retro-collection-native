import React from "react";
import {Picker, View} from "react-native";

const ConsoleListDropdown = ({consoleList, selectedValue, styles, onValueChange}) => {
    return (
        <View style={styles.consoleListDropdown}>
            <Picker
                style={styles.dropDownButton}
                onValueChange={(itemValue) => {
                    {onValueChange(itemValue)};
                }}
                selectedValue={selectedValue}
                >
                {
                consoleList.map(item => {
                    return (
                        <Picker.Item label={item.name} key={item.id} value={item.id} />
                    )
                })
                }
            </Picker>
        </View>
    );
}

export default ConsoleListDropdown;
