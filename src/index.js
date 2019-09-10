import React from 'react';
import ReactDOM from 'react-dom'
import FoldList from './components/fold-list'
import { List } from 'antd';

const data = [
    {
        title: 'aaaaaaaaaaaaaaaa',
    },
    {
        title: 'bbbbbbbbbbbbbbbb',
    },
    {
        title: 'cccccccccccccccc',
    },
    {
        title: 'dddddddddddddddd',
    },
]

const renderItem = (item) => {
    return (
        <List.Item>
            {item.title}
        </List.Item>
    )
}

const App = () => {
    return (<div>
        <FoldList
            header={<div>{'header'}</div>}
            dataSource={data}
            renderItem={renderItem}
        />
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))