import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api'
import coronaImage from './images/covid19.png';

class App extends React.Component {

    state = {
        data : {},
        country : ''
    }

    handleCountryChange = async (country) =>{
        const countrySpecificData = await fetchData(country);
        this.setState({data : countrySpecificData, country : country});
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data : fetchedData});
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;