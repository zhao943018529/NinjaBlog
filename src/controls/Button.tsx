import React from 'react';

interface IButtonProps extends React.HTMLProps<HTMLDivElement> {

}

export function Button(props: IButtonProps) {
    return (<div>{props.children}</div>)
}