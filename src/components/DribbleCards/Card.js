import React from 'react'
import { useHistory } from "react-router-dom";

export default function Card({ id,title, backgroundClass, langs }) {
    let history = useHistory();
    return (
        <div onClick={() => history.push('/work/' + id)} className="col s12 m6 l4" style={{ /*width: 350,*/ padding: 20, marginLeft: 0}}  >
            <div className="shadow work-card" style={{ position: 'relative',backgroundColor: '#fff',  width: '100%', borderRadius:5, overflow: 'hidden'}}>
                <div style={{padding: 10, textAlign: 'left', paddingLeft: 22}}>
                    <span className="text-font" style={{fontSize: 19, fontWeight: '0000000000000000000000000000000'}}>{title}</span>
                </div>
                <div style={{overflow: 'hidden'}}>
                    <div style={{height: 222, marginBottom: 0}} className={"default-image "+ backgroundClass}>
                        <div style={{backgroundColor: '#00000038', width: '100%', height: '100%'}}>
                        </div>
                    </div>
                </div>
                <div style={{paddingLeft: 15, paddingBottom: 10, paddingTop: 10}}>
                    <div style={{  display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingRight: 15}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%',display: 'none'}}>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div className="shadow" style={{borderRadius: 200, width: 28, height: 28, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                                    <i className="material-icons" style={{fontSize : '1.1rem', color: '#09375c',}}>person</i>
                                </div>
                                <div style={{paddingLeft: 5}}>
                                    <span style={{fontSize: '0.7rem', fontWeight: 600}}>UnderAcid</span>
                                </div>
                            </div>
                            <div style={{marginLeft: -30, paddingTop: 5}}>
                                <div style={{padding:4, borderRadius:0, borderLeft: '1px solid #fff', fontSize: 11, fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:6}}> 
                                    <i className="material-icons" style={{fontSize : '0.9rem', color: '#09375c', paddingRight: 2}}>visibility</i> 21121
                                </div>
                            </div>
                        </div>
                        <div>
                            {langs.map((lang )=> (
                                <span className={lang +'-tag'} key={lang} style={{padding:4, borderRadius: 5, border: '1px solid gray', fontSize: 9, fontWeight: 700, color: 'brown', marginRight: 5}}> {lang.toUpperCase()}</span>
                            ))}
                           {/* <span style={{padding:4, borderRadius: 5, border: '1px solid gray', fontSize: 9, fontWeight: 700, marginLeft: 5, color: '#ff47c3'}}> CSS</span>
                            <span style={{padding:4, borderRadius: 5, border: '1px solid gray', fontSize: 9, fontWeight: 700, marginLeft: 5, color: '#d49036'}}> JS</span>
                            <span style={{padding:4, borderRadius: 5, border: '1px solid gray', fontSize: 9, fontWeight: 700, marginLeft: 5, color: '#1ee4fd'}}> REACT</span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
