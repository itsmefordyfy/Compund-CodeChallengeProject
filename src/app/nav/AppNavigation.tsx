import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//routes
import { UnauthenticatedStack } from '../routes'

//screens
import { SplashScreen } from '../../screens'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/types'
import { HeaderBackButton } from '../../components/HeaderBackButton'

const Stack = createStackNavigator()

export const AppNavigation = () => {
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState(UnauthenticatedStack)

  
  const {isLogin} = useSelector((state:RootState)=>state.authReducer)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      if(isLogin){
        setStack(UnauthenticatedStack)
      }
    }, 2000)
  
  }, [isLogin])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <Stack.Navigator initialRouteName='Home'>
      {stack.map(({ name, options, ...rest }) => (
        <Stack.Screen
          key={name}
          name={name}
          options={{
            headerLeft: () => name === 'Home' ? <></> : <HeaderBackButton/>,
            headerStyle:{
              backgroundColor:'#666666',
            },
            headerTitleStyle:{
              color:'white'
            },
            ...options,
          }}
          {...rest}
        />
      ))}
    </Stack.Navigator>
  )
}
