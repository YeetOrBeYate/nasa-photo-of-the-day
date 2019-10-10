import React,{useState,useEffect} from "react";
import axios from "axios";
import {MakeCard} from "../components/nasaCard";
import {Kyle} from "../data/data";
import { Spinner } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {CardHolder,MenuHolder} from "../components/styledCom";


export default function CreateCard(){
    
    const today = new Date().toISOString().slice(0, 10);
    const [year, setYear] = useState(today);
    const [nasa, setNasa] = useState(null);
    useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=qCaZmTCH37IJ3zg81sTyn4PMYoKJIcCG44BmqmVj&date=${year}`)
    .then((res)=>{
        
        setNasa(res.data);
        // console.log(nasa)
    })
    },[year]);

    if(!nasa){
        return(
            <div>
                <Spinner color = "info" />
            </div>
        );
    }

    function addSelect(){
        if(!(document.querySelector('.select').classList.contains('hasValue'))){

            Kyle.forEach((k)=>{
                let holder = document.createElement("option");
                holder.innerText = k;
                document.querySelector('.select').appendChild(holder);
                });
                
        }
        document.querySelector('.select').classList.toggle('hasValue');
        console.log("toggling");
    }
    

    return(
        
        <div>
            <Row>
                <Col sm={{size:6,order:2,offset:3}}>
                    <label className = "text-warning">Please select year:</label>
                    <select className = "select">
                    {setTimeout(addSelect,1000)}
                    </select>
                    <Button color="warning" onClick = {()=>setYear(document.querySelector('.select').value)}>Submit!</Button>
                </Col>
            </Row>
             <CardHolder>
                <MakeCard img = {nasa.hdurl} copyright = {nasa.copyright} explanation = {nasa.explanation} title = {nasa.title} date = {nasa.date}/>
            </CardHolder>
            <Row>

            </Row>
        </div>
    );
}