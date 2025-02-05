import React from "react";
import './_main.css';


import PlayList1 from '../../assets/playlist/1.jpeg';
import PlayList2 from '../../assets/playlist/2.png';
import PlayList3 from '../../assets/playlist/3.jpeg';
import PlayList4 from '../../assets/playlist/4.jpeg';
import PlayList5 from '../../assets/playlist/5.jpeg';
import PlayList6 from '../../assets/playlist/6.jpeg';
import PlayList7 from '../../assets/playlist/7.jpeg';
import PlayList8 from '../../assets/playlist/8.jpeg';
import PlayList9 from '../../assets/playlist/9.jpeg';
import PlayList10 from '../../assets/playlist/10.jpeg';
import PlayList11 from '../../assets/playlist/11.jpeg';
import PlayList12 from '../../assets/playlist/12.jpeg';
import PlayList13 from '../../assets/playlist/13.jpeg';
import PlayList14 from '../../assets/playlist/14.jpeg';
import PlayList15 from '../../assets/playlist/15.jpeg';

const Main = () =>{
    return(            
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>

                    
                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src= {PlayList1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>

                               
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src={PlayList2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src= {PlayList3}alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src= {PlayList4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>

                               
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src={PlayList5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src={PlayList6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src={PlayList7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src={PlayList8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src={PlayList9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src={PlayList10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src={PlayList11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src={PlayList12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>

                               
                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <img src={PlayList13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>

                                
                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <img src={PlayList14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>

                               
                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <img src={PlayList15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img id="artist-img" className="artist-img" />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <a title="Foo Fighters" className="vst" href="">
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
    )
};

export default Main;