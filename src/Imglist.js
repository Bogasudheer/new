
import React from 'react';
import axios from 'axios';
import Imgages from './ImgClass';
import SearchBar from './SearchBar';

class ImgClass extends React.Component  {
constructor(props){
    super(props);
    this.state = { images: [] };

}
    onSearchSubmit = async (e) => {
const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: e.target.value },
            headers: {
                Authorization: 'Client-ID bf496bec0e70db4778b89474e258af494c21db3f5620f171aed37260a9863252'
            }
        })
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div>
                Images Search Box : 
                <input
                        className="inputStyle"
                        type="text"
                        onChange={this.onSearchSubmit}
                    />
                    
                <Imgages imgCLass={this.state.images}/>
            </div>
        )
    }

}
export default ImgClass;