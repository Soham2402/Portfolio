
import React , {useRef} from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TImelineItem';

function Timeline() {

   const scrollRef = useRef(null)
   
   return (
      <div name = "timeline" className="flex flex-col md:flex-row justify-center items-center pt-[6em] px-[3rem] bg-[#0a192f] z-0">
         <div className="w-full md:w-7/12">
         <div className='sm:text-right pb-8 pl-4 flex flex-row justify-center items-center gap-[3em]'>
            <p className='font-bold  text-center inline border-b-4 border-cyan-300 text-5xl text-[white] '>
              Timeline
            </p>
            </div>
            
            {timeline.map(item => (
               <TimelineItem 
                  key={item.id}
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;