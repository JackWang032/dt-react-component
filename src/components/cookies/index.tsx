import React from 'react';

export interface Fields {
    key?: string;
    value?: string;
}
export interface CookiesProps {
    watchFields?: string[];
    onChanged?: (old: string, newCookie: string) => void;
    onFieldsChanged?: (fields: Fields[]) => void;
    children?: React.ReactNode;
}
/**
 * Cookies 组件
 * 用法：
 * <Cookies onChanged={callback}></Cookies>
 */
const defaultIntervalTime = 200;
class Cookies extends React.Component<CookiesProps, any> {
    _currentCookies: string;
    private _timerId: NodeJS.Timer | null = null;

    componentDidMount() {
        this.initEvent();
    }
    componentWillUnmount() {
        clearInterval(this._timerId);
    }

    compareValue = () => {
        const { onChanged } = this.props;
        const old = '' + this._currentCookies;
        const newCookies = document.cookie;
        if (old !== newCookies) {
            if (onChanged) onChanged(old, newCookies);
            this._currentCookies = newCookies;
            this.onFieldsChange(old, newCookies);
        }
    };

    onFieldsChange = (old: string, newCookies: string) => {
        const { watchFields, onFieldsChanged } = this.props;
        if (watchFields) {
            const changedFields: Fields[] = [];
            for (let i = 0; i < watchFields.length; i++) {
                const key = watchFields[i];
                const originValue = this.getCookieValue(old, key);
                const newValue = this.getCookieValue(newCookies, key);
                if (originValue !== null && originValue !== newValue) {
                    changedFields.push({ key, value: newValue });
                }
            }
            if (onFieldsChanged) {
                onFieldsChanged(changedFields);
            }
        }
    };

    // 根据 Cookies获取 name
    getCookieValue = (cookies: string, name: string) => {
        if (cookies) {
            const arr = cookies.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
            if (arr != null) return decodeURI(arr[2]);
        }
        return null;
    };

    initEvent = () => {
        this._timerId = setInterval(() => {
            this.compareValue();
        }, defaultIntervalTime);
    };

    render() {
        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}

export default Cookies;
