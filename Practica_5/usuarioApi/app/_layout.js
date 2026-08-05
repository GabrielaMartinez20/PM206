import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />

      {/* Pantalla de Detalles */}
      <Stack.Screen 
        name="detalles" 
        options={{ 
          title: "Detalles del Usuario",
          // Muestra un botón de regreso nativo
          headerShown: true 
        }} 
      />

      {/* Pantalla de Actualizar */}
      <Stack.Screen 
        name="actualizar" 
        options={{ 
          title: "Actualizar Usuario",
          headerShown: true
        }} 
      />
    </Stack>
  );
}