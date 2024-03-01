import{
  View,
  Text,
}from 'react-native'
import { AuthProvider } from './Hook/Auth'
import { AuthSongProvider } from './Hook/Song'
import AddComponents from './AddComponents'

const App=()=>{
  return(
    <AuthSongProvider>
      <AuthProvider>
        <AddComponents/>
      </AuthProvider>
    </AuthSongProvider>
  )
}

export default App