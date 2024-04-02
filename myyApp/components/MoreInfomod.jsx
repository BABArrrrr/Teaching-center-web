'use client'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Box } from '@chakra-ui/react'
import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const MoreInfomod = () => {
    const [openIndex, setOpenIndex] = useState(null); // State to manage open accordion item index

    const info = [
        {
            title: 'How the first lesson with teacher will be?',
            des: 'By the end of the lesson, you will be able to determine for yourself whether this kind of online lesson is right  for you or not. you will be able to determine for yourself whether this kind of online lesson is right  for you or not.'
        },
        {
            title: 'How the second lesson with teacher will be?',
            des: 'By the end of the lesson, you will be able to determine for yourself whether this kind of online lesson is right  for you or not. you will be able to determine for yourself whether this kind of online lesson is right  for you or not.'
        },
        {
            title: 'How the third lesson with teacher will be?',
            des: 'By the end of the lesson, you will be able to determine for yourself whether this kind of online lesson is right  for you or not. you will be able to determine for yourself whether this kind of online lesson is right  for you or not.'
        },
        {
            title: 'How the third lesson with teacher will be?',
            des: 'By the end of the lesson, you will be able to determine for yourself whether this kind of online lesson is right  for you or not. you will be able to determine for yourself whether this kind of online lesson is right  for you or not.'
        },
        {
            title: 'How the third lesson with teacher will be?',
            des: 'By the end of the lesson, you will be able to determine for yourself whether this kind of online lesson is right  for you or not. you will be able to determine for yourself whether this kind of online lesson is right  for you or not.'
        },
        {
            title: 'How the third lesson with teacher will be?',
            des: 'By the end of the lesson, you will be able to determine for yourself whether this kind of online lesson is right  for you or not. you will be able to determine for yourself whether this kind of online lesson is right  for you or not.'
        }
    ]

    // Function to toggle accordion item
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='container mx-auto py-20 '>
            <p className='text-gray-500 text-2xl font-semibond uppercase my-3'>
                MORE INFO
            </p>
            <p className='text-gray-500 text-4xl font-semibond capitalize mb-3'>
                Common questions
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10'>
                {info.map((item, index) => (
                    <div key={index}>
                        <Accordion allowToggle>
                            <AccordionItem className='group'>
                                <h2>
                                    <AccordionButton onClick={() => toggleAccordion(index)} className='py-10 hover:text-white px-8 flex flex-col group-hover:bg-[#524fd5] group-hover:text-white lg:rounded-full rounded-lg border border-gray-200 text-left text-sm font-medium'>
                                        <div className='flex justify-between items-center w-full'>
                                            <Box as="span" flex='1' textAlign='left' className='hover:text-white'>
                                                {item.title}
                                            </Box>
                                            <BsFillPlusCircleFill className={`text-2xl group-hover:bg-[#524fd5] group-hover:text-white text-[#524fd5] transform ${openIndex === index ? 'rotate-45' : 'rotate-0'} transition-all`} />
                                        </div>
                                <AccordionPanel pb={4} className='text-blackgroup-hover:bg-[#524fd5] group-hover:text-white px-4 pt-4 pb-2 text-sm '>
                                    {item.des}
                                </AccordionPanel>
                                    </AccordionButton>
                                </h2>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MoreInfomod;
