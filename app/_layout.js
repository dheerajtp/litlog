import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppState } from "react-native";
import { supabase } from "../utils/helpers/supabase";
import { Provider } from "react-redux";
import { persistStoreDetails, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";


const queryClient = new QueryClient();

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const ApplicationLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistStoreDetails} loading={null}>
        <StatusBar style="auto" />
          <Slot />
        </PersistGate>
        </Provider>
    </QueryClientProvider>
  );
};

export default ApplicationLayout;
