import React, {Component} from 'react';

export default class GifList extends Component{


    render(){
        return( 
        <ul>
            {this.props.gifs.map(gif => {
                return <li key={gif.id}><img alt={gif.title} src={gif.images.original.url}></img></li>
            })}
        </ul>)
    }
}