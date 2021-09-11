import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetData } from '../../Redux/Reducer/Action/QuanLyNhacAction';
import { ThemeProvider } from 'styled-components';
import { AppMusicDarkTheme } from '../DemoTheme/AppMusicDarkTheme';
import { AppMusicWrap } from '../Container/AppMusicWrap';
import { AppMusicItem } from '../Container/AppMusicItem';
import { AppMusicLightTheme } from '../DemoTheme/AppMusicLightTheme';
import { ButtonCategory, ButtonControl, ButtonTheme, ButtonThemeSmall } from '../Component/Button';
import { OverlayMusicItem } from '../Container/OverlayMusicItem';
import { AppMusicControl } from '../Container/AppMusicControl';
import { ListMusicWrap } from '../Container/ListMusicWrap';
import { InputRange } from '../Component/Input';
import { LinkDownloadMusic } from '../Component/A';
import { ListMusicItem } from '../Container/ListMusicItem';
import { ListMusicList } from '../Container/ListMusicList';
import { ButtonOption } from '../Component/Button';
import { MusicControlVolume } from '../Container/MusicControlVolume';

export default function AppMusic(props) {

    const [state, setState] = useState(true); //True là dark , false là light

    const [play, setPlay] = useState(false); //True là play music, false là pause music

    const [audio, setAudio] = useState(new Audio()) //Audio chính của trang web

    const [theme, setTheme] = useState(AppMusicDarkTheme); //Set theme cho app

    const [musicList, setMusicList] = useState(false); //True là hiện, false là đóng

    const [progress, setProgress] = useState(0);    //Tiến trình của bài hát

    const [volume, setVolume] = useState(1);    //Âm thanh

    const [muted, setMuted] = useState(false);

    const [category, setCategory] = useState({
        name: 'Nhạc Trẻ',
    });

    let [random, setRandom] = useState(false); //False là chưa random

    let [index, setIndex] = useState(-1); //Set vị trí khi người dùng nhấn vào nút nhạc kế tiếp, trở lại

    let [repeate, setRepeate] = useState(false); //False là chưa repeate 

    let [listMusicRecently, setListMusicRecently] = useState([]);

    const [infoMusic, setInfoMusic] = useState({
        avatar: 'https://i1.sndcdn.com/artworks-000515448786-rucnnb-t500x500.jpg',
        title: 'Nắng ấm xa dần Lofi',
        music: '/mp3/NangAmXaDanLofi.mp3'
    })

    let [test, setTest] = useState(0);

    const dispatch = useDispatch();

    //Sau khi render => call api
    useEffect(() => {
        const action = GetData();
        dispatch(action);
    }, [])

    //Hoạt ảnh 
    // var heartImg = document.createElement("img");
    // heartImg.src = '/img/heartsgif.gif';
    // heartImg.style.zIndex = '100';
    // heartImg.style.position = 'fixed';
    // heartImg.style.top = '0';
    // heartImg.style.left = '0';
    // heartImg.style.width = '100%';
    // setInterval(()=> {
    //     document.body.appendChild(heartImg);
    //     setTimeout(() => {
    //         document.body.removeChild(heartImg);
    //     }, 2000);
    // }, 7000);

    //Cập nhật khi thay đổi state (dark - light theme)
    useEffect(()=> {
        console.log(state);
        if (state) {
            setTheme(AppMusicDarkTheme);
            document.querySelector('#dark-mode').style.display = 'block';
            document.querySelector('#light-mode').style.display = 'none';
        } else {
            setTheme(AppMusicLightTheme);
            document.querySelector('#dark-mode').style.display = 'none';
            document.querySelector('#light-mode').style.display = 'block';
        }
    }, [state]);

    //Cập nhật lại bài hát khi chọn bài hát khác
    useEffect(() => {
        audio.src = `${infoMusic.music}`;
        setListMusicRecently(oldList => [...oldList, infoMusic]);
        if (play) {
            audio.play();
        }
        else {
            audio.pause();
        }
    }, [infoMusic])

    //Cập nhật khi thay đổi index 
    useEffect(()=> {
        if(index>=0) {
            setInfoMusic({
                avatar: `${listMusic[index].avatar}`,
                title: `${listMusic[index].title}`,
                music: `${listMusic[index].music}`
            })
        }
    }, [index]);

    //Cập nhật các thứ ... sau khi state play được thay đổi
    useEffect(() => {
        const playBtn = document.querySelector('#playBtn');
        if (play) {
            audio.play();
            playBtn.querySelector('i.far').classList.remove('fa-play-circle');
            playBtn.querySelector('i.far').classList.add('fa-pause-circle');
        }
        else {
            playBtn.querySelector('i.far').classList.add('fa-play-circle');
            playBtn.querySelector('i.far').classList.remove('fa-pause-circle');
            audio.pause();
        }
    }, [play])

    //Cập nhật khi có state repeate thay đổi
    useEffect(()=> {
        document.querySelector('#repeateBtn').classList.toggle('active', repeate);
        console.log('repeate',repeate)
    }, [repeate]);

    //Cập nhật khi có state random thay đổi
    useEffect(()=> {
        console.log('random',random);
        document.querySelector('#randomBtn').classList.toggle('active',random);
    }, [random])

    //Cập nhật khi có state listMusicRecently thay đổi
    useEffect(()=> {
        if(listMusicRecently.length > 1) {
            if(musicRecently != null) {
                if(musicRecently.findIndex(music => music.title === infoMusic.title) == -1) {
                    // let listSong = listMusicRecently.concat(musicRecently);
                    musicRecently.push(infoMusic);
                    localStorage.setItem('musicRecently', JSON.stringify(musicRecently));
                    console.log(listMusicRecently)
                }else {
                    return;
                }
            }
            else {
                localStorage.setItem('musicRecently', JSON.stringify(listMusicRecently));
                console.log(listMusicRecently)
            }
        }
        else {
            return;
        }
    }, [listMusicRecently]);

    //Cập nhập lại âm thanh khi state muted thay đổi
    useEffect(()=> {
        if(muted) {
            setVolume(0);
            audio.volume = 0;
        }
        else {
            setVolume(0.5);
            audio.volume = 0.5;
        }
    }, [muted]);

    const slider = document.querySelector('#progress');

    const volumeMusic = document.querySelector('#volumeMusic');

    const { arrSong } = useSelector(state=>state.QuanLyNhacReducer);

    const { arrSongVN } = useSelector(state => state.QuanLyNhacReducer);

    const { listMusic } = useSelector(state => state.QuanLyNhacReducer);

    const musicRecently = JSON.parse(localStorage.getItem('musicRecently'));

    //Xử lý thời gian khi bài hát chạy
    audio.ontimeupdate = function() {
        if(audio.duration) {
            const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
            setProgress(progressPercent);

            slider.addEventListener("mousemove", function(){
                var x = progress;
                var color = `linear-gradient(90deg, ${theme.colorSecondary} ${x}%, rgb(214,214,214) ${x}%)`;
                slider.style.background = color;
            })

            var x = progress;
            var color = `linear-gradient(90deg, ${theme.colorSecondary} ${x + 1}%, rgb(214,214,214) ${x + 1}%)`;
            slider.style.background = color;
        }
    }

    //Khi chỉnh volume
    audio.onvolumechange = function() {
        volumeMusic.addEventListener("mousemove", function(){
            var x = volume * 100;
            var color = `linear-gradient(90deg, ${theme.colorSecondary} ${x}%, rgb(214,214,214) ${x}%)`;
            volumeMusic.style.background = color;
        })

        var x = volume * 100;
        var color = `linear-gradient(90deg, ${theme.colorSecondary} ${x}%, rgb(214,214,214) ${x}%)`;
        volumeMusic.style.background = color;
    }

    //Xử lý khi bài hát kết thúc
    audio.onended = () => {
        if(random) {
            if(listMusic.length > 0 ) {
                if(listMusic.length == 1) {
                    audio.src = `${listMusic[0].music}`;
                    setInfoMusic({
                        avatar: `${listMusic[0].avatar}`,
                        title: `${listMusic[0].title}`,
                        music: `${listMusic[0].music}`
                    })
                }
                else {
                    const lengthListMusic = listMusic.length;
                    const randomIndex = Math.floor(Math.random() * lengthListMusic);
                    setIndex(randomIndex);        
                    setInfoMusic({
                        avatar: `${listMusic[randomIndex].avatar}`,
                        title: `${listMusic[randomIndex].title}`,
                        music: `${listMusic[randomIndex].music}`
                    })
                }
            }
        }
        else if(repeate) {
            if(listMusic.findIndex(music => music.music == infoMusic.music) != -1) {
                audio.src = `${listMusic[index].music}`;
            }
            else {
                audio.src = `${infoMusic.music}`;
            }
            audio.play();
        }
        else {
            if(listMusic.length > 0 ) {
                if(listMusic.length == 1) {
                    audio.src = `${listMusic[index].music}`;
                    setInfoMusic({
                        avatar: `${listMusic[index].avatar}`,
                        title: `${listMusic[index].title}`,
                        music: `${listMusic[index].music}`
                    })
                }
                else {
                    setIndex(index+=1);
                    setInfoMusic({
                        avatar: `${listMusic[index].avatar}`,
                        title: `${listMusic[index].title}`,
                        music: `${listMusic[index].music}`
                    })
                }
            }
        }
    }

    //Render các thể loại nhạc VN
    const renderNhacVN = () => {
        return arrSongVN.map((item, index) => {
            return <div className="col-4 col-md-2" key={index}>
                <ButtonCategory onClick={()=> {
                    setCategory({
                        name: `${item.name}`
                    })
                }}>
                    <span>{item.name}</span>
                </ButtonCategory>
            </div>
        })
    }

    //Render danh sách nhạc thuộc thể loại nhạc trẻ
    const renderListMusic = () => {
        for (let item of arrSongVN) {
            if(item.name == category.name) {
                return item.songs.map((nhac, index) => {
                    return <div className="row d-flex align-items-center my-2 music__item" style={{ position: 'relative' }} key={index}>
                        <div className="col-2">
                            <span>{Number(index) + 1}</span>
                        </div>
                        <div className="col-10 d-flex justify-content-start align-items-center">
                            <img src={nhac.avatar} style={{ width: '40px', height: '40px', borderRadius: '5px', marginRight: '15px' }} />
                            <span>{nhac.title}</span>
                        </div>
                        <OverlayMusicItem className="overlayMusic">
                            <div className="row h-100 m-0">
                                <div className="col-2 d-flex align-items-center justify-content-end">
                                    <button id={`btn-${index}`} style={{ border: 'none', backgroundColor: 'transparent', outline: 'none', cursor: 'pointer' }} onClick={() => {
                                        let btnCheck = document.querySelector(`#btn-${index}`);
                                        if (listMusic.findIndex(nhacItem => nhacItem === nhac) != -1) {
                                            btnCheck.querySelector('i.far').classList.add('fa-square');
                                            btnCheck.querySelector('i.far').classList.remove('fa-check-square');
                                            const action = {
                                                type: 'REMOVE_LIST',
                                                payload: nhac,
                                            }
                                            dispatch(action);
                                        }
                                        else {
                                            btnCheck.querySelector('i.far').classList.remove('fa-square');
                                            btnCheck.querySelector('i.far').classList.add('fa-check-square');
                                            const action = {
                                                type: 'ADD_LIST',
                                                payload: nhac
                                            }
                                            dispatch(action);
                                        }
                                    }}>
                                        <i className="far fa-square" style={{ color: 'white' }}></i>
                                    </button>
                                </div>
                                <div className="col-10  d-flex align-items-center justify-content-center">
                                    <button style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }} onClick={() => {
                                        setInfoMusic({
                                            avatar: `${nhac.avatar}`,
                                            title: `${nhac.title}`,
                                            music: `${nhac.music}`
                                        });
                                        setPlay(true);
                                        audio.play()
                                        console.log(play);
                                    }}>
                                        <i className="fas fa-play" style={{ color: 'white', fontSize: '1.2rem', cursor: 'pointer' }} id="play"></i>
                                    </button>
                                </div>
                            </div>
                        </OverlayMusicItem>
                    </div>
                })
            }
        }
    }

    //Render danh sách nhạc được chọn
    const renderListMusicControl = () => {
        return listMusic.map((item, vitri) => {
            return <ListMusicItem className={`row d-flex align-items-center my-2 mx-0 song ${vitri === index ? 'active' : ''}`} style={{ position: 'relative' }} key={vitri}>
                <div className="col-2">
                    <span>{Number(vitri) + 1}</span>
                </div>
                <div className="col-10 d-flex justify-content-between align-items-center">
                    <img src={item.avatar} style={{ width: '30px', height: '30px', borderRadius: '5px', marginRight: '15px' }} />
                    <div style={{textAlign: 'left'}}>{item.title}</div>
                    <LinkDownloadMusic href={`${item.music}`} style={{color: 'white'}}>
                        <i class="fas fa-download"></i>
                    </LinkDownloadMusic>
                </div>
            </ListMusicItem>
        })
    }

    //Render danh sách phát gần đây
    const renderListMusicRecently = () => {
        console.log('listMusicRecently',listMusicRecently.length)
        if(musicRecently) {
            if(musicRecently.length > 0) {
                return musicRecently.map((item, vitri) => {
                    return <ListMusicItem className={`row d-flex align-items-center my-2 mx-0 song ${vitri === index ? 'active' : ''}`} style={{ position: 'relative' }} key={vitri}>
                        <div className="col-2">
                            <span>{Number(vitri) + 1}</span>
                        </div>
                        <div className="col-10 d-flex justify-content-between align-items-center">
                            <img src={item.avatar} style={{ width: '30px', height: '30px', borderRadius: '5px', marginRight: '15px' }} />
                            <div style={{textAlign: 'left'}}>{item.title}</div>
                            <LinkDownloadMusic href={`${item.music}`} style={{color: 'white'}}>
                                <i class="fas fa-download"></i>
                            </LinkDownloadMusic>
                        </div>
                    </ListMusicItem>
                })
            }
        }
        else {
            return;
        }
    }

    return (
    <ThemeProvider theme={theme}>
        <AppMusicWrap>
            <div className="container text-center">
                <h1>Anh yêu bé Trâm Anh</h1>
                <ButtonTheme onClick={() => {
                    setState(!state);
                }}>
                    <i className="fas fa-sun animate__animated animate__wobble" id="dark-mode"></i>
                    <i className="far fa-moon animate__animated animate__wobble"style={{ display: 'none' }} id="light-mode"></i>
                </ButtonTheme>
                <div className="row catergory">
                    {renderNhacVN()}
                </div>
                <div className="row content my-5">
                    <div className="col-12 col-md-6 content__info">
                        <img src={infoMusic.avatar} style={{ width: '200px', height: '200px', borderRadius: '10%', filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.5))' }} />
                        <div className="d-flex flex-column align-items-center" style={{ margin: '20px 0' }}>
                            <span style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{infoMusic.title}</span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 content__music-list">
                        {renderListMusic()}
                    </div>
                </div>
            </div>
        </AppMusicWrap>
        <AppMusicControl>
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-2 col-md-2 d-flex align-items-center justify-content-start">
                        <ButtonTheme  style={{ border: 'none' }} onClick={() => {
                            setMusicList(!musicList);
                            if (musicList) {
                                document.querySelector('#listMusicWrap').style.display = 'block';
                                document.querySelector('#musicControl-btn').style.color = `${theme.colorSecondary}`;
                            } else {
                                document.querySelector('#musicControl-btn').style.color = '#fff';
                                document.querySelector('#listMusicWrap').style.display = 'none';
                            }
                        }}>
                            <i className="fas fa-list-ul" id="musicControl-btn" style={{ fontSize: '1.3rem', transition: 'all 0.2s'}}></i>
                        </ButtonTheme>
                    </div>
                    <div className="col-8 col-md-8 d-flex flex-column align-items-center">
                        <div className="d-flex align-items-center justify-content-center">
                            <ButtonControl id="randomBtn" onClick={()=> {
                                setRandom(!random);
                                setRepeate(false);
                            }}>
                                <i className="fas fa-random"></i>
                            </ButtonControl>
                            <ButtonControl onClick={()=> {
                                if(listMusic.length <= 0) {
                                    alert('Chưa chọn danh sách nhạc');
                                }
                                else {
                                    if(index === 0) {
                                        setIndex(listMusic.length);
                                        // setInfoMusic({
                                        //     avatar: `${listMusic[0].avatar}`,
                                        //     title: `${listMusic[0].title}`,
                                        //     music: `${listMusic[0].music}`
                                        // })
                                    }else {
                                        setIndex(index-=1);
                                        // setInfoMusic({
                                        //     avatar: `${listMusic[index].avatar}`,
                                        //     title: `${listMusic[index].title}`,
                                        //     music: `${listMusic[index].music}`
                                        // })
                                    }
                                }
                            }}>
                                <i className="fas fa-angle-double-left"></i>
                            </ButtonControl>
                            <ButtonControl className="playBtn" id="playBtn" onClick={()=> {
                                // audio.play();
                                setPlay(!play);
                                document.querySelector('#playBtn').classList.toggle('active',!play);
                                console.log('btn', play);
                            }}>
                                <i className="far fa-play-circle" style={{fontSize: '2.5rem'}}></i>
                            </ButtonControl>
                            <ButtonControl onClick={()=> {
                                if(listMusic.length <= 0) {
                                    alert('Chưa chọn danh sách nhạc');
                                }
                                else {
                                    if(index === listMusic.length-1) {
                                        setIndex(0);
                                        // setInfoMusic({
                                        //     avatar: `${listMusic[0].avatar}`,
                                        //     title: `${listMusic[0].title}`,
                                        //     music: `${listMusic[0].music}`
                                        // })
                                    }else {
                                        setIndex(index+=1);
                                        // setInfoMusic({
                                        //     avatar: `${listMusic[index].avatar}`,
                                        //     title: `${listMusic[index].title}`,
                                        //     music: `${listMusic[index].music}`
                                        // })
                                    }
                                }
                            }}>
                                <i className="fas fa-angle-double-right"></i>
                            </ButtonControl>
                            <ButtonControl id="repeateBtn" onClick={()=> {
                                setRandom(false);
                                setRepeate(!repeate);
                            }}>
                                <i className="fas fa-undo-alt"></i>
                            </ButtonControl>
                        </div>
                        <div>
                            {/* <span style={{color: 'white'}} id="currentTime">00:00</span> */}
                            <InputRange id="progress" type="range" step="1" min="0" max="100" value={`${progress}`} onChange={(event)=> {
                                let seekTime = (audio.duration/ 100 * event.target.value);
                                setProgress(event.target.value);
                                console.log(audio.duration/ 100 * event.target.value);
                                audio.currentTime = seekTime;
                            }} style={{width: '250px', margin: '20px'}}/>
                            {/* <span style={{color: 'white'}} id="currentTime">{audio.duration}</span> */}
                        </div>
                    </div>
                    <MusicControlVolume className="col-2 col-md-2" id="mutedBtn">
                        <ButtonControl id="volumeMuted-btn" onClick={()=> {
                            // setVolume(0);
                            // audio.volume = 0;
                            setMuted(!muted);
                            document.querySelector('#mutedBtn').classList.toggle('active',muted);
                        }}>
                            <i className="fas fa-volume-mute"></i>
                        </ButtonControl>
                        <InputRange id="volumeMusic" type="range" value={`${volume}`} step="0.1" min="0" max="1" style={{width: '100px', height: '5px', padding: '2px'}} 
                        onChange={(event)=> {
                                let seekTime = (event.target.value);
                                setVolume(event.target.value);
                                audio.volume = seekTime;
                            }}/>
                        <ButtonControl id="volumeUp-btn">
                            <i className="fas fa-volume-up"></i>
                        </ButtonControl>
                    </MusicControlVolume>
                </div>
            </div>
            <ListMusicWrap className="animate__animated animate__bounceInLeft" id="listMusicWrap">
                <div>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div style={{width: 'auto', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '15px'}}>
                            <ButtonOption id="listMusic__list-btn" onClick={()=> {
                                document.querySelector('#listMusic__recently').style.display = 'none';
                                document.querySelector('#listMusic__list').style.display = 'block';
                                document.querySelector('#listMusic__list-btn').style.backgroundColor = 'rgba(255,255,255,0.5)';
                                document.querySelector('#listMusic__recently-btn').style.backgroundColor = 'transparent';
                            }}>Danh Sách Phát</ButtonOption>
                            <ButtonOption id="listMusic__recently-btn" onClick={()=> {
                                document.querySelector('#listMusic__recently').style.display = 'block';
                                document.querySelector('#listMusic__list').style.display = 'none';
                                document.querySelector('#listMusic__recently-btn').style.backgroundColor = 'rgba(255,255,255,0.5)';                                    
                                document.querySelector('#listMusic__list-btn').style.backgroundColor = 'transparent';
                            }}>Nghe gần đây</ButtonOption>
                        </div>
                    </div>
                    <ListMusicList className="listMusic__list container-fluid" id="listMusic__list" style={{padding: '7px'}}>
                        {renderListMusicControl()}
                    </ListMusicList>
                    <ListMusicList className="" id="listMusic__recently" style={{display: 'none'}}>
                        {renderListMusicRecently()}
                    </ListMusicList>
                </div>
            </ListMusicWrap>
        </AppMusicControl>
    </ThemeProvider>
    )
}
