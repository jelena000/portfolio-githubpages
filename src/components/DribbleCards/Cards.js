import React, { Component } from 'react'
import Card from './Card'
import 'swiper/swiper.scss';
export default class Cards extends Component {

    constructor(props){
        super(props);

        this.state = {
            selected: 1
        }
    }

    openChallenge = (id) => {
        this.props.history.push("/Challenge");
    }

    renderSkills(){

        return (
            <div className="row center" style={{ display: 'flex', justifyContent: 'center', position: 'relative'}}>
                <div className="col" style={{width: 400, paddingTop: 100,}}>
                    <div style={{ height: 50, backgroundColor: '#fff',display: 'flex', justifyContent: 'center', alignItems: 'center',  borderTopLeftRadius: 15,borderTopRightRadius: 15 }}>
                        <span className="text-font" style={{color: '#534d72'}}>Languages</span>
                    </div>
                    <div style={{ height: 300, border: '1px solid #fff'}}>
                        <div style={{width :'100%', height :'100%', backgroundColor: '#7f7f7f3b',textAlign: 'left'}}>
                            <div style={{padding: 20, paddingBottom: 0}}>
                                <span className="text-font" style={{fontSize: 16, color: '#534d72', }}>Basic Knowledge(Syntax, Data Structures, OOP)</span>
                            </div>
                            <div style={{paddingTop: 10, paddingLeft: 30}}>
                                <span className="text-font" style={{fontSize: 14, color: '#fff', }}>Java, C, C++, C#,PHP, MySql, MongoDB</span>

                            </div>
                            <div style={{padding: 20, paddingBottom: 0}}>
                                <span className="text-font" style={{fontSize: 16, color: '#534d72', }}>Deeper Knowledge</span>
                            </div>
                            <div style={{paddingTop: 10, paddingLeft: 30}}>
                                <span className="text-font" style={{fontSize: 14, color: '#fff', }}>Javascript, HTML, CSS, MySql</span>
                            </div>
                            <div style={{padding: 20, paddingBottom: 0}}>
                                <span className="text-font" style={{fontSize: 16, color: '#534d72', }}>Favorite to work on</span>
                            </div>
                            <div style={{paddingTop: 10, paddingLeft: 30}}>
                                <span className="text-font" style={{fontSize: 14, color: '#fff', }}>React - javascript framework</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position: 'absolute', top: 200, left: -200, opacity: 0.6}}>
                </div>
            </div>
        )
    }

    render() {
        const { selected } = this.state;
        
        return (
            <div className="row " style={{  marginTop: 10, justifyContent: 'center', width: '80%'}}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} className="row">
               
                <div onClick={() => { this.setState({ selected : 1})}} className="button shadow" style={{ width: 200 , height: 40, backgroundColor: '#ff63cc', fontSize: selected === 1 ? 18 : 15,paddingTop: selected===1 ? 8 : 10, textAlign: 'center', margin: 9, borderRadius: 90, backgroundColor: selected === 1 ? "#fff" : ""}}>
                    <span style={{color: '#e10bb9', fontWeight: 500}}>Work</span>
                </div>
                <div onClick={() => { this.setState({ selected : 0})}} className="button shadow" style={{ width: 200 , height: 40, fontSize: selected===0 ? 18 : 15,paddingTop: selected===0 ? 8 : 10, textAlign: 'center', margin: 9, borderRadius: 90, backgroundColor: selected === 0 ? "#fff" : ""}}>
                    <span style={{color: '#82a7cd', fontWeight: 500}}>Skills</span>
                </div>
              </div>
              {this.state.selected === 1 ? <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: 100, justifyContent: 'flex-start'}} className="row">
                {this.props.data.map(ch => (
                    <Card {...ch} key={ch.id}/>
                ))}
                
              </div> 
              :
              this.renderSkills()
              }
            </div>
        )
    }
}
