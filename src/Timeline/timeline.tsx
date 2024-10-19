import Post from "./post";
import ShowMoreButton from "./ShowMoreButton";
import TimelineHeader from "./timelineHeader";

export default function Timeline(){
    return (<div className="bg-black border-r ml-[16.4%] h-screen w-3/6 border-stone-900 flex flex-col align-top">
        <TimelineHeader/>
        <Post/>
        <ShowMoreButton number={20}/>
    </div>)
}