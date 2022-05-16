import {Header} from '../components/Header';
import {CurrentPlaying} from '../components/CurrentPlaying';
import '../styles/home.scss';
import {Episodes, EpisodeCard} from '../components/Episodes';

type HomePropsType ={
    ChangeCurrentPlaying:Function;
    value1:string;
    value2:string;
    func1:Function;
    func2:Function;
}
export function Home(props:HomePropsType){
    if(props.value1==='noPlayingHide'){
        let buttons=document.querySelectorAll('button');
        buttons.forEach(function (element, index, array){
            element.disabled = false;
        });
    }
    
    return (
        <div id='home'>
            <main>
                <Header />
                <div id='lastReleases'>
                    <h1>Últimos lançamentos</h1>
                    <EpisodeCard ChangeCurrentPlaying={props.ChangeCurrentPlaying} value1={props.value1} value2={props.value2} func1={props.func1} func2={props.func2}/>
                </div>
                <div  id='episodeList'>
                    <h1>Todos os episódios</h1>
                    <div id='episodeParts'>
                        <p className='episodeName'>Podcast</p>
                        <p className='members'>Integrantes</p>
                        <p className='dateRelease'>Data</p>
                        <p className='duration'>Duração</p>
                    </div>
                    <Episodes ChangeCurrentPlaying={props.ChangeCurrentPlaying} value1={props.value1} value2={props.value2} func1={props.func1} func2={props.func2}/>
                </div>
            </main>
            <aside>
                <CurrentPlaying ChangeCurrentPlaying={props.ChangeCurrentPlaying} value1={props.value1} value2={props.value2} func1={props.func1} func2={props.func2} />
            </aside>
            
        </div>
    );
}