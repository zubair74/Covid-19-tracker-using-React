import React,{useEffect,useState} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';

import {fetchCountries} from '../api/api'


export const Picker = ({handleCountryChange}) =>{

  const [countries,setCountries] = useState([])

  useEffect(() =>{
const fetchcountries = async () =>{
  const countryList  = await fetchCountries()

  setCountries(countryList)

  



}

fetchcountries()

  })

  return(
<FormControl>
      <NativeSelect defaultValue="" onChange = {(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country,i) => <option key = {i} value = {country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )

}