import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

type PageStateProps = {
  path?:string
  schema?: any;
}

interface UniContainer {
  props: PageStateProps;
}

@observer
class UniContainer extends Component {
  render () {
    const {path="top",schema} = this.props
    return (
      <View className='UniContainer'>
        <View>
          <Text>{`> ${path}`}</Text>
        </View>
        {schema.properties && 
          Object.entries(schema.properties).map(([subName,value]) => {
            console.log(`subName:${subName}, schema:${JSON.stringify(value)}`)
            const comPath = `${path}.${subName}`
            return <UniContainer path={comPath} key={comPath} schema={value}></UniContainer>;
          })}
          <View>
          <Text>{`< ${path}`}</Text>
        </View>
      </View>
    )
  }
}

export default UniContainer
