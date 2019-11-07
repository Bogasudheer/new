import React from 'react';
import './App.css';
import axios from 'axios';
import Imgages from './ImgClass';

class App extends React.Component  {
    constructor(props){
        super(props);
        this.state = { input :'',
            images: [],
        image:[] };
    
    }
    handler = (event) => {
        this.setState({input:event.target.value})

    }

   data = async () => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: 'car'},
        headers: {
            Authorization: 'Client-ID bf496bec0e70db4778b89474e258af494c21db3f5620f171aed37260a9863252'
        }
    })
    
    this.setState({ image: response.data.results })
}


    onSearchSubmit = async () => {
   if(this.state.input === ""){
    //    alert("Please enter Search field");
   }
   else{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: { query: this.state.input},
                    headers: {
                        Authorization: 'Client-ID bf496bec0e70db4778b89474e258af494c21db3f5620f171aed37260a9863252'
                    }
                })
                
                this.setState({ images: response.data.results })
            }
        }
            render() {
                return (
                    <React.Fragment>
                        
                         Images Search Box : 
                         <form>
                          <input
                                className="inputStyle"
                                type="text"
                                value={this.state.input}
                                onChange={this.handler} 
                            /> 
                            
                            <button type="button" className="btn-search" onClick={this.onSearchSubmit}>Search</button>
                            </form>
                            {
                            <Imgages imgCLass={this.state.images}/>}
                            </React.Fragment>
                )
            }      
}
export default App;