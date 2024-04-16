import { Stack } from "expo-router";
import { FormContextProvider } from "../context/FormContext";
export default function Routes() {
    return (
        <FormContextProvider>
            <RouteNav />
        </FormContextProvider>
    )
}

const RouteNav = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            
        </Stack>
    )
}
