import React, { Component } from 'react'
import './header.css';
import instagram from '../../assets/instagram.svg'

export default class Header extends Component {

    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <header className="" style={{top: 0}}>
                <nav className="nav-wrapper  navbar-transition cool-navbar z-depth-0" style={{height : 100, backgroundColor: '#fff', transition: '0.3s'}}>
                    <div className="container" style={{maxWidth : '100%', width: '100% !important'}}>
                        <div className="">
                            <a className="sidenav-trigger" data-target="slide-out" >
                                <i className="material-icons blue-text" >menu</i>
                            </a> 
                        </div>
                        <div className="nav-wrapper row " style={{justifyContent: 'center'}}>
                            <div className="col s3 centered-container " style={{ marginLeft : 0, marginTop : 0}}>
                                 <a href="javascript:void(0)" className="brand-logo header-font" >
                                    <span style={{fontSize: 30, fontWeight: 'bold', color:'black'}}>
                                        JeLena
                                    </span>
                                </a>
                            </div>
                            <div className=" hide-on-med-and-down col s9 right-container" style={{height: '100%', marginRight : 10, position: 'absolute', right: 0}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div  style={{ cursor: 'pointer',border: '1px solid black', padding: 5, borderRadius: 112, width: 26, height: 26, marginRight: 5}}>
                                        <div className="facebook-image" style={{ width: 12, height: 17}}>
                                        </div>
                                    </div>
                                    <div  style={{ cursor: 'pointer',border: '1px solid black',justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 112, width: 26, height: 26, marginRight: 5, display: 'flex'}}>
                                        <img src={instagram} style={{width: 10}}/>
                                    </div>
                                    <div  style={{ cursor: 'pointer',border: '1px solid black', padding: 5, borderRadius: 112, width: 26, height: 26, marginRight: 5}}>
                                        <div className="facebook-image" style={{ width: 12, height: 17}}>
                                        </div>
                                    </div>
                                    <div  style={{ cursor: 'pointer',border: '1px solid black',justifyContent: 'center', alignItems: 'center', padding: 5, borderRadius: 112, width: 26, height: 26, marginRight: 5, display: 'flex'}}>
                                        <img src={instagram} style={{width: 10}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
