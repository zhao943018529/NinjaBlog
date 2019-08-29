import React from 'react';
import ReactDOM from 'react-dom';

import "./style/index.scss";
import { BrandFontIcon } from './controls/FontIcon';

interface IAppProps {
    Name: string;
}

class App extends React.Component<IAppProps, {}>{

    constructor(props: IAppProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello, {this.props.Name}
                <a href="/zcc">zcc</a>
                <BrandFontIcon iconName="zhihu" />
            </div>
        );
    }
}

ReactDOM.render(<App Name="chengcheng" />, document.getElementById('root'));