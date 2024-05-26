import React from "react";
import { Button, Text, View } from "react-native";
import Loading from "../../../components/common/Loading";
import useViewLogin from "../../../hooks/view/useViewLogin";
import FormField from "../../../components/common/FormField";
import styles from "../../../assets/styles";
import { Redirect } from "expo-router";

const Registration = () => {
  const {
    signUpWithEmail,
    loading,
    control,
    handleSubmit,
    errors,
    isLoading,
    data,
    shouldRedirect,
  } = useViewLogin();

  if (loading || isLoading) {
    return <Loading />;
  }

  if (shouldRedirect && data?.status) {
    return <Redirect href="/(home)/(tabs)" />;
  }

  return (
    <View style={styles.loginContainer}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <View style={styles.marginVertical}>
          <Text style={styles.textAlign}>Email</Text>
        </View>
        <FormField
          name="email"
          control={control}
          errors={errors}
          placeholder="Email Address"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <View style={styles.marginVertical}>
          <Text style={styles.textAlign}>Password</Text>
        </View>
        <FormField
          name="password"
          control={control}
          errors={errors}
          placeholder="Password"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={handleSubmit(signUpWithEmail)}
        />
      </View>
    </View>
  );
};

export default Registration;
