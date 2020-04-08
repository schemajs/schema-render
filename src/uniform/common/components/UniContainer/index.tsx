import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { UniContainerStore } from '../../stores/UniContainerStore'

type PageStateProps = {
  store: any;
}

interface UniContainer {
  props: PageStateProps;
}

@observer
class UniContainer extends Component {
  
  render () {
    const {store} = this.props
    debugger
    const path = store.path
    const properties = store.properties
    return (
      <View className='UniContainer'>
        <View>
          <Text>{`> ${path}`}</Text>
        </View>
        {properties && 
          Object.entries(properties).map(([subName,value]) => {
            console.log(`subName:${subName}, schema:${JSON.stringify(value)}`)
            const comPath = `${path}.${subName}`
            const eleStore = store.getElementStore(path)
            return <UniContainer  key={comPath} store={eleStore}></UniContainer>;
          })}
          <View>
          <Text>{`< ${path}`}</Text>
        </View>
      </View>
    )
  }
}

export default UniContainer
