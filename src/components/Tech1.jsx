
import React from "react";
import { SectionWrapper } from "../hoc";
import { adobeSoftware, codingLanuages, commandline, databases, frameworks } from "../constants";
import { technologies } from "../constants";

const Tech1 = () => {
    return (
        <>
        <div className='flex flex-wrap justify-center gap-5'>
            <h1 className="">{'Coding Languages'}</h1>

            <div className='flex justify-center gap-10 mb-10'>
                {codingLanuages.map((technology) => (
                    <div className='w-20 h-20' key={technology.name}>
                        <a href={technology.url} target="_blank">
                            <img src={technology.icon} />
                        </a>
                        <h1>{technology.name}</h1>
                    </div>

                ))}
            </div>
        </div>
            <br>
            </br>       
            <div className='flex flex-wrap justify-center gap-5'>
            <h1 className="">{'Frameworks'}</h1>

            <div className='flex justify-center gap-10 mb-10'>
                {frameworks.map((technology) => (
                    <div className='w-20 h-20' key={technology.name}>
                        <a href={technology.url} target="_blank">
                            <img src={technology.icon} />
                        </a>
                        <h1>{technology.name}</h1>
                    </div>

                ))}
            </div>
        </div>
            <br>
            </br>
            <div className='flex flex-wrap justify-center gap-5'>
            <h1 className="">{'Databases'}</h1>

            <div className='flex justify-center gap-10 mb-10'>
                {databases.map((technology) => (
                    <div className='w-20 h-20' key={technology.name}>
                        <a href={technology.url} target="_blank">
                            <img src={technology.icon} />
                        </a>
                        <h1>{technology.name}</h1>
                    </div>

                ))}
            </div>
        </div>
            <br>
            </br>
            <div className='flex flex-wrap justify-center gap-5'>
            <h1 className="">{'Command Line'}</h1>

            <div className='flex justify-center gap-10 mb-10'>
                {commandline.map((technology) => (
                    <div className='w-20 h-20' key={technology.name}>
                        <a href={technology.url} target="_blank">
                            <img src={technology.icon} />
                        </a>
                        <h1>{technology.name}</h1>
                    </div>

                ))}
            </div>
        </div>
            <br>
            </br>
        <div className='flex flex-wrap justify-center gap-5'>
            <h1 className="">{'Adobe Software'}</h1>

            <div className='flex justify-center gap-10 mb-10'>
                {adobeSoftware.map((technology) => (
                    <div className='w-20 h-20' key={technology.name}>
                        <a href={technology.url} target="_blank">
                            <img src={technology.icon} />
                        </a>
                        <h1>{technology.name}</h1>
                    </div>

                ))}
            </div>
        </div>
            </>

    );
};

export default SectionWrapper(Tech1, "");
