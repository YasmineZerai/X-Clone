type TimelineHeaderComponentProps = {
    text: string
}

export default function TimelineHeaderComponent({text} :TimelineHeaderComponentProps){
    return(
        <div className="text-center text-white border-b border-stone-900 w-1/2 h-12 pt-2 hover:bg-stone-900 font-bold">{text}</div>
   )
}