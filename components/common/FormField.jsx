import { Controller } from "react-hook-form";
import { View, TextInput, Text, Switch } from "react-native";
import styles from "../../assets/styles";

const FormField = ({
  name,
  control,
  errors,
  placeholder,
  keyboardType,
  secureTextEntry,
  type = "input",
}) => {
  if (type === "boolean") {
    return (
      <View style={styles.booleanFieldContainer}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch
              value={field.value}
              onValueChange={field.onChange}
              style={styles.switch}
            />
          )}
        />
        <Text style={styles.booleanFieldLabel}>{placeholder}</Text>
      </View>
    );
  }

  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextInput
            placeholder={placeholder}
            onChangeText={field.onChange}
            value={field.value}
            style={styles.input}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
      {errors && errors[name] && (
        <Text style={styles.errorText}>{errors[name].message}</Text>
      )}
    </View>
  );
};

export default FormField;
