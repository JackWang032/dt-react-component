import React from 'react';
import { Empty as AntdEmpty, EmptyProps } from 'antd';
import './style.scss';

export const IMG_MAP = {
    default: 'empty_default.webp',
    project: 'empty_project.webp',
    search: 'empty_search.webp',
    chart: 'empty_chart.webp',
    overview: 'empty_overview.webp',
    permission: 'empty_permission.webp',
};

interface IProps {
    type?: 'default' | 'search' | 'chart' | 'project' | 'overview' | 'permission';
    height?: number;
}

const Empty = (props: EmptyProps & IProps) => {
    const { type = 'default', height = 80, image, imageStyle, ...restProps } = props;
    let newImage: React.ReactNode = IMG_MAP[type] ? (
        <img src={require('./emptyImg/' + IMG_MAP[type])}></img>
    ) : null;
    if (image) newImage = image as React.ReactNode;
    const newImageStyle = imageStyle ? { height, ...imageStyle } : { height };
    return (
        <div className="dtc-empty">
            <AntdEmpty {...restProps} image={newImage} imageStyle={newImageStyle} />
        </div>
    );
};

export default Empty;
