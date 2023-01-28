import { Text, View, Stylesheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Estilos from './estilos/Estilos';
import AreaTriangulo from './telas/AreaTriangulo';
import Juros from './telas/Juros';
import Conversao from './telas/Conversao';
import Desconto from './telas/Conversao';
import Et_Ga from './telas/Et_Ga';

//Páginas do app
function HomeScreen ({ navigation }) {
return (
<View style={Estilos.container}>
<Text style={Estilos.paragraph}>Canivete</Text> 

<Button
title="Desconto"
onPress={() => navigation.navigate('AreaTriangulo')}
  />

  <Button
title="Juros"
onPress={() => navigation.navigate('Juros')}
  />

   <Button
title="Conversao"
onPress={() => navigation.navigate('Conversao')}
  />

  <Button
title="Etanol X Gasolina"
onPress={() => navigation.navigate('Et_Ga')}
  />

</View>

);
}

const Stack = createNativeStackNavigator();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initial RouteName="Home">

<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }
} />

<Stack.Screen name="AreaTriangulo" component={AreaTriangulo} options={{ title:
'Desconto'}} />

<Stack.Screen name="Juros" component={Juros} options={{ title:
'Juros'}} />


<Stack.Screen name="Conversao" component={Conversao} options={{ title:
'Conversao'}} />

<Stack.Screen name="Desconto" component={Desconto} options={{ title:
'Desconto'}} />

<Stack.Screen name="Et_Ga" component={Et_Ga} options={{ title:
'Et_Ga'}} />



</Stack.Navigator>
</NavigationContainer>
);
}