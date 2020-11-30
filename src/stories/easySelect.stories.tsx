import React from 'react'
import { storiesOf } from '@storybook/react';
import jsonp from 'fetch-jsonp';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import EasySelect from '../components/easy-select';
import './style/easySelect.scss'; // api文档页面特殊样式，暂时不引入公共样式，单独引入此文件

const stories = storiesOf('EasySelect 下拉框', module);
stories.addDecorator(withKnobs)
const servise = (str: any) =>
    jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${str}`)
        .then(response => response.json())
        .then((res: any) => res.result.map((item: any[]) => ({
            label: item[0],
            value: item[1]
        })));
const propDefinitions = [
    {
        property: 'dataSource',
        propType: 'array',
        required: false,
        description: (
            <div className="strory-dt_easy_select_divDesc">
                <p>{`静态数据源,支持json格式数据和普通数组格式。具体如下 :`}</p>
                <p>{`1、json格式,dataSource=[ {value: 1, label: '描述'} ], 选中后下拉框展示为对应选中项的label, 但是数据为对应value值;`}</p>
                <p>{`2、常规(String或者Number), dataSource=[ '文案1', 234 ];`}</p>
            </div>),
        defaultValue: '[]'
    },
    {
        property: 'filterLocal',
        propType: 'boolean',
        required: false,
        description: <div className="strory-dt_easy_select_divDesc">本地模糊查询, 支持json格式和普通数组格式模糊查询, 若需自定义模糊查询函数, 请使用filterOption自行替换即可.</div>,
        defaultValue: 'false'
    },
    {
        property: 'servise',
        propType: 'function',
        required: false,
        description: <div className="strory-dt_easy_select_divDesc">远程数据请求(异步加载远程数据方法, 接口参数传递等操作在这里处理, 如果数据格式不合法, 可以在这里进行return处理).</div>,
        defaultValue: '无'
    },
    {
        property: 'auto',
        propType: 'boolean',
        required: false,
        description: <div className="strory-dt_easy_select_divDesc">是否初始化请求远程数据, 当servise存在时, 该字段才起作用, 用于组件加载时初始化数据, 否则的话将在onSearch（模糊查询）时进行请求.</div>,
        defaultValue: 'false'
    },
    {
        property: 'autoValue',
        propType: 'string/number',
        required: false,
        description: <div className="strory-dt_easy_select_divDesc">初始化时请求远程数据的默认搜索数据, 当servise存在时, 该字段才起作用, 用于组件加载时初始化数据传参和清空当前选项时默认.</div>,
        defaultValue: '""'
    },
    {
        property: 'clearValueRequest',
        propType: 'boolean',
        required: false,
        description: <div className="strory-dt_easy_select_divDesc">清空当前选项是否执行请求(默认清空当前选项不进行服务端请求).</div>,
        defaultValue: 'false'
    }]
stories.add('EasySelect', () => (
    <div className='story_wrapper'>
        <h2>简述</h2>
        <p>{`参考之前业务所编辑业务组件, 主要用于表单中Select下拉框组件优化, 基于AntDesign的Select组件进行二次封装，继承AntDesign的Select组件api文档所有属性, 依据组件化思想将原<Select><Option>...</Option></Select>形式改为<EasySelect />的形式, 同时将异步请求数据和onSearch方法结合，简化代码。`}</p>
        <h2>示例</h2>
        <p className="strory-dt_easy_select_p">1、静态本地数据源(json格式，带本地模糊查询功能)</p>
        <EasySelect
            style={{ width: '100%' }}
            filterLocal
            dataSource={[{ value: 1, label: '张三' }, { value: 2, label: '李四' }]}
            onChange={(val: any, option: any) => { console.log(val, option) }}
        />
        <p className="strory-dt_easy_select_p">2、静态本地数据源(普通数组格式)</p>
        <EasySelect
            style={{ width: '100%' }}
            filterLocal
            dataSource={['文案1', 234]}
            onChange={(val: any, option: any) => { console.log(val, option) }}
        />
        <p className="strory-dt_easy_select_p">3、远程获取数据（自动请求, 带有默认请求字段）</p>
        <EasySelect
            auto
            style={{ width: '100%' }}
            servise={servise}
            clearValueRequest
            autoValue={'111'}
            onChange={(val: any, option: any) => { console.log(val, option) }}
        />
        <p className="strory-dt_easy_select_p">4、远程获取数据（自动请求, 带有默认请求字段,前端本地模糊查询）</p>
        <EasySelect
            auto
            style={{ width: '100%' }}
            filterLocal
            servise={servise}
            autoValue={'111'}
            onChange={(val: any, option: any) => { console.log(val, option) }}
        />
        <p className="strory-dt_easy_select_p">5、远程获取数据（非自动请求）</p>
        <EasySelect
            style={{ width: '100%' }}
            servise={servise}
            onChange={(val: any, option: any) => { console.log(val, option) }}
        />
    </div>
), {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            // 静态本地数据源(json格式, 附带本地模糊查询)
            <EasySelect
                showSearch
                filterLocal
                dataSource={[{ value: 1, label: '描述' }, { value: 2, label: '描述2' }]}
                onChange={(val: any, option: any) => { console.log(val, option) }}
            />
            ~~~
            ~~~js
            // 静态本地数据源(普通数组格式, 附带本地模糊查询)
            <EasySelect
                showSearch
                filterLocal
                dataSource={['文案1', 234]}
                onChange={(val: any, option: any) => { console.log(val, option) }}
            />
            ~~~
            ~~~js
            // 远程获取数据（自动请求, 带有默认请求字段。PS: 请求方法请自行引入，例如jsonp ）
            <EasySelect
                auto
                autoValue={'111'}
                clearValueRequest
                servise={(str: any) =>
                    jsonp('https://suggest.taobao.com/sug?code=utf-8&q="str"')
                        .then(response => response.json())
                        .then((res: any) => res.result.map((item: any[]) => ({
                            label: item[0],
                            value: item[1]
                    })))
                }
                onChange={(val: any, option: any) => { console.log(val, option) }}
            />
            ~~~
            ~~~js
            // 远程获取数据（非自动请求。PS: 请求方法请自行引入，例如jsonp）
            <EasySelect
                servise={(str: any) =>
                    jsonp('https://suggest.taobao.com/sug?code=utf-8&q="str"')
                        .then(response => response.json())
                        .then((res: any) => res.result.map((item: any[]) => ({
                            label: item[0],
                            value: item[1]
                    })))
                }
                onChange={(val: any, option: any) => { console.log(val, option) }}
            />
            ~~~
        `
    }
})
