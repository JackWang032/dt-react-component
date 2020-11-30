import React from 'react'
import { storiesOf } from '@storybook/react';
import SpreadSheet from '../components/spreadsheet';
// import 'handsontable/dist/handsontable.full.css';
import { PropsTable } from './components/propsTable';
import '../styles';

const propDefinitions = [{
    property: 'columns',
    propType: 'Array',
    required: false,
    description: '列名',
    defaultValue: ''
}, {
    property: 'data',
    propType: 'Array(二维数组)',
    required: false,
    description: '表格数据',
    defaultValue: ''
}]
const stories = storiesOf('SpreadSheet 多功能表', module);
stories.add('spreadSheet', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>表格内容右键可复制，表格大小可拖动</p>
            <h2>示例</h2>
            <SpreadSheet columns={['name', 'gender', 'age', 'address']} data={[['zhangsan', 'male', '20', 'xihu'], ['lisi', 'male', '18', 'yuhang']]} />
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { SpreadSheet } from 'dt-react-component'
        <SpreadSheet
            columns={['name', 'gender', 'age', 'address']}
            data={[['zhangsan', 'male', '20', 'xihu'], ['lisi', 'male', '18', 'yuhang']]}
        />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
